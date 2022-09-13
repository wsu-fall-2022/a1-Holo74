// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Madeline Knox"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO

import * as d3 from "d3";

let metroidSymbol = d3.select('article').append('svg').attr('height', 100).attr('width', 100).style("background", "#eee").style("fill", "transparent");
let mSymbol = d3.select('article').append('svg').attr('height', 100).attr('width', 100).style("background", "#eee").style("fill", "transparent");
let haloSymbol = d3.select('article').append('svg').attr('height', 100).attr('width', 100).style("background", "#eee").style("fill", "transparent");
let morrowindSymbol = d3.select('article').append('svg').attr('height', 100).attr('width', 100).style("background", "#eee").style("fill", "transparent");
let blackMesa = d3.select('article').append('svg').attr('height', 100).attr('width', 100).style("background", "#eee").style("fill", "transparent");

// let testing = d3.select('canvas').append('circle').attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('fill', '#424242');

metroidSymbol.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('fill', '#424242');
metroidSymbol.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 35).attr('stroke', 'black').attr('fill', '#fdfdfd');
metroidSymbol.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 33).attr('stroke', 'black').attr('fill', '#ac0000');
let insideMetroid = metroidSymbol.append('polygon').attr('points', '90,0 40,40 40,70 45,75 65,55 68,58 25,110 80,78 80,45 70,43 60,55 57,52 90,0').attr('stroke', 'black').attr('fill', '#bababa')

insideMetroid.append('animateTransform').attr('attributeName', 'transform').attr('type', 'rotate').attr('from', '0 50 50').attr('to', '360 50 50').attr('dur', '10s').attr('repeatCount', 'indefinite');

mSymbol.append('rect').attr('height', 100).attr('width', 10).attr('x', 20).attr('y', 0).attr('stroke', 'black').attr('fill', 'silver').attr('transform', 'skewX(-10)');
mSymbol.append('rect').attr('height', 100).attr('width', 10).attr('x', 30).attr('y', 0).attr('stroke', 'black').attr('fill', 'silver').attr('transform', 'skewX(5)');
mSymbol.append('rect').attr('height', 100).attr('width', 10).attr('x', 60).attr('y', 0).attr('stroke', 'black').attr('fill', 'silver').attr('transform', 'skewX(-5)');
let bar = mSymbol.append('rect').attr('height', 100).attr('width', 10).attr('x', 70).attr('y', 0).attr('stroke', 'black').attr('fill', 'silver').attr('transform', 'skewX(10)');
bar.append('animate').attr('attributeName', 'height').attr('dur', '5s').attr('from', 20).attr('to', 100).attr('repeatCount', 10);

haloSymbol.append('ellipse').attr('cx', 50).attr('cy', 50).attr('rx', 40).attr('ry', 20).attr('stroke', 'black').attr('fill', 'black');
let inner = haloSymbol.append('ellipse').attr('cx', 45).attr('cy', 50).attr('rx', 30).attr('ry', 15).attr('stroke', '#eee').attr('fill', '#eee');
haloSymbol.append('ellipse').attr('cx', 45).attr('cy', 50).attr('rx', 6).attr('ry', 3).attr('stroke', 'black').attr('fill', 'black');
haloSymbol.append('rect').attr('x', 90).attr('y', 45).attr('height', 10).attr('width', 10).attr('stroke', 'black').attr('fill', 'black');
haloSymbol.append('rect').attr('x', 49).attr('y', 49).attr('height', 2).attr('width', 6).attr('stroke', 'black').attr('fill', 'black');
haloSymbol.append('circle').attr('cx', 25).attr('cy', 60).attr('r', 10).attr('stroke', '#eee').attr('fill', '#eee');
haloSymbol.append('rect').attr('x', 0).attr('y', 50).attr('height', 10).attr('width', 30).attr('stroke', '#eee').attr('fill', '#eee');
inner.append('animate').attr('attributeName', 'rx').attr('from', 30).attr('to', 20).attr('dur', '1s').attr('repeatCount', 'indefinite');

morrowindSymbol.append('circle').attr('r', 50).attr('cy', 50).attr('cx', 50).attr('stroke', 'transparent').attr('fill', '#a29b7b');
morrowindSymbol.append('circle').attr('r', 50).attr('cy', 50).attr('cx', 70).attr('stroke', 'transparent').attr('fill', '#eee');

function makeSpline(rotateAmount) {
    let spline = morrowindSymbol.append('polygon').attr('points', '70,50 60,40 60,30 55,15 80,30 80,40 70,50').attr('stroke', 'transparent').attr('fill', '#a29b7b').attr('transform', 'rotate(' + rotateAmount + ', 70, 50)');
    spline.append('animateTransform').attr('attributeName', 'transform').attr('type', 'rotate').attr('from', rotateAmount + ' 70 50').attr('to', (rotateAmount + 360) + ' 70 50').attr('dur', '60s').attr('repeatCount', 'indefinite');
    return spline;
}

let distance = 60;
let start = 10;
for (let i = 0; i < 6; i++) {
    makeSpline(start + (i * distance));
}

blackMesa.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 50).attr('stroke', 'transparent').attr('fill', 'black');
blackMesa.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'transparent').attr('fill', 'white');
blackMesa.append('polygon').attr('points', '10,70 35,90 65,90 90,70').attr('stroke', 'transparent').attr('fill', 'black');
let bus = blackMesa.append('polygon').attr('points', '35,70 90,70 80,50 35,50').attr('stroke', 'transparent').attr('fill', 'black');
bus.append('animateMotion').attr('dur', '5s').attr('repeatCount', 'indefinite').attr('path', 'M0,0 -30,0 10,-10');