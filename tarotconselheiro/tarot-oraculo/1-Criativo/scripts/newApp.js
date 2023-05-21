/*$(window).load(function () {

    $(".cards-round-deck").addClass("dealt");
});*/
jQuery(function ($){

    if($(window).width()<767){
        $(window).resize();
    }

    var cardsIndex = 0,
        $cardsCircle = $(".cards-round-deck .card-block");
    $cardsCircle.on("click",function () {
        var $this = $(this);
        if(cardsIndex < 1 && !$this.hasClass("zero-opacity")) {
         $(this).addClass("retourne");
            var $fake = $(".forEffect"),
                targetLocation = $(".pseudo-card");
            var fakeClone = $this.clone();
            setTimeout(function () {
                $fake.append(fakeClone);
                fakeClone.css({
                    "left": $this.offset().left + "px",
                    "top": $this.offset().top + "px"
                });
                fakeClone.css({
                    "left": targetLocation.offset().left + "px",
                    "top": targetLocation.offset().top + "px"
                });
                $this.addClass("zero-opacity");
                setTimeout(function () {
                    fakeClone.remove();
                    $this.clone().removeClass("zero-opacity").removeAttr("style").insertBefore(".pseudo-card");
                }, 500);
            }, 500);
            cardsIndex++;
        }
    });
    $cardsCircle.on("mouseenter",function () {
        if(cardsIndex < 1) {
            var $this = $(this),
                index = $this.index();
            if (index <= 1) $this.addClass("hover-one");
            else if (index <= 20) $this.addClass("hover-two");
            else if (index <= 53) $this.addClass("hover-three");
        }
    });
    $cardsCircle.on("mouseleave",function () {
        if(cardsIndex < 1) {
            var $this = $(this),
                index = $this.index();
            if (index <= 1) $this.removeClass("hover-one");
            else if (index <= 20) $this.removeClass("hover-two");
            else if (index <= 53) $this.removeClass("hover-three");
        }
    });
    $cardsCircle.on("click",function () {
        var $this = $(this);
        if(cardsIndex < 1 && !$this.hasClass("zero-opacity")) {
            $(this).addClass("retourne");
            var $fake = $(".forEffect"),
                targetLocation = $(".pseudo-card");
            var fakeClone = $this.clone();
            setTimeout(function () {
                $fake.append(fakeClone);
                fakeClone.css({
                    "left": $this.offset().left + "px",
                    "top": $this.offset().top + "px"
                });
                fakeClone.css({
                    "left": targetLocation.offset().left + "px",
                    "top": targetLocation.offset().top + "px"
                });
                $this.addClass("zero-opacity");
                setTimeout(function () {
                    fakeClone.remove();
                    $this.clone().removeClass("zero-opacity").removeAttr("style").insertBefore(".pseudo-card");
    
                    setTimeout(function() {
                        $('.card-front').click(function() {
                            var cardName = $(this).closest('.card-block').find('.nom-carte').text();
                            var cardLink = '../tarot-oraculo/' + cardName.toLowerCase() + '.html';
                            window.location.href = cardLink;
                        });
                    }, 2000);
                }, 500);
            cardsIndex++;
            }
    )}
    });
    

    $("body,html").animate({scrollTop:1});

    var cardsIndex2 = 0;
    var cardsIndex3 = 0;

    $(".seven-cards .card-block-wrap,.ten-cards .card-block-wrap").on("click",function (e) {
        var $this = $(this);
        if(cardsIndex2 < 3){
            var newClone = $this.clone();
            newClone.css({
                "left" : $this.offset().left+1,
                "top" : $this.offset().top+1
            }).appendTo(".forIllusion");
            $this.find(".card-front-only").hide();
            newClone.addClass("disappearNow");
            newClone.css({
                "left" : newClone.offset().left-200
            });
            setTimeout(function () {
                newClone.css({
                    "top" : newClone.offset().top-200
                });
            },150);
            cardsIndex2++;
        }
    });

    $(".four-cards .card-block-wrap").on("click",function (e) {
        var $this = $(this);
        if(cardsIndex3 < 3 && $this.find("img").hasClass("grayscale-off")){
           $this.find("img").removeClass("grayscale-off");
            cardsIndex3++;
        }
    });


   

});