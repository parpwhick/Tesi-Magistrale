// defining arrays for languages and images

	langIndexes = new Array('ar','zh','en','fr','ru','es');
	langImagesOver = new Array();
	langImagesOut = new Array();

// language buttons are preloaded into the browser cache for instant display even on low bandwidth client

	for( i = 0; i < langIndexes.length; i++ ){
		langImagesOver[langIndexes[i]] = new Image();
		langImagesOver[langIndexes[i]].src = '/sysmedia/images/' + langIndexes[i] + '_over.gif';
		langImagesOut[langIndexes[i]] = new Image();
		langImagesOut[langIndexes[i]].src = '/sysmedia/images/' + langIndexes[i] + '_off.gif';
	}

// spanish button for arabic pages

	if( document.location.href.indexOf("/ar/") > -1 ){
		langImagesOver['es'].src = '/sysmedia/images/es2_over.gif';
		langImagesOut['es'].src = '/sysmedia/images/es2_off.gif';
	}

// language button swap function

	function swap(langCode,langStatus){
		if( langStatus ){
			document.images[langCode].src = langImagesOver[langCode].src;
		}else{
			document.images[langCode].src = langImagesOut[langCode].src;
		}
	}