// 바메뉴 클릭시 메뉴 펼쳐짐
<<<<<<< HEAD
$('.barmenu').click(function () {
    $('header').toggleClass("headerbg");
    $('nav ul li a, .menubox i').toggleClass("black");
    $('nav ul li ul').toggle();
    $('.searchBox').hide();
    if ($('.logobox a img').attr('src') == 'img/logo.png') {
        $('.logobox a img').attr('src', 'img/logoblack.png');
    }
    else {
        $('.logobox a img').attr('src', 'img/logo.png');
    }
=======
$('.barmenu').click(function(){
    $('header').css({'background':'#F7F5EC','opacity':'0.8'});
    $('nav ul li a').css('color','black');
    $('.menubox i').css('color','black');
    $('.logobox2').show();
    $('.logobox').hide();
    $('nav ul li ul').toggle();
    $('.searchBox').hide();
>>>>>>> 450fafd7545156f4a1658a5aaccbcca65d557cbc

});

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

// looking 구좌
// 호버하면 이미지 전환
$('#allbt').hover(function(){
    $('.allmenu').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.allmenu').hide();
});

$('#fabricbt').hover(function(){
    $('.fabric').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.fabric').hide();
});

$('#flbt').hover(function(){
    $('.flooring').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.flooring').hide();
});

$('#moodbt').hover(function(){
    $('.mood').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.mood').hide();
});

$('#spabt').hover(function(){
    $('.spa').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.spa').hide();
});

$('#designbt').hover(function(){
    $('.design').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.design').hide();
});

$('#teabt').hover(function(){
    $('.tea').stop().fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').stop().fadeIn();
    $('.tea').hide();
});

// special offers 구좌 클릭
$('#btn1').click(function(){
    $('#btn1T').show();
    $('#btn2T').hide();
    $('#btn3T').hide();
    $('#btn4T').hide();
    $('#btn5T').hide();
    $('#btn6T').hide();
    $('#btn7T').hide();
});
$('#btn2').click(function(){
    $('#btn2T').show();
    $('#btn1T').hide();
    $('#btn7T').hide();
    $('#btn3T').hide();
    $('#btn4T').hide();
    $('#btn5T').hide();
    $('#btn6T').hide();
});
$('#btn3').click(function(){
    $('#btn3T').show();
    $('#btn1T').hide();
    $('#btn7T').hide();
    $('#btn2T').hide();
    $('#btn4T').hide();
    $('#btn5T').hide();
    $('#btn6T').hide();
});
$('#btn4').click(function(){
    $('#btn4T').show();
    $('#btn1T').hide();
    $('#btn7T').hide();
    $('#btn3T').hide();
    $('#btn2T').hide();
    $('#btn5T').hide();
    $('#btn6T').hide();
});
$('#btn5').click(function(){
    $('#btn5T').show();
    $('#btn1T').hide();
    $('#btn7T').hide();
    $('#btn3T').hide();
    $('#btn4T').hide();
    $('#btn2T').hide();
    $('#btn6T').hide();
});
$('#btn6').click(function(){
    $('#btn6T').show();
    $('#btn1T').hide();
    $('#btn7T').hide();
    $('#btn3T').hide();
    $('#btn4T').hide();
    $('#btn5T').hide();
    $('#btn2T').hide();
});
$('#btn7').click(function(){
    $('#btn7T').show();
    $('#btn1T').hide();
    $('#btn2T').hide();
    $('#btn3T').hide();
    $('#btn4T').hide();
    $('#btn5T').hide();
    $('#btn6T').hide();
});

// 메인 텍스트 구좌 상담 요청 버튼 클릭시 팝업 노출
function showPopup(){
    window.open(
        "popup.html",
        "popup",
        "width=600, height=500, left=100, top=50"
    );
}

// our stay 슬라이드
$('.prev').click(function(){
    $('.slideul li:last').prependTo('.slideul');
    $('.slideul').css('margin-left','-188%');
    $('.slideul').stop().animate({marginLeft:"-94%"},800);
});

$('.next').click(function(){
    $('.slideul').stop().animate({marginLeft:"-190%"},800, function(){
        $('.slideul li:first').appendTo('.slideul');
        $('.slideul').css({marginLeft:"-94%"});
    });
});