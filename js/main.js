/**
 * Created by nikita on 09.05.15.
 */
var map1;
var map2;
var map3;
var map4;
function initialize() {

    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map1 = new google.maps.Map(document.getElementById("map_canvas1"),
        mapOptions);
    var map2 = new google.maps.Map(document.getElementById("map_canvas2"),
        mapOptions);
    var map3 = new google.maps.Map(document.getElementById("map_canvas3"),
        mapOptions);
    var map4 = new google.maps.Map(document.getElementById("map_canvas4"),
        mapOptions);

    google.maps.event.addDomListener(window, 'load', initialize);

}
function getSize() {
    var myWidth = 0, myHeight = 0;
    var delta = 50;
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return myHeight-delta;
}

var func = function() { jQuery(document).ready(function(){
    var size = getSize();
    if(map1!=null&&map2!=null&&map3!=null&&map4!=null){

    }
    else if(map1!=null&&map2!=null&&map3!=null){

    }
    else if(map1!=null&&map2!=null){
        jQuery('#map_canvas1').css('height', '' + size);
        jQuery('#map_canvas2').css('height', '' + size);
    }
   else if(map1!=null) {
        jQuery('#map_canvas1').css('height', '' + size);
    }



});
};

