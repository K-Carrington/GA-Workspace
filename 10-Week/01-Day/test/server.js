
var express        = require('express');
var app            = express();

var ejs            = require('ejs');
var ejsLayouts     = require('express-ejs-layouts');
var port           = process.env.PORT || 3000;

var px = require('6px')({
    //userId: '1618cb69-896f-4570-87dc-b44089bc868f',
    userId: '1618cb69-896f-4570-87dc-b44089bc868f',
    apiKey: 'e02b0fdb-dca6-4e52-9b7e-149cf5484ee2',
    apiSecret: '2120e693-fda5-4c3d-99d3-3ec44cf35717'
    //project_id: 'bbe0d09d-0dc7-44a3-9a73-540bf34582c4'
});


//ejs configuration
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res, next){
  res.render('view');
});


console.log("setup complete.....")
/*
var image
px.on('connection', function() {
 console.log('calling px....')
    image = px({ taxi: 'https://s3.amazonaws.com/ooomf-com-files/mtNrf7oxS4uSxTzMBWfQ_DSC_0043.jpg' });
console.log('calling image.output....')
    var output = image.output({ taxi: 'unsplashed_taxi' }).tag('img').url('6px');
 console.log('calling save....')
    image.save().then(function(res) {
        console.log('Res', res);
    }, function(err) {
        console.log('Err', err);
    });
});*/

var image = px({
    taxi: 'https://s3.amazonaws.com/ooomf-com-files/mtNrf7oxS4uSxTzMBWfQ_DSC_0043.jpg',
    logo: 'http://6px.io/img/px-logo-md@2x.png'
});

/**
 * Create a new output object.
 *
 * We need to tell that output which input we are working with.
 * In this case we will use the taxi as the main image.  We use an object, that way we can specify the filename that we want to use.  You do have the option of just putting `false` in there, and 6px will generate a name for you.
 */
var output = image.output({ taxi: 'unsplashed_6px_watermark' });

/**
 * We are now adding a layer action.  We are referring to the other input we defined earlier.
 *
 * Some options are opacity, x, y, width, height.
 */
output.layer('logo', {
    opacity: 0.6
});

// Where does the image end up?  Passing `6px` will send it to 6px's CDN.
output.url('6px');

// Every output needs a name
output.tag('watermarked');

/**
 * Send to 6px!  The result will be a response from the API with the ID.
 *
 * This doesn't mean the job is done.  This means the API has received the request.
 */
image.save(function(err, res) {
    console.log(res);
});

console.log('calling app.listen')
app.listen(3000, function(){
  console.log('Server running on ' + 3000);
});



