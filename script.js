$(function () {
    <!-------------------------------------------- Exercice 1 -------------------------------------->
    var nombre = 0;
    $("#but_1").click(function () {
        nombre=nombre+1;
        $("#clics_1").text(nombre);
    });
    <!-------------------------------------------- Exercice 2 -------------------------------------->
    $("#but_2").click(function () {
        nombre++;
        $("#clics_2").text(nombre);
    });
    $("#but_3").click(function () {
        nombre--;
        $("#clics_2").text(nombre);
    });
    <!-------------------------------------------- Exercice 3 -------------------------------------->
    var taille = 10;
    var colorinit = $(".rec").css("border-color");
    $("#E3but_1").click(function () {
        taille = taille+10;
        if (taille > 100){
            taille=10;
        };
        $(".rec").css("height", taille+"px");
    });
    $("#E3but_2").click(function () {
        $(".rec").css("border-color", "green");
    });
    $("#E3but_3").click(function () {
        $(".rec").css("border-color", colorinit);
    });
    $("#E3but_4").click(function () {
        $(".rec").hide();
    });
    $("#E3but_5").click(function () {
        $(".rec").show();
    });
    <!-------------------------------------------- Exercice 4 -------------------------------------->
    var coup = 0;
    var firstRand = Math.floor(Math.random() *100);
    $("#E4but").click(function () {
        coup ++;
        var user_repond =$(".user").val();
        if(user_repond < firstRand){
            $("#retour").text("Trop petit !");
        }
        else if(user_repond > firstRand){
            $("#retour").text("Trop grand !");
        }
        else{
            $("#retour").text("Bravo vous avez réussi en "+coup+" tentatives !");
        }
    });


});