const mapbox = require("mapbox-gl");

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    const markerType = iconURLs[type]
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(${markerType})`;
return new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);

};

console.log(iconURLs.hotel)


module.exports = buildMarker

