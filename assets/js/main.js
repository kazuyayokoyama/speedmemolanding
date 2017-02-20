/* PrettyPhoto for Vimeo Video */
$(document).ready(function(){
  $("a[rel^='prettyPhoto']").prettyPhoto();
});

/* Google Plus One Button */
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

/* Change Language */
function changeLanguage() {
    var elem_target = $('#language');
    var elem_img = $('img#iphone');
    if (elem_target.text().match(/Japanese/)) {
        $("[rel*=localize]").localize("assets/js/speedmemo", { language: "ja" });
        elem_target.html("English &raquo;");
        elem_img.attr('src', "assets/img/iphone_black_jp.png");
    }
    else {
        $("[rel*=localize]").localize("assets/js/speedmemo", { language: "en" });
        elem_target.html("Japanese &raquo;");
        elem_img.attr('src', "assets/img/iphone_black.png");
    }
}