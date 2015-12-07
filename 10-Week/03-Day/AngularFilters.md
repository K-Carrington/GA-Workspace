# Built-In & Custom Filters in Angular

------

## Lesson Objectives

SWBAT:

1. Understand + explain the purpose of Angular filters in the context of view templates and controllers.
2. Apply built-in Angular filters in a view template.
3. Build and use a custom filter.

------

## What does an Angular filter do?

> A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.

------

Let's look at how we can apply some filters in a view template:

``` bash
cd workspace
mkdir angular-filter-practice
cd angular-filter-practice
touch index.html
touch app.js
atom .
```

First we'll populate our `index.html` with our starter code. We'll use   `ng-init` to test some hardcoded data as we learn about filters. We'll use a small array of objects that represent different types of candies:

``` html
<!-- index.html -->
<!DOCTYPE html>
<html ng-app>
<head>
	<title>Angular Filters</title>
	<!-- BOOTSTRAP -->
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<!-- ANGULAR -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
	<script src="app.js"></script>
</head>
<body ng-init="candies=[{name: 'Snickers', color: 'Brown', fruity: false, price: 1.5}, {name: 'Fruit Roll Ups', color: 'Red', fruity: true, price: 3}, {name: 'White Chocolate Hershey Bars', color: 'White', fruity: false, price: .85}, {name: 'Lime Jelly Beans', color: 'Green', fruity: true, price: .05}, {name: 'Red Hots', color: 'Red', fruity: false, price: 1.25}, {name: 'Whoppers', color: 'Brown', fruity: false, price: 1.75}]">
	<div class="container">
		<div class="row">
			<h1>Candies!</h1>
		</div>
	</div>
</body>
</html>
```

Next, under our `<h1>`, let's iterate through this array and display each candy's name in a `<ul>`:

``` html
<ul>
	<li ng-repeat="candy in candies">{{ candy.name }}</li>
</ul>
```

We should now see each candy in their own `<li>` tag having invoked the `ng-repeat` directive.

------

### And now, our first filter...

------

## orderBy

The candies in our array are currently in this order:

- Snickers
- Fruit Roll Ups
- White Chocolate Hershey Bars
- Lime Jelly Beans
- Red Hots
- Whoppers

Let's alphabetize them, by adding an `orderBy` filter, then refresh the page to see them nicely organized:

``` html
<li ng-repeat="candy in candies | orderBy:'name' ">{{ candy.name }}</li>
```

We apply filters in our templates by 'piping' them, like in the example above. In this example, the output of the `ng-repeat` is piped into a filter called `orderBy`, and the argument being passed is the name of the key we want to order by.

If we wanted to reverse that alphabetized order, all we can do this two ways:

 add a `-` to the argument:

``` html
<li ng-repeat="candy in candies | orderBy:'-name' ">{{ candy.name }}</li>
```

OR, add another argument after the key name we're sorting by, which represents a boolean for whether or not to reverse the order:

``` html
<li ng-repeat="candy in candies | orderBy:'name':true ">{{ candy.name }}</li>
```

------

## Dynamically changing filter parameters

Using `ng-model` in an input field like a select element, we can create a dropdown menu, whose value will dictate how the array is sorted. All we need to do is create the `<select>` element, and update the `orderBy` value be that value:

``` html
<div class="row">
	<h1>Candies!</h1>
	
  	<div>
      Sort By:
      <select ng-model="candyOrder">
          <option value="name">Name</option>
          <option value="color">Color</option>
          <option value="price">Price</option>
      </select>
    </div>
	
  	<ul>
		<li ng-repeat="candy in candies | orderBy:candyOrder">{{ candy.name }}</li>
	</ul>
</div>
```

Now we can see the array is not sorted by default, but selecting an option will reactively change the order of the array because Angular is sick yo.

------

## The 'filter' filter:

In addition to adding a sorting system for our array, we can also create a reactive filter that lets us narrow down what we want to see listed, by typing into a text field. Let's add a text input field, assign it a `ng-model` attribute, and apply that model as a ***second*** filter for our list of candy:

``` html
<div class="row">
	<h1>Candies!</h1>
	
	<div>
		Filter Search: <input type="text" ng-model="filterSearch">	
	</div>

	<div>
		Sort By:
		<select ng-model="candyOrder">
			<option value="name">Name</option>
			<option value="color">Color</option>
            <option value="price">Price</option>
		</select>
	</div>
	
	<ul>
		<li ng-repeat="candy in candies | orderBy:candyOrder | filter:filterSearch">{{ candy.name }}</li>
	</ul>
</div>
```

When we pipe the output of an Angular directive to a filter, we can pipe THAT output to another filter, and so forth.

Refresh the page and start typing the name of one of the candies, you'll see the list get shorter and shorter until there's a match, similar to typing a name into the contacts list in your phone.

If you open the browser inspector, and look at the `<li>` tags as you type into the input field, you'll actually see list items being *removed* from the DOM, not just hidden with CSS. Angular stores the data representing these DOM nodes, so that when you clear the input field, it quickly repopulates the DOM with the other `<li>`'s.

In addition, we can use the candy's OTHER properties to search in the text field. Try typing 'red' and watch the Fruit Roll Ups and Red Hots be the only remaining candies.

------

## limitTo

Let's pretend we're grabbing our candy list from a database, and try limiting the total amount of displayed candies to 3 with the `limitTo` filter:

``` html
<li ng-repeat="candy in candies | orderBy:candyOrder | filter:filterSearch | limitTo:3">{{ candy.name }}: {{ candy.price | currency }}</li>
```

------

# Angular Markup Filters

We can apply some nifty built-in filters to manipulate the output of expressions being evaluated with `{{ }}` markup. For example:

------

## uppercase / lowercase

Let's make the names of each candy uppercase:

``` html
{{ candy.name | uppercase }}
```

Or all lowercase:

``` html
{{ candy.name | lowercase }}
```

------

## currency

We can take the 'price' attribute, and display it with the currency symbol / format that matches our client locale:

``` html
{{ candy.name }}: {{ candy.price | currency }}
```

Which will yield something like:

`White Chocolate Hershey Bars: $0.85`

------

## A bit of refactoring is in order:

We're able to test and play with the built-in Angular filters using static hardcoded data contained in our `ng-init` attribute, but we really should take this time to move that data away to `app.js` to practice separating our concerns, in preparation for when we start getting our data from a live database dynamically.

Let's start by creating an Angular module with a controller for our candy, migrate the data from `ng-init` to the controller, test it, and then we'll add our first custom filter:

in `app.js`, we'll create the module, controller, and make a property of the controller to house our candy data: 

``` javascript
(function() {
  'use strict';
  angular.module('candyApp',[])

  angular.module('candyApp')
  .controller('candyController',candyController)

  candyController.$inject = ['$scope']

  function candyController($scope){
    var candyCtrl = this

    // candy data originally from index.html's ng-init attribute:
    candyCtrl.candies = [
      {
        name: 'Snickers',
        color: 'Brown',
        fruity: false,
        price: 1.5
      },
      {
        name: 'Fruit Roll Ups',
        color: 'Red',
        fruity: true,
        price: 3
      },
      {
        name: 'White Chocolate Hershey Bars',
        color: 'White',
        fruity: false,
        price: .85
      },
      {
        name: 'Lime Jelly Beans',
        color: 'Green',
        fruity: true,
        price: .05
      },
      {
        name: 'Red Hots',
        color: 'Red',
        fruity: false,
        price: 1.25
      },
      {
        name: 'Whoppers',
        color: 'Brown',
        fruity: false,
        price: 1.75
      }
    ]
  }
}());
```

Our `index.html` needs to be modified a bit as well. For one thing, we now need include the name of our 'app' as the value of our `ng-app` tag. Then we need to remove the `ng-init` attribute (since the data is now stored in our controller), add an `ng-controller` attribute to the HTML, and change the name of the array in `ng-repeat` to 'candyCtrl.candies'. The updated `index.html` should look like this:

``` html
<!-- index.html -->
<!DOCTYPE html>
<html ng-app="candyApp">
<head>
	<title>Angular Filters</title>
	<!-- BOOTSTRAP -->
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<!-- ANGULAR -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
	<script src="app.js"></script>
</head>
<body>
	<div class="container">
		<div class="row" ng-controller="candyController as candyCtrl">
			<h1>Candies!</h1>
			
			<div>
				Filter Search: <input type="text" ng-model="filterSearch">	
			</div>

			<div>
				Sort By:
				<select ng-model="candyOrder">
					<option value="name">Name</option>
					<option value="color">Color</option>
					<option value="price">Price</option>
				</select>
			</div>
			
			<ul>
				<li ng-repeat="candy in candyCtrl.candies | orderBy:candyOrder | filter:filterSearch">{{ candy.name }}: {{ candy.price | currency }}</li>
			</ul>
		</div>
	</div>
</body>
</html>
```



------

# Custom Filters

In addition to the built-in filters we played with earlier, we can create our own from our Angular app, and even invoke these custom filters from our front-end template in the same we've invoked the built-in filters. 

Let's create a custom filter that will let us display a 'checkmark' or an 'x' depending on whether or not the candy is fruity. We'll start by displaying the candy's 'fruity' property as it normally is displayed: true/false:

``` html
<li ng-repeat="candy in candyCtrl.candies | orderBy:candyOrder | filter:filterSearch">{{ candy.name }}: {{ candy.price | currency }} | Fruity: {{ candy.fruity }}</li>
```

Now we can create a filter in our app that we can use to modify how we display our true/false fruity property (like the currency filter, but this time, our own). In `app.js`, we'll **add the `.filter()` method immediately after the `.controller()` method**:

``` javascript
// ...
// ...

angular.module('candyApp')
  .controller('candyController',candyController)
  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  })

// ...
// ...
// ...
```

The `.filter()` method, like the `.controller()` method, is taking two arguments:

- the name of the filter, as we'd refer to it in our template
- a function containing the code we want to use to format the piped input. We're using unicode character codes to substitute `true` and `false` in a ternary operator.

And… that's it… We can now add our new 'checkmark' filter to our Angular markup:

``` html
{{ candy.fruity | checkmark }}
```

We should now see 'checkmark' and 'x' symbols instead of true / false

------

Full documentation on each of the built-in filters: [filter components in Angular](https://docs.angularjs.org/api/ng/filter)

More on custom filters: [Scotch.io - Custom Angular Filters](https://scotch.io/tutorials/building-custom-angularjs-filters)

------