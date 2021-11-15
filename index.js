const root = document.getElementById('root');

//initialize map
function initMap(){

    const position = { lat: 6.1001, lng: 80.4760 };

    const map = new google.maps.Map(root,{
        center: position,
        zoom: 10,
    });

    //set a marker on the position
    const marker = new google.maps.Marker({
        position:position,
        map:map
    })
}