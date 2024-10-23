/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism_volume_id").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_sa_id").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume_id").addEventListener("click", sphere_volume);
document.getElementById("sphere_sa_id").addEventListener("click", sphere_area);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    let first=value * (10 ** d)
    let second = Math.round(first)
    let answer = second / 10 ** d
    return(answer)
}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

function delta(a, b) {
    return (a - b)
}

function slope(x1, y1, x2, y2){
    let d1=delta(y2,y1)
    let d2=delta(x2,x1)
    return (d1/d2)
}
function diff(a,b){return(a-b)}
function average(n1,n2){
    return((n1+n2)/2)
}

function length(){
    let answer = Math.sqrt((delta(x1,x2)**2)+(delta(y1,y2)**2))
    return(answer)
}

function rect_prism_volume(){
    let l= Number(document.getElementById("length").value)
    let w= Number(document.getElementById("width").value)
    let h= Number(document.getElementById("height").value)
    //bf for before, but...//
    let bf = l*w*h
    let af=round_user(bf)
    document.getElementById("change").textContent = (`The volume of the Prism is ${af}`)
}
function rect_prism_area(){
    //2(wl+hl+hw)//
    let l= Number(document.getElementById("length").value)
    let w= Number(document.getElementById("width").value)
    let h= Number(document.getElementById("height").value)
    let bf = 2*((w*l)+(l*h)+(w*h))
    let af = round_user(bf)
    document.getElementById("change").textContent = (`The Surface area of the Prism is ${af}`)
}
function sphere_volume(){
    let r= Number(document.getElementById("radius").value)
    let bf= ((4/3)*Math.PI*(r**3))
    let af = round_user(bf)
    document.getElementById("change").textContent = (`The Volume of the Sphere is ${af}`)
}
function sphere_area(){
    let r= Number(document.getElementById("radius").value)
    bf = 4*Math.PI*(r**2)
    af= round_user(bf)
    document.getElementById("change").textContent = (`The Volume of the Sphere is ${af}`)
}
function length_of_line_seg(){
    let x1= Number(document.getElementById("x1").value)
    let y1= Number(document.getElementById("y1").value)
    let x2= Number(document.getElementById("x2").value)
    let y2= Number(document.getElementById("y2").value)
    let answer = Math.sqrt((delta(x1,x2)**2)+(delta(y1,y2)**2))
    document.getElementById("change").textContent = (`The Length of the line segment is ${answer}`)
}
function slope_of_line_seg(){
    let x1= Number(document.getElementById("x1").value)
    let y1= Number(document.getElementById("y1").value)
    let x2= Number(document.getElementById("x2").value)
    let y2= Number(document.getElementById("y2").value)
    let bf = diff(y2,y1)/diff(x2,x1)
    let m = round_user(m)
    document.getElementById("change").textContent = (`The Slope of the line is ${m}`)
}
