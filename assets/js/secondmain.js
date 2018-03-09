var riskNumber = 0;
var databaseArray = [];
var table = document.getElementById('datatable-buttons');
var firebaseReference;
var sliderMin = 1;
var sliderMax = 1000;


var fav = new Array;


var riskNumber = getURLParameter('risiko');
console.log(riskNumber);

var message = getURLParameter('message');
console.log(message);

if(riskNumber <= 40)
    firebaseReference = "/mäßiges_Risiko";
else
    firebaseReference = "/mäßiges_Risiko";

getDatabaseData();

$("#range_03").ionRangeSlider({
    type: "double",
    grid: false,
    min: 1,
    max: 1000,
    from: 1,
    to: 1000,
    prefix: "€",
    onFinish: function (data) {
        sliderMin = data.from;
        sliderMax = data.to;

        var rowNumber = 0;
        $('#datatable-buttons tr').each(function(){
            var $tds = $(this).find('td');
            mindesteinsatz = $tds.eq(4).text();

            if(parseInt(mindesteinsatz) > sliderMax || parseInt(mindesteinsatz) < sliderMin)
                $("#datatable-buttons tr:eq("+rowNumber+")").hide();
            else
                $("#datatable-buttons tr:eq("+rowNumber+")").show();

            rowNumber++;
        })

    },
});


// Wenn eine Box "collapsed" ist, werden die anderen ausgeblendet.
$('a').click( function(e) {
   $('.collapse').collapse('hide');
});


$('#versicherungen').height($('#bonds').height());
$('#spareinlagen').height($('#bonds').height());
$('#crowdfunding').height($('#bonds').height());

$('#bar2_portlet').height($('#bar3_portlet').height());
$('#doughnut1_portlet').height($('#bar3_portlet').height());

// if(localStorage.getItem('firebaseData')) {
//     // table.innerHTML = localStorage.getItem('firebaseData');

//     // Problem: Immer derselbe Key, deshalb wird nur der letzte Eintrag gezeigt
//     console.log(JSON.parse(localStorage.getItem('firebaseData')));

//     localStorage.clear();
// }

function sendEmail () {
    console.log("Hallo")
}


function getDatabaseData() {

    console.log("Firebase Reference:" + firebaseReference);
    var ref = firebase.database().ref(firebaseReference);

    // Wird erst aufgerufen, wenn alle Daten aus Firebase geladen sind!!
    ref.once("value").then(function(snapshot) {
    //   let a = snapshot.numChildren(); // 1 ("name")
      TableManageButtons.init();
    });

    ref.on("child_added", function(snapshot) {

        // Geht jedes Child-Element einzeln durch
        // snapshot.forEach(function(child){
        //     databaseArray = child.val();
        //     console.log(databaseArray);
        // });

        // Speichert alle Child-Elemente eines Eintrag in einem Array
        databaseArray = snapshot.val();
        console.log(snapshot.val());

        getArray(databaseArray);

        // Setzt im Local Storage ein Schlüssel-Wert Paar zum Auslesen
        // localStorage.setItem('firebaseData', table.innerText);

    }, function (error) {
        console.log("Error: " + error.code);
    });
}

function getArray(array) {

        var content = '';
        var pageURL = '';

        if(parseInt(array.mindesteinsatz) <= sliderMax && parseInt(array.mindesteinsatz) >= sliderMin) {

        if(array.url !== undefined)
         pageURL = '<a style="color: #3bafda" target="_blank" href="' + array.url + '">';

        if(array.rendite === undefined)
          array.rendite = "-";

        content +='<tr>';
        content += '<td>' + pageURL + array.name + '</a> </td>';
        // content += '<td>' + pageURL + array.name + '</a> </td>';
        content += '<td>' + array.beschreibung + '</td>';
        content += '<td>' + array.rendite + '</td>';
        content += '<td>' + array.risiko + '</td>';
        content += '<td>' + array.mindesteinsatz + '€</td>';
        content += '<td>' + array.einsteiger + '</td>';
        content += '</tr>';


        // localStorage.setItem("firebaseData", array.name);

        // Problem: Immer derselbe Key, deshalb wird nur der letzte Eintrag gezeigt
        // localStorage.setItem('firebaseData', JSON.stringify(array));

        $("#datatable-buttons").append(content);


        }

}

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
