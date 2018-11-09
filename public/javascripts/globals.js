var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Color enum constants
const B = 1;
const Y = 2;
const R = 3;
const G = 4;

// Click type enum
const clickTypes = {
    FILL : 1,
    MARK: 2
}