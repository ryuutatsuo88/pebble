function getDailyTerm() {
		var r;
  		var req = new XMLHttpRequest();
  		req.open('POST', "http://speakniwota.com/dailyword", true);
  		req.onload = function(e) {
    		if (req.readyState == 4) {
      			if(req.status == 200) {
        			r = JSON.parse(req.responseText);
        			
        			if (r) {
						Pebble.sendAppMessage({"0": r.enpin, "1": r.en});
        			}
      			} else {
       				console.log("Error");
      			}
   			 }
  		}
  		req.send("application=speakniwota&pebble=pebble");
};

Pebble.addEventListener("ready",
    function(e) {
		getDailyTerm();
    }
);

Pebble.addEventListener("appmessage",
  function(e) {
  		getDailyTerm();
  }
);

