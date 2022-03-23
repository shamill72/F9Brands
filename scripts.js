$(window).scroll(function () {
    if($(this).scrollTop() > 10) {
        $('#topHeader').addClass('sticky');
        $('#F9Image').addClass('stickyImg');
        $('#bottomHeader').addClass('stickyBottom');
    } else {
        $('#topHeader').removeClass('sticky');
        $('#F9Image').removeClass('stickyImg');
        $('#bottomHeader').removeClass('stickyBottom');
    }
});

function myFunction() {
    var x = document.getElementById("topHeader");
    if(x.className === "topHeader") {
        x.className += " responsive";
    } else if(x.className === "topHeader sticky") {
        x.className += " responsive";
    } else if($(this).scrollTop() > 10) {
        x.className = "topHeader sticky";
    } else {
        x.className = "topHeader";
    }
}