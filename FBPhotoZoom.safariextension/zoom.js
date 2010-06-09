$(document).ready(function() {
	$("a.uiPhotoThumb img, img.uiProfilePhoto, img.UIProfileImage, img#profile_pic, img.UIPhotoGrid_Image").hover(function(e) {
		var image = $(this).attr("src").replace(/_(q|s).jpg/i,"_n.jpg");
		$("body").prepend('<div id="fbzoom"><img src="'+image+'" /></div>');
	},function() {
		$("#fbzoom").remove();
	});
	$("img").mousemove(function(e){
		iheight = $("#fbzoom img").height();
		if ($(window).scrollTop() + 20 >= e.pageY - iheight) {
			$("#fbzoom").css("top",(e.pageY-10)+"px").css("left",(e.pageX+30)+"px");
		}
		else {
			$("#fbzoom").css("top",(e.pageY-iheight-10)+"px").css("left",(e.pageX+30)+"px");
		}
	});
});