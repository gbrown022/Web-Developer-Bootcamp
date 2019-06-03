// GCB 2-Jun-2019

console.log("Activated.");
// select all divs and set to purple
$("div").css("backgroundColor", "purple");
// give all highlight class divs a width of 200px
$("div.highlight").css("width", "200px");

// give a border to the div with the id of #third an orange border
var borderProperties = {
    border: "1px solid orange"
};
$("#third").css(borderProperties);

//give the first div only and give it color pink
// first-of-type recommended over :first for speed
$("div:first").css("color", "pink");