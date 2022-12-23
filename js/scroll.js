window.onload=function(){
    setInterval(function(){
        var scroll = $(window).scrollTop();
            if (scroll < 700) {
            $("body").animate({backgroundColor: 'rgb(20, 20, 20)'}, 600); //изначально фон черный
            }
            if (scroll >= 701) {
            $("body").animate({backgroundColor: '#5086fc'}, 600); //затем синий
            }
    }, 601);
}


