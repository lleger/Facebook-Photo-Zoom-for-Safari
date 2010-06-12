var selectors = ["a.uiPhotoThumb img", "img.uiProfilePhoto", "img.UIProfileImage", "img#profile_pic", "img.UIPhotoGrid_Image", "a.UIImageBlock_Image img", "img.buddy_photo", "a.chat_info_pic_link img", "div.UIMediaItem_Photo a div.UIMediaItem_Wrapper img"]

$(document).ready(function() {
	fbzoom();
});

function fbzoom() {
    $(selectors.join(",")).hover(function (e) {
        var image = $(this).attr("src");
				if (image.match(/_(q|s).jpg/)) {
					image = image.replace(/_(q|s).jpg/, "_n.jpg");	
				} else {
					image = image.replace(/\/(q|s)/, "/n");
				}
				var title = $(this).attr("alt") || $(this).attr("title");
				hover_timer = setTimeout(function() {
					$("body").prepend('<div id="fbzoom"><img src="' + image + '" /></div>');
					if (title.length > 0) {
						$("#fbzoom").append("<p>"+title+"</p>");
					}
					position_fbzoom(e);
				},250);
    }, function () {
        $("#fbzoom").remove();
				clearTimeout(hover_timer);
    });
    $("img").mousemove(function (e) {
				position_fbzoom(e);
    });
}

function position_fbzoom(e) {
	iheight = $("#fbzoom img").height();
  iwidth = $("#fbzoom img").width();
  if ($(window).scrollTop() + 20 >= e.pageY - iheight) {
      $("#fbzoom").css("top", (e.pageY - 10) + "px")
  } else {
      $("#fbzoom").css("top", (e.pageY - iheight - 10) + "px")
  }
  if ($(window).width() - 20 >= e.pageX + iwidth) {
      $("#fbzoom").css("left", (e.pageX + 30) + "px");
  } else {
      $("#fbzoom").css("left", (e.pageX - 30 - iwidth) + "px");
  }
}