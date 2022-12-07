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


// 서치 아이콘 클릭
$('.fa-magnifying-glass').click(function(){
    $('.searchBox').toggle();
});

$('.fa-circle-xmark').click(function(){
    $('.searchBox').hide();
});
