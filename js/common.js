function txtTypingAnime() {
    $('.txtAnime').each(function(){
        let elemPos = $(this).offset().top - 50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let thisChild = "";
        if(scroll >= elemPos - windowHeight) {
            thisChild = $(this).children();
            thisChild.each(function(i) {
                let time = 100;
                $(this).delay(time * i).fadeIn(time);
            });
        } else {
            thisChild = $(this).children();
            thisChild.each(function() {
                $(this).stop();
                $(this).css("display","none");
            });
        }
    })
}

$(window).on('load', function() {
    let element = $('.txtAnime');
    console.log(element);
    element.each(function() {
        let text = $(this).html();
        let textbox = "";
        text.split('').forEach(function(t) {
            if(t !== " "){
                textbox += '<span>' + t + '</span>';
            }else {
                textbox += t;
            }
        });
        $(this).html(textbox);
    });
    txtTypingAnime();

})