function tonefy (s) {
s = s.toLowerCase();
s = s.replace(/āng/g, "ang1");
s = s.replace(/áng/g, "ang2");
s = s.replace(/ǎng/g, "ang3");
s = s.replace(/àng/g, "ang4");
s = s.replace(/ēng/g, "eng1");
s = s.replace(/éng/g, "eng2");
s = s.replace(/ěng/g, "eng3");
s = s.replace(/èng/g, "eng4");
s = s.replace(/īng/g, "ing1");
s = s.replace(/íng/g, "ing2");
s = s.replace(/ǐng/g, "ing3");
s = s.replace(/ìng/g, "ing4");
s = s.replace(/ōng/g, "ong1");
s = s.replace(/óng/g, "ong2");
s = s.replace(/ǒng/g, "ong3");
s = s.replace(/òng/g, "ong4");
s = s.replace(/ān/g, "an1");
s = s.replace(/án/g, "an2");
s = s.replace(/ǎn/g, "an3");
s = s.replace(/àn/g, "an4");
s = s.replace(/ēn/g, "en1");
s = s.replace(/én/g, "en2");
s = s.replace(/ěn/g, "en3");
s = s.replace(/èn/g, "en4");
s = s.replace(/īn/g, "in1");
s = s.replace(/ín/g, "in2");
s = s.replace(/ǐn/g, "in3");
s = s.replace(/ìn/g, "in4");
s = s.replace(/ūn/g, "un1");
s = s.replace(/ún/g, "un2");
s = s.replace(/ǔn/g, "un3");
s = s.replace(/ùn/g, "un4");
s = s.replace(/ér/g, "er2");
s = s.replace(/ěr/g, "er3");
s = s.replace(/èr/g, "er4");
s = s.replace(/āo/g, "aō");
s = s.replace(/áo/g, "aó");
s = s.replace(/ǎo/g, "aǒ");
s = s.replace(/ào/g, "aò");
s = s.replace(/ōu/g, "oū");
s = s.replace(/óu/g, "oú");
s = s.replace(/ǒu/g, "oǔ");
s = s.replace(/òu/g, "où");
s = s.replace(/āi/g, "aī");
s = s.replace(/ái/g, "aí");
s = s.replace(/ǎi/g, "aǐ");
s = s.replace(/ài/g, "aì");
s = s.replace(/ēi/g, "eī");
s = s.replace(/éi/g, "eí");
s = s.replace(/ěi/g, "eǐ");
s = s.replace(/èi/g, "eì");
s = s.replace(/ā/g, "a1");
s = s.replace(/á/g, "a2");
s = s.replace(/ǎ/g, "a3");
s = s.replace(/à/g, "a4");
s = s.replace(/ē/g, "e1");
s = s.replace(/é/g, "e2");
s = s.replace(/ě/g, "e3");
s = s.replace(/è/g, "e4");
s = s.replace(/ī/g, "i1");
s = s.replace(/í/g, "i2");
s = s.replace(/ǐ/g, "i3");
s = s.replace(/ì/g, "i4");
s = s.replace(/ō/g, "o1");
s = s.replace(/ó/g, "o2");
s = s.replace(/ǒ/g, "o3");
s = s.replace(/ò/g, "o4");
s = s.replace(/ū/g, "u1");
s = s.replace(/ú/g, "u2");
s = s.replace(/ǔ/g, "u3");
s = s.replace(/ù/g, "u4");
s = s.replace(/ǖ/g, "ü1");
s = s.replace(/ǘ/g, "ü2");
s = s.replace(/ǚ/g, "ü3");
s = s.replace(/ǜ/g, "ü4");

s = s.replace(/n1ang/g, "3nang");
s = s.replace(/n2ang/g, "3nang");
s = s.replace(/n3ang/g, "3nang");
s = s.replace(/n4ang/g, "3nang");
s = s.replace(/n1eng/g, "3neng");
s = s.replace(/n2eng/g, "3neng");
s = s.replace(/n3eng/g, "3neng");
s = s.replace(/n4eng/g, "3neng");
s = s.replace(/n1ing/g, "3ning");
s = s.replace(/n2ing/g, "3ning");
s = s.replace(/n3ing/g, "3ning");
s = s.replace(/n4ing/g, "3ning");
s = s.replace(/n1ong/g, "3nong");
s = s.replace(/n2ong/g, "3nong");
s = s.replace(/n3ong/g, "3nong");
s = s.replace(/n4ong/g, "3nong");

s = s.replace(/hen2an2/g, "he2nan2");
s = s.replace(/hun2an2/g, "hu2nan2");
s = s.replace(/zhun2an2/g, "zhu2nan2");
s = s.replace(/hun3an2/g, "hu3nan2");
s = s.replace(/lin3an2/g, "li3nan2");
s = s.replace(/zhin3an2/g, "zhi3nan2");
s = s.replace(/bun4an2/g, "bu4nan2");
s = s.replace(/chin4an2/g, "chi4nan2");
s = s.replace(/shin4an2/g, "shi4nan2");
s = s.replace(/man3an3/g, "ma3nan3");
s = s.replace(/ban1en4/g, "ba1nen4");
s = s.replace(/jin2an4/g, "ji2nan4");
s = s.replace(/yin2an4 /g, "yi2nan4");
s = s.replace(/hen2an4/g, "he2nan4");
s = s.replace(/lin2an4/g, "li2nan4");
s = s.replace(/zen2an4/g, "ze2nan4");
s = s.replace(/kun3an4/g, "ku3nan4");
s = s.replace(/sin3an4/g, "si3nan4");
s = s.replace(/yun4an4/g, "yu4nan4");

s = s.replace(/ner4en3/g, "ne4ren3");
s = s.replace(/er4an2/g, "e4ran2");
s = s.replace(/ger4en2/g, "ge4ren2");
s = s.replace(/her2en2/g, "he2ren2");
s = s.replace(/zher2en2/g, "zhe2ren2");
s = s.replace(/zer2en2/g, "ze2ren2");
s = s.replace(/zer2en4/g, "ze2ren4");
s = s.replace(/der2en2/g, "de2ren2");
s = s.replace(/ker4en2/g, "ke4ren2");
s = s.replace(/ser4en2/g, "se4ren2");
s = s.replace(/ker4an2/g, "ke4ran2");

return s;
}	

function getDailyTerm() {
		var r;
  		var req = new XMLHttpRequest();
  		req.open('POST', "http://speakniwota.com/dailyword", true);
  		req.onload = function(e) {
    		if (req.readyState == 4) {
      			if(req.status == 200) {
        			r = JSON.parse(req.responseText);
        			
        			if (r) {
						Pebble.sendAppMessage({"0": r.enpin, "1": r.en, "2": tonefy(r.pinyin)});
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

