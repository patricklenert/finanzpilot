/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Component: Ion Slider
*
*/ 
$(document).ready(function () {
    $("#range_01").ionRangeSlider();

    $("#range_02").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

    $("#range_03").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 0,
        to: 500,
        prefix: "€"
    });

    $("#range_04").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500
    });

    $("#range_05").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        step: 250
    });

    $("#range_06").ionRangeSlider({
        grid: false,
        from: 2,
        values: ["Konservativ", "75% Konservativ 25% Risiko", "Ausgewogen", "75% Risiko 25% Konservativ", "Risiko"]
    });

    $("#range_07").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 200000,
        step: 1000,
        prettify_enabled: true
    });

    $("#range_08").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550,
        disable: true
    });
});
