
$(document).ready(function(){
    a = 1;
    $('#next').click(function(){
        a = a + 1;
        b= a % 5;
        if(b == 0){
            b= 5;
        };
    $("#number").text(b);
    });
    $('#prev').click(function(){
        a = $('#number').text();
        a = a - 1;
        b = a%5;
        if(b == 0){
            b = 5;
        };
    $("#number").text(b);
    });
    $(".buttonPages").mouseover(function () {
        $(this).attr('src', $(this).data("hover"));
    }).mouseout(function () {
        $(this).attr('src', $(this).data("src"));
    });
    $('.carousel').carousel({
        interval: false
    });
});
