window.onload = function () {
	var products = document.getElementsByClassName("products");
	var discription = document.getElementsByClassName("discription");
	var mainImg = document.getElementsByTagName("img");
				
	for(var i=0; i<products.length; i++)	{
		var htmlLoop = function  (i) {
			products[i].onmouseover = function() {
				var xhr = new XMLHttpRequest();
				mainImg[i].style.display = "";
				xhr.open("GET", "http://www.randomtext.me/api/lorem/h2/2-2/", false);
				xhr.send();
				var outText = JSON.parse(xhr.responseText);			
				discription[i].innerHTML = outText.text_out;
			}
		}
		htmlLoop(i);
	}
}


