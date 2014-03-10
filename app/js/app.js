window.onload = function(){
	if(JLogam.setup()){
		JLogam.on(
			"ironMan",
			function (){
				marvelSearch("iron man");
		});
		JLogam.on(
			"spiderMan",
			function (){
				marvelSearch("spider-man");
		});
	}
}


window.addEventListener('touchstart', function(e) {
	if(isIronManConfigured) {
		isTouchIronMan = true;
	}

	if(e.touches.length == 2){
		if(isSpiderManConfigured) {
			isTouchSpiderMan = true;
		}
	}


}, false);

function marvelSearch(superheroi) {
	vibrar();
    var img = document.getElementById("img");
    var arg = "https://gateway.marvel.com/v1/public/characters?ts=2014&apikey=27b84e920652944f3b75057e82642170&hash=77dc9d159c3ce029aa4e9627cd55f1f9&name=" + superheroi + "";
    $.getJSON(arg, function (data) {
        if (data.data.count == 0) {
            return false;
        }
        src = data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension;
        img.setAttribute("src", src);
        details.setAttribute("href", data.data.results[0].urls[0].url)
        wiki.setAttribute("href", data.data.results[0].urls[1].url)
        return true;
    });
}