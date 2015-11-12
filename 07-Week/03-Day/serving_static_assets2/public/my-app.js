console.log('hello');
var chi_y = 100;
var samo_y = 100;
var vy =  0;
var chi_vy =  0;
var samo_vy =  0;
var leaf;

function preload(){
  leaf = loadImage('./leaf.gif');
  var chi_url = 'http://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=7bbbb47522848e8b9c26ba35c226c734';
  var samo_url = 'http://api.openweathermap.org/data/2.5/weather?q=santa+monica&APPID=7bbbb47522848e8b9c26ba35c226c734';

  httpGet(chi_url,null,'json',function(data){
    console.log(data);
    chi_vy = data.wind.speed;
    console.log(chi_vy);
  });

  httpGet(samo_url,null,'json',function(data){
    console.log(data);
    samo_vy = data.wind.speed;
    console.log(samo_vy);
  });
}

function setup(){
  createCanvas(800, 600);
  background(128);
}

function draw(){
  if (chi_y>600) chi_y = 0;
  if (samo_y>600) samo_y = 0;
  background(128);
  image(leaf, 200, chi_y += chi_vy, 200,150);
  image(leaf, 500, samo_y += samo_vy, 200,150);
}
