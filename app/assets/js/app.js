var video = {
	credits : $('#credits'),
	link : $('a#toggle'),
	isClosed : true,
	toggle : function(){
		if (this.isClosed) {
			console.log('closed');
			this.isClosed = false;
			video.credits.fadeOut();
		} else {
			console.log('open');
			this.isClosed = true;
			video.credits.fadeIn();
		}
	}

}

var audio = {
	link : $('a.open'),
	toggle : function(event){
		event.preventDefault();
		var credits = $(this).siblings('.credits');
		if (credits.hasClass('open')) {
			credits.removeClass('open');
			console.log('close');
		} else {
			credits.addClass('open');
			console.log('open');	
		}
	}
}
ß
$('#credits').hide();

$(function(){

	video.link.on('click', video.toggle);
	audio.link.on('click', audio.toggle);

	$('audio,video').mediaelementplayer({
		features: ['playpause','progress']
	});

});
