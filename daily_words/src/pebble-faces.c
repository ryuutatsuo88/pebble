#include <pebble.h>
#include "netimage.h"

static Window *window;

static TextLayer *text_layer;
static TextLayer *text_layer2;
static TextLayer *text_layer3;
static ScrollLayer *scroll_layer;

static const int vert_scroll_text_padding = 40;

enum {
  ISDONE = 0,
  PINYIN = 1,
  EN = 2,
  TONED = 3
};

static BitmapLayer *bitmap_layer;
static GBitmap *current_image;

static uint image = 0;


static void select_click_handler(ClickRecognizerRef recognizer, void *context) {
  bitmap_layer_set_bitmap(bitmap_layer, NULL);
  text_layer_set_text(text_layer, "Loading...");
  text_layer_set_text(text_layer3, "");
  text_layer_set_text(text_layer2, "");
  netimage_request();
}

static void up_click_handler(ClickRecognizerRef recognizer, void *context) {}

static void down_click_handler(ClickRecognizerRef recognizer, void *context) {}

static void click_config_providers(void *context) {
  window_single_click_subscribe(BUTTON_ID_SELECT, select_click_handler);
  //window_single_click_subscribe(BUTTON_ID_UP, up_click_handler);
  //window_single_click_subscribe(BUTTON_ID_DOWN, down_click_handler);
}


static void scroll_size_make() {
  Layer *window_layer = window_get_root_layer(window);	
  GRect bounds = layer_get_bounds(window_layer);	
  // Trim text layer and scroll content to fit text box
  GSize max_size_1 = text_layer_get_content_size(text_layer);
  GSize max_size_3 = text_layer_get_content_size(text_layer3);
  GSize max_size_2 = text_layer_get_content_size(text_layer2);
  scroll_layer_set_content_size(scroll_layer, GSize(bounds.size.w, max_size_1.h  + max_size_1.h + max_size_2.h + max_size_3.h + vert_scroll_text_padding));
}

void display_image(GBitmap *image, DictionaryIterator *iter) {
  bitmap_layer_set_bitmap(bitmap_layer, image);
  // Free the memory used by the previous image
  if (current_image) {
    free(current_image);
  }
  // Keep a pointer to this image data so we can free it later.
  current_image = image;
	

	 Tuple *pinyin = dict_find(iter, PINYIN);
     Tuple *tone = dict_find(iter, TONED);
	 Tuple *en = dict_find(iter, EN);
     text_layer_set_text(text_layer, pinyin->value->cstring);
     text_layer_set_text(text_layer3, tone->value->cstring);
	 text_layer_set_text(text_layer2, en->value->cstring);

	 scroll_size_make();
}

static void window_load(Window *window) {
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_bounds(window_layer);
  GRect max_map_bounds = GRect(0, 0, bounds.size.w, 40);
  GRect max_text_bounds = GRect(0, 40, bounds.size.w, 40);
  GRect max_text_bounds3 = GRect(0, 80, bounds.size.w, 40);
  GRect max_text_bounds2 = GRect(0, 120, bounds.size.w, 2000);

  // Initialize the scroll layer
  scroll_layer = scroll_layer_create(bounds);	
	
  // This binds the scroll layer to the window so that up and down map to scrolling
  // You may use scroll_layer_set_callbacks to add or override interactivity	
	scroll_layer_set_callbacks(scroll_layer, (ScrollLayerCallbacks){
		.click_config_provider = click_config_providers
	});
	scroll_layer_set_click_config_onto_window(scroll_layer, window);
	
  //text layer stuff	
  text_layer = text_layer_create(max_text_bounds);
  text_layer_set_background_color(text_layer, GColorBlack);
  text_layer_set_text_color(text_layer, GColorWhite);
  text_layer_set_font(text_layer, fonts_get_system_font(FONT_KEY_GOTHIC_28_BOLD));
  text_layer_set_text(text_layer, "Loading...");
  text_layer_set_text_alignment(text_layer, GTextAlignmentCenter);
   
  text_layer3 = text_layer_create(max_text_bounds3);
  text_layer_set_background_color(text_layer3, GColorBlack);
  text_layer_set_text_color(text_layer3, GColorWhite);
  text_layer_set_font(text_layer3, fonts_get_system_font(FONT_KEY_GOTHIC_28));
  text_layer_set_text(text_layer3, "");
  text_layer_set_text_alignment(text_layer3, GTextAlignmentCenter);
   
  text_layer2 = text_layer_create(max_text_bounds2);
  text_layer_set_background_color(text_layer2, GColorBlack);
  text_layer_set_text_color(text_layer2, GColorWhite);
  text_layer_set_font(text_layer2, fonts_get_system_font(FONT_KEY_GOTHIC_28));
  text_layer_set_text(text_layer2, "");
  text_layer_set_text_alignment(text_layer2, GTextAlignmentCenter);	
  
  bitmap_layer = bitmap_layer_create(max_map_bounds);
  bitmap_layer_set_background_color(bitmap_layer, GColorBlack);	
	
  scroll_size_make();
	
  // Add the layers for display
  scroll_layer_add_child(scroll_layer, bitmap_layer_get_layer(bitmap_layer));
  scroll_layer_add_child(scroll_layer, text_layer_get_layer(text_layer));
  scroll_layer_add_child(scroll_layer, text_layer_get_layer(text_layer3));
  scroll_layer_add_child(scroll_layer, text_layer_get_layer(text_layer2));
  
  layer_add_child(window_layer, scroll_layer_get_layer(scroll_layer));
	
  current_image = NULL;
}

static void window_unload(Window *window) {
  text_layer_destroy(text_layer);
  bitmap_layer_destroy(bitmap_layer);
  if (current_image) {
    free(current_image);
  }
}

static void init(void) {
  window = window_create();
  window_set_window_handlers(window, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  const bool animated = true;
  window_stack_push(window, animated);

  netimage_initialize(display_image);
  netimage_request();	
}

static void deinit(void) {
  netimage_deinitialize(); // call this to avoid 20B memory leak
  window_destroy(window);
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
