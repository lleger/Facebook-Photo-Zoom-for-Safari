$(document).ready(function () {
    $("a.uiPhotoThumb img, img.uiProfilePhoto, img.UIProfileImage, img#profile_pic, img.UIPhotoGrid_Image, a.UIImageBlock_Image img, img.buddy_photo, a.chat_info_pic_link img, div.UIMediaItem_Photo a div.UIMediaItem_Wrapper img").hover(function (e) {
        var image = $(this).attr("src").replace(/_(q|s).jpg/i, "_n.jpg");
        $("body").prepend('<div id="fbzoom"><img src="' + image + '" /></div>');
    }, function () {
        $("#fbzoom").remove();
    });
    $("img").mousemove(function (e) {
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
    });
});