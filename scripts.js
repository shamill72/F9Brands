// active function to check for scroll function to insert sticky into header menu
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

// function to place border box around selected menu item of active page
$(document).ready(function() {
    var url = window.location.href;
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    url = url.substring(url.lastIndexOf("/") + 1);
    if(url == '') {
        url = 'index.html';
    }
    $('.toggle li').each(function(){
        var href = $(this).find('a').attr('href');
        href = href.substring(href.lastIndexOf("/") + 1);
        if(url == href) {
            $(this).addClass('active');
            if($(this).find('a').attr('id') == "sw") {
                $(this).find('a').css('color', '#1db963');
            } else if($(this).find('a').attr('id') == "ctg") {
                $(this).find('a').css('color', '#c253c2');
            } else if($(this).find('a').attr('id') == "gh") {
                $(this).find('a').css('color', '#e0b15b');
            } else if($(this).find('a').attr('id') == "tb") {
                $(this).find('a').css('color', 'rgb(2, 142, 248)');
            }
        }
    });
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