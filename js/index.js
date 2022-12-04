// looking 구좌
// 호버하면 이미지 전환

$('#allbt').hover(function(){
    $('.allmenu').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.allmenu').hide();
});

$('#fabricbt').hover(function(){
    $('.fabric').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.fabric').hide();
});

$('#flbt').hover(function(){
    $('.flooring').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.flooring').hide();
});

$('#moodbt').hover(function(){
    $('.mood').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.mood').hide();
});

$('#spabt').hover(function(){
    $('.spa').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.spa').hide();
});

$('#designbt').hover(function(){
    $('.design').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.design').hide();
});

$('#teabt').hover(function(){
    $('.tea').fadeIn();
    $('.defalt').hide();
}, function(){
    $('.defalt').fadeIn();
    $('.tea').hide();
});