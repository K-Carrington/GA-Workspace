console.log('hello')

var y = 100;
var vy = 6.36;
var x = 200;

leaf = loadImage('./leaf')

function preload() {
	//var url = 'http://api.openweathermap.org/data/2.5/weather?q=santa+monica&APPID=7bbbb47522848e8b9c26ba35c226c734';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=7bbbb47522848e8b9c26ba35c226c734';
	//weather = loadJSON(url);
	httpGet(url,null,'json', function(data) {
      console.log(data);
      vy = data.wind.speed;
	})
	//vy = weather.wind.speed;
}

//using P5 (included in the html file)
function setup() {
	createCanvas(800, 600);
	background(128);
	
}

var down = true;
//this runs once/second
function draw() {
	//for (var i = 0; i<100; i++)
	background('red')
	if (down) {
	  rect(x++, y+= vy, x+=vy, 150);
	  if (y>500) { down = false;}
	  //if (x>600) x=40;
    }
    else {
      rect(x--, y-= vy, x-=vy, 150);
	  if (y<0) { down = true; }

    }
}