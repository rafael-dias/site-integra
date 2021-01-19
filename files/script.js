$(document).ready(function(){
    let xjanela = $(document).width()

    $("#menu-claro").hide();
    $("#detalhe-projeto").hide();
    

    $("#area-menu").css("height", xjanela / 13.21 + "px")
    $("#detalhe-projeto").css("top", xjanela * 1.72 + "px")
    $("#area-projetos").css("top", xjanela * 1.968 + "px")
    $("#area-projetos").css("width", xjanela / 3.9895 + "px")
    $("#area-projetos").css("height", xjanela / 4.4153 + "px")
    $("#area-projetos").css("left", xjanela / 4.013 + "px")
    $("#area-banner").css("height", xjanela / 2.54411 + "px")
    $("#area-banner").css("top", xjanela / 13.21 + "px")
    $(".banner").css("height", xjanela / 2.4875 + "px")
    $(".banner").css("top", xjanela / 13.21 + "px")

    $("#area-menu").click(function(){
        $("#menu-claro").css("display") == "none" ? $("#menu-claro").show() : $("#menu-claro").hide();
    })
    $("#area-projetos").click(function(){
        $("#detalhe-projeto").css("display") == "none" ? $("#detalhe-projeto").show() : $("#detalhe-projeto").hide();
    })
    $("#detalhe-projeto").click(function(){
        $("#detalhe-projeto").css("display") == "none" ? $("#detalhe-projeto").show() : $("#detalhe-projeto").hide();
    })

    $("#area-banner").click(function(){
        var numImags = 5
        var num = parseInt($(".banner-ativo").attr("src").split("banner_")[1].split(".png")[0])
        var prox = num+1
        if(num == numImags){
            num = 0
            $("#banner_1").toggleClass('banner-oculto')
            $("#banner_1").toggleClass('banner-ativo')
            $("#banner_"+numImags).toggleClass('banner-oculto')
            $("#banner_"+numImags).toggleClass('banner-ativo')

        }else{

            $("#banner_"+ num).toggleClass('banner-oculto')
            $("#banner_"+ num).toggleClass('banner-ativo')
            $("#banner_"+ prox).toggleClass('banner-oculto')
            $("#banner_"+ prox).toggleClass('banner-ativo')
        // $("#banner_"+ num+1).toggleClass('banner-oculto')
    }
})
    
})
$( window ).resize(function() {

    console.log("entra");
    let xjanela = $(document).width()

    $("#area-menu").css("height", xjanela/13.21 + "px")
    $("#detalhe-projeto").css("top", xjanela * 1.72 + "px")
    $("#area-projetos").css("top", xjanela * 1.968 + "px")
    $("#area-projetos").css("width", xjanela / 3.9895 + "px")
    $("#area-projetos").css("height", xjanela / 4.4153 + "px")
    $("#area-projetos").css("left", xjanela / 4.013 + "px")
    $("#area-banner").css("height", xjanela / 2.54411 + "px")
    $("#area-banner").css("top", xjanela / 13.21 + "px")
    $(".banner").css("height", xjanela / 2.4875 + "px")
    $(".banner").css("top", xjanela / 13.21 + "px")
});