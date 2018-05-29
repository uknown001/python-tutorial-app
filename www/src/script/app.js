// global deviceready event
document.addEventListener('deviceready', function() {

}, false);

var layer = 1;

// Event listeners 
$('.about').click(function() {
    $('.startPage').fadeOut(300);
    $('.aboutAppPage').fadeIn(300);
    layer++;
});
$('.back').click(function() { 
    $('.aboutAppPage').fadeOut(400);
    $('.startPage').fadeIn(400);
    layer--;
});
$('.exit').click(function() { 
    navigator.app.exitApp();
});