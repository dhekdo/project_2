// 메뉴바 클릭시 전환
if (window.matchMedia("(min-width: 1280px)").matches) { 
    $('.barmenu').click(function () {
        $('header').toggleClass("headerbg");
        $('nav ul li a, .menubox i').toggleClass("black");
        $('nav ul li ul').toggle();
        $('.searchBox').hide();
    
    });
    

} else { 
    $('.barmenu').click(function () {
        $('header').toggleClass("headerbg");
        $('nav ul li a, .menubox i').toggleClass("black");
        $('nav ul').toggle();

    });
}

// 서치 아이콘 클릭
$('.fa-magnifying-glass').click(function(){
    $('.searchBox').toggle();
});

$('.fa-circle-xmark').click(function(){
    $('.searchBox').hide();
});

$('.fa-magnifying-glass').click(function(){
    $('nav ul li ul').hide();
});




