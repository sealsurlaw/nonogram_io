// Color enum constants
const R = "#FF0000";
const B = "#000000";
const Y = "#FFFF00";
const G = "#EEEE00";

// Level solution map
const level = [[0,0,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,0,0,1,1],
                [1,0,1,0,1,0,0,0,0,1],
                [1,0,1,0,1,0,0,0,0,0],
                [1,1,1,1,1,0,0,0,0,0],
                [1,0,1,1,1,0,0,0,0,1],
                [1,1,0,0,1,1,0,0,1,1],
                [0,1,1,1,1,1,1,1,1,0],
                [0,0,1,1,1,1,1,1,0,0]];

// Colored final level
const fLevel = [[B,B,Y,G,Y,G,Y,G,Y,B],
                [B,Y,G,Y,G,Y,G,Y,G,Y],
                [Y,G,Y,G,Y,G,B,B,Y,G],
                [G,R,G,R,G,B,B,B,B,Y],
                [Y,R,Y,R,Y,B,B,B,B,B],
                [G,Y,G,Y,G,B,B,B,B,B],
                [Y,B,Y,G,Y,B,B,B,B,G],
                [G,Y,B,B,G,Y,B,B,G,Y],
                [B,G,Y,G,Y,G,Y,G,Y,B],
                [B,B,G,Y,G,Y,G,Y,B,B]];