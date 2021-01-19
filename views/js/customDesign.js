let windowHeight = $(window).height();
let windowWidth = $(window).width();
if (windowWidth > 500) {
    windowWidth = 500;
    windowHeight -= windowHeight/10;
}
else {
    if (windowHeight > 600) windowHeight = 600;
    else windowHeight -= windowHeight/10;
}
$('#content').css({ height: windowHeight, width: windowWidth});