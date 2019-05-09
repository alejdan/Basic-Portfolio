$(document).ready(function () {

    $("#portfolio").hide();

    $("#contact").hide();

    $("#name").on("click", function () {

        $("#portfolio").hide();

        $("#about").show();

        $("#contact").hide();

    });

    $("#homeNav").on("click", function() {

        $("#portfolio").hide();

        $("#about").show();

        $("#contact").hide();

    });

    $("#portfolioNav").on("click", function () {

        $("#about").hide();

        $("#portfolio").show();

        $("#contact").hide();

    });

    $("#contactNav").on("click", function () {

        $("#about").hide();

        $("#portfolio").hide();

        $("#contact").show();

    });



});