window.onload = function(){
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


// 메인4 클릭시 사진 전환
$('.bt1').click(function (){
    $('.main4_photobox .box1').fadeIn();
    $('.main4_photobox .box2').hide();
    $('.main4_photobox .box3').hide();
    $('.bt1').addClass('bt_black');
    $('.bt2').removeClass('bt_black');
    $('.bt3').removeClass('bt_black');
});
$('.bt2').click(function (){
    $('.main4_photobox .box2').fadeIn();
    $('.main4_photobox .box1').hide();
    $('.main4_photobox .box3').hide();
    $('.bt2').addClass('bt_black');
    $('.bt1').removeClass('bt_black');
    $('.bt3').removeClass('bt_black');
});
$('.bt3').click(function (){
    $('.main4_photobox .box3').fadeIn();
    $('.main4_photobox .box2').hide();
    $('.main4_photobox .box1').hide();
    $('.bt3').addClass('bt_black');
    $('.bt2').removeClass('bt_black');
    $('.bt1').removeClass('bt_black');
});
}
