/**
Template Name: Minton Dashboard
Author: CoderThemes
Email: coderthemes@gmail.com
File: Chartjs
*/


!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function(selector,type,data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize( generateChart );

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );

            switch(type){
                case 'Doughnut':
                    new Chart(ctx, {type: 'doughnut', data: data, options: options});
                    break;
                case 'Bar':
                    new Chart(ctx, {type: 'bar', data: data, options: options});
                    break;
            }


            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    }

    //init
    ChartJs.prototype.init = function() {

        // //barchart
        // var barChart1 = {
        //     labels: ['Sicherheit', 'Flexibilität', 'Rendite', 'Anderes', 'keine Angabe'],
        //     datasets: [
        //         {
        //             label: "in %",
        //             backgroundColor: "rgba(109, 39, 14, 0.3)",
        //             borderColor: "#6d270e",
        //             borderWidth: 1,
        //             hoverBackgroundColor: "rgba(109, 39, 14, 0.6)",
        //             hoverBorderColor: "#6d270e",
        //             data: [52, 32, 9, 2, 5]
        //         }
        //     ]
        // };
        // this.respChart($("#bar1"),'Bar',barChart1);
        //donut chart
        var donutChart = {
            labels: [
                "Sicherheit",
                "Flexibilität",
                "Rendite",
                "Anderes",
                "keine Angabe"
            ],
            datasets: [
                {
                    data: [52, 32, 9, 2, 5],
                    backgroundColor: [
                        "rgba(34, 139, 223, 0.7)",
                        "rgba(114, 102, 186, 0.7)",
                        "rgba(0, 177, 157, 0.7)",
                        "rgba(0, 14, 76, 0.7)",
                        "rgba(242, 164, 87, 0.7)"
                    ],
                    hoverBackgroundColor: [
                        "rgba(34, 139, 223, 1)",
                        "rgba(114, 102, 186, 1)",
                        "rgba(0, 177, 157, 1)",
                        "rgba(0, 14, 76, 1)",
                        "rgba(242, 164, 87, 1)"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };
        this.respChart($("#doughnut"),'Doughnut',donutChart);

        //barchart
        var barChart2 = {
            labels: ['Aktien, Fonds', 'Immobilien', 'Gold, Edelmetalle', 'Bausparvertrag', 'Sparbuch', 'Tagesgeld'],
            datasets: [
                {
                    label: "in %",
                    backgroundColor: "rgba(24, 138, 226, 0.3)",
                    borderColor: "#188ae2",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(24, 138, 226,0.6)",
                    hoverBorderColor: "#188ae2",
                    data: [28, 25, 4, 2, 1, 1]
                }
            ]
        };
        this.respChart($("#bar2"),'Bar',barChart2);

        //barchart
        var barChart3 = {
            labels: ['Immobilien', 'Sparprodukte', 'Aktien', 'Investmentfonds', 'Geschlossene Fonds', 'Anleihen'],
            datasets: [
                {
                    label: "in %",
                    backgroundColor: "rgba(45, 4, 36, 0.3)",
                    borderColor: "#2d0424",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(45, 4, 36, 0.6)",
                    hoverBorderColor: "#2d0424",
                    data: [32, 26, 23, 18, 10, 9]
                }
            ]
        };
        this.respChart($("#bar3"),'Bar',barChart3);


      },
  $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),
//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);
