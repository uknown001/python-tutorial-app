// global events
document.addEventListener('deviceready', function() {
    
}, false);
document.addEventListener('backbutton', function() {
    goBack();
}, false);

// Global variables
var layer = 1;

// Event listeners 
$('.learn').click(function() {
    $('.startPage').fadeOut(300);
    $('.learnPage').fadeIn(300);
    layer++;
});
$('.about').click(function() {
    $('.startPage').fadeOut(300);
    $('.aboutAppPage').fadeIn(300);
    layer++;
});
$('.exit').click(function() { 
    navigator.app.exitApp();
});
$('.back').click(function() { 
    goBack();
});
// additional functionality
function goBack() {
    switch(layer) {
        case 1: navigator.app.exitApp();
        case 2:
            $('.aboutAppPage').fadeOut(300);
            $('.learnPage').fadeOut(300);
            window.setTimeout(function(){$('.startPage').fadeIn(300);}, 200);
            layer--;
            break;
        case 3: break;
    }
}