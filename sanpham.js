function changeImage(obj) {
    var path = obj.src
    var img = document.getElementById("mainImg")
    img.src = path
}

$(document).ready(function(){
    $("#kihieu").click(function(){
        document.body.style.overflow ='hidden';
        $(".overlay").show();
        $('nav').slideDown("slow");
});
});

$(document).ready(function(){
    $("a.exit").click(function(){
        document.body.style.overflow ='auto';
        $('nav').slideUp("slow");
        $(".overlay").hide();
});
});

$(document).ready(function(){
    $("#down").click(function(){
        $("#down").hide();
            $("#up").show();
            $('.menucon1').toggle("slow");
});
});
       
$(document).ready(function(){
    $("#up").click(function(){
        $("#up").hide();
        $("#down").show();
        $('.menucon1').toggle("slow");
});
});

$(document).ready(function() {
    $("#gototop").hide()

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        },1000);
    })
})

$(document).ready(function() {
    $("div.size a").click(function() {
        $("div.size a").removeClass("active")
        $(this).addClass("active")
    })
})