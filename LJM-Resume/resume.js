var imgArr = [
		"url(../images/background/bg2.jpg)",
		"url(../images/background/bg14.gif)",
		"url(../images/background/bg6.gif)",
		"url(../images/background/bg15.gif)",
		"url(../images/background/bg5.gif)",
		"url(../images/background/bg11.jpg)",
		"url(../images/background/bg7.jpg)",
		"url(../images/background/bg1.jpg)",
		"url(../images/background/bg22.jpg)",
		"aa"
	];

function change(){
	
	var index = parseInt(Math.random()*(imgArr.length-1));
	var currentImage = imgArr[index];
	//alert(currentImage);
	document.getElementById("body").style.backgroundImage = currentImage;
}
