## Custom Directives

While there are a handful of different directives we can use that are built into Angular, there will be times we'll want to write our own. For example, if we wanted to dynamically include a template file, we could easily use `ng-include` to bring in a template file, or we could build a custom directive to bring in the file (like a partial in Rails or Express w/ EJS). With a custom directive, we can create our own html elements with their own data bindings to make them much easier for us to use in our templates.

Here's a sample Angular module with a controller:

``` javascript
(function() {
  'use strict';  
  angular.module('myApp',[])

  angular.module('myApp')
  	.controller('myController',myController)

  myController.$inject = ['$scope']

  function myController($scope){
    var myCtrl = this
    myCtrl.name = "The name of my controller!"
  }
}());
```

A corresponding HTML file:

``` html
<!DOCTYPE html>
<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
    <title>First Angular App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="app.js"></script>
  </head>
  <body ted='ted' ng-controller="myController as myCtrl" class="container">
    <h1>Custom Angular Directives!!!</h1>
    <h5>{{ myCtrl.name }}</h5>
  </body>
</html>
```

now, lets create a template file that we'll use as a 'partial' in our app:

``` bash
mkdir templates
touch templates/nav.html
```

For this example, we'll populate the `nav.html` with the basic navigation bar example from the bootstrap site:

``` html
<!-- /templates/nav.html -->
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```

Now, back in our `app.js` file, we can add our custom directive which will allow us to 'include' our nav partial wherever we write our own custom html element in the page:

``` javascript
(function() {
  'use strict';
  angular.module('myApp',[])

  angular.module('myApp')
  .controller('myController',myController)
  .directive('myNav',myNav)
  myController.$inject = ['$scope']

  function myNav(){
    var directive = {
      restrict: 'EA',
      templateUrl: 'templates/nav.html',
    }
    return directive
  }

  function myController($scope){
    var myCtrl = this
    myCtrl.name = "The John Papa Way!"
  }
}());
```

Let's look at what we just did:

we added a method to the chain for our module, `.directive()`, with the string name of the directive, and the name of a function we want to use for the directive. Then below, we declared the directive function as `myNav()`, which returns an object called 'directive'.

The included two key/value pairs in our directive object:

- restrict: allows us to restrict use of the directive to only certain types of HTML namers:
  
  - 'E', or element, allows us to use the directive as the actual HTML element: `<my-nav></my-nav>`
  - 'A', or attribute, allows us to use the directive as an attribute of another element: `<div my-nav></div>`
  - 'C', or class, let's us assign a class to an element that matches the directive name: `<div class="my-nav"></div>`
  
  These are all different ways of invoking our directive, but we restricted use of the directive to just element and attribute in this example by setting `restrict` to `EA`.
  
- templateUrl: a path to the template file we want to use for the directive.

Now in our HTML, we can invoke our custom directive:

``` html
  <body ted='ted' ng-controller="myController as myCtrl" class="container">
  	<my-nav></my-nav>
    <h1>Custom Angular Directives!!!</h1>
    <h5>{{ myCtrl.name }}</h5>
  </body>
```

And we should see our navigation bar at the top.

