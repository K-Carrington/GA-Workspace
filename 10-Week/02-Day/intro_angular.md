![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png)

# Intro to AngularJS

| Learning Objectives |
| :--- |
| Understand the use case for AngularJS |
| Add the AngularJS framework to a web app |
| Create an AngularJS module |
| Create AngularJS controllers using both the *$scope* and *controllerAs* syntaxes |
| Use data binding to create data driven UI's that update automatically when data changes |

## Roadmap

- AngularJS in Context
- The AngularJS Mindset
- Key Components of AngularJS (w/code along)
  - How Components are Connected
  - Setting Up an App
  - Modules
  - Config & Routes
  - Controllers
  - Two-way Data Binding
  - Directives
  - Services
  - Filters
  - The Many Faces of Controllers
      - Dependency Injection
      - Minification
- Lab - Create a To Do List App

## AngularJS in Context

### Why Learn AngularJS?

Because:

- Currently, Single Page Application (SPA) development is popular.
- AngularJS is the most widely adapted framework for developing SPAs.

**?: Describe the difference between a SPA and the traditional web app architecture.**

**?: What are the benefits of learning/using a widely adopted framework like Angular?**

### What is AngularJS?

- An open source JS framework maintained by Google.
- Created in 2009 - its longevity is a testament to its capability and usefulness.
- It is the **A** in the MEAN Stack.

### Basically, How Does it Work?

AngularJS performs it's magic by scanning the HTML document after it has loaded.

It looks for special markers in the HTML known as **directives**.

Those directives are processed, adding custom markup and behavior to the web app.

### What does AngularJS Bring to the Table?

#### Features and Concepts

The following are features/concepts applicable to AngularJS:

![](https://blog.openshift.com/wp-content/uploads/imported/angularjs-from-30k-feet.png)

You will become familiar with most of these features/concepts this week as you learn about Angular.

#### Benefits of AngularJS

AngularJS provides the following benefits when used to develop web apps:

- Enables us to organize and structure complex SPAs using the popular MVC, or one of its derivatives MVVM, MV\*, MVW, etc., design pattern.<br>**?: Why is MVC such a popular design pattern?**
- Makes us more productive when developing web apps because it provides features, such as data binding, that require **less code** from the developer.
- Eases testing because it was designed with testing in mind.

## The AngularJS Mindset

Programming a web app with AngularJS requires a different mindset. In fact, more experienced programmers may struggle more to learn it than lesser experienced developers.

An AngularJS application is **DRIVEN BY DATA**.

Our Angular controller holds our model data, and the view displays that data with data binding. If the data changes, the view will update automatically.

Additionally, Angular provides a directive, `ng-model`, that binds HTML's `<input>`, `<textarea>` and `<select>` elements to model data in the controller.  When the user changes the data in those elements, the model in the controller is changed simultaneously. If the model was changed, the element's value would be also change. This _two-way_ binding as shown conceptually here:

![](http://www.codeproject.com/KB/scripting/869712/two-way-db.png)

When we want something to happen in the view (change text, add/remove DOM elements, etc), we change data, and the view will be automatically updated thanks to Angular's directives.

**?: How is this is different than how we have been manipulating the DOM in our apps with native JS or jQuery?**

Remember, drive your application using data - data is the single source of truth!

## Key Components of AngularJS

### How Components are Connected

Let's review the following diagram of Angular's components:

![](http://3.bp.blogspot.com/-zEZ7LOSyuHk/U2kp4ZXqqSI/AAAAAAAAASY/7meGcf5Nolc/s1600/Module.png)

Things to note:

- To make it easier to learn, we won't use any client-side routing, therefore we will defer talking about _config_ & _routes_ until later in the week.
- **Directives** and **Filters** are used in **views**.
- Optional **Services** (of all types) are used in **controllers**. Although not shown, services can also be used by other services, directives and filters.
- `$scope` is injectable into our controllers, and if we do, it becomes the glue between our controller and view. However, we will start by looking at the **controllerAs** syntax which does not use **$scope** by default.

**?: Do we use directives in our controllers or our views?**

**Enough talk, let's look at some of these components and Angular features with some code!**

### Setting Up an App

To get started, all we need is a static `index.html` and an `app.js` script file. You've seen this movie before:

```
> mkdir first-ng
> cd first-ng
> touch index.html
> mkdir js
> touch js/app.js
> subl .
```

Then:

- Put the usual HTML boilerplate in `index.html`.
- It's always worth the short amount of time it takes to include the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download)!
- In the `<body>` put: `<h1>AngularJS</h1>`.
- Include the `app.js` with `<script>` in the `<head>`.

#### Include the AngularJS Library

Angular 2.0 is still in alpha, so we are going to be using the latest stable 1.4 version.

Get the link to the CDN from the [AngularJS](https://angularjs.org/) website.

**Important:** Ensure that the AngularJS library is loaded **before** our `app.js`.

Our `index.html` should now look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AngularJS</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js"></script>
  <script src="js/app.js"></script>
</head>
<body class="container">
  <h1>AngularJS</h1>

</body>
</html>
```

### Modules

Modules are containers for other Angular components.

Modules are useful for organizing code by feature. This way different developers can work on the app in isolation.

Modules are also used by Angular to break out functionality instead of having one massive core module. Later when we work with RESTful resources and routing, we will inject those modules into our main Angular module.

**?: This is very similar to what we've done using ________ in Node.**

When the AngularJS library is loaded, it creates a global object named, you guessed it, `angular`. This object has a `module()` method that is used to both define a _module_ **and** get a _module_ that's been previously defined.

>**Note:** It is a best practice in Angular to define all components in separate `js` files, however, for this first look at Angular, we will write all of our script in `app.js`

In `app.js`, let's first create an IIFE to prevent from leaking into the global scope:

```js
(function() {
'use strict';

// all code will go in here...

})();
```

Ready to define our first module? Sure you are!

```js
angular.module('myApp', []);
```

That's all it takes to define a new module named `myApp`.

The empty array is where we would pass in other module names that `myApp` uses, or depends on - this is called `dependency injection` and is an amazing feature of AngularJS.

Even though `myApp` does not depend on any other **modules**, the empty array is **necessary** because if we call the `module()` method with only one argument, the method becomes a getter, returning the specified module.  When two arguments are supplied, the `module()` creates a new module like we did above.

**?: In programming, when a method is designed to take in varying parameters, it is said to have multiple __________?**

Every AngularJS application has one "main" module that is loaded by including the `ng-app` directive in our HTML:

```html
<html ng-app="myApp" lang="en">
```

It's about time we do a check to make sure everything is loading as planned. Let's put an Angular **binding expression** in our `<body>` like this:

```html
<body class="container">
  <h1>AngularJS</h1>
  {{3 + 4}}
</body>
```

View `index.html` in the browser and you should see a "7" appear in the place of our binding expression. Thank you, goodnight!

>**Note:** The `ng-app` directive can be added to any element. All elements contained within that element will be monitored by AngularJS, and anything outside of that element will not be treated as part of the AngularJS app. By including `ng-app` on the `<html>` element, our entire page is being watched by Angular. Allow me to demonstrate this...

#### What the `ng`?!

In case you haven't figured it out by now, `ng` is the namespace used for Angular.

All of Angular's built-in directives will start with `ng`.

For clarity, third-party, as well as your own custom directives (yes, you can!), should start with something other than `ng`.

### Config & Routes

Each AngularJS module has a `config` method that allows us to provide code that runs when a module is loaded.

The `config` method is where we would define our client-side routing.

We will discuss the key to advanced SPAs, **client-side routing**, in a later lesson.

### Controllers

Controllers in AngularJS serve two primary purposes:

1. Provide the data used for the view to bind to.
2. Contain the primary code to respond to user events, such as when a user clicks on a button.

>**Warning, chance of headache ahead...** There are two different syntaxes for controllers and a few different ways to define them. It's important for you to get a taste of each so that you won't be thrown as you google. There are a couple of AngularJS styleguides referenced at the end of this lesson that discuss the authors' recommendations on which to use. I'm going to start with the easiest to learn and build up to the best practices...

Without further ado, let's define our first AngularJS controller and plug it into our module:

```js

  angular.module('myApp', []);

  // When only the name of the module is passed in,
  // the 'module()' method returns the specified module.
  // We can then attach our controller to our module using
  // the 'controller()' method.
  angular
    .module('myApp')
    .controller('MainController', function() {

    });
```
>**Note:** Usually each controller will be defined in its own file - and the above approach allows for this. FYI, in this particular example, we could have chained the `controller()` method directly to the `angular.module('myApp', [])`

Even though the above pattern looks like we're passing in a callback function, the function we're providing is actually going to be used as a constructor function. Angular instantiates controllers when it parses the HTML and sees an `ng-controller` directive. Since it is used as a constructor, we use upper-camel-case to name it.

We can use a `ng-controller` for any section of HTML we want, as long as it's within our `ng-app`. We intend for our `MainController` controller to be available to all the HTML inside of our `<body>` tag, so that's where we'll put the `ng-controller` directive:

```html
<body class="container" ng-controller="MainController as ctrl">
```

`ctrl` is the name we have given our controller to be referred to in all of our views' bindings.  Think of it as the variable pointing to our controller **in the view**. You can call it anything.

Let's see how we can use our controller to provide the title text to our `<h1>`. First, create the data on our controller:

```js
...
    .controller('MainController', function() {
      var vm = this;

      vm.title = 'AngularJS, the Superheroic MVW Framework';

    });
```

Then, bind the `title` to our view:

```html
<body class="container" ng-controller="MainController as ctrl">
  <h1>{{ctrl.title}}</h1>

</body>
```

Cool!

>**Note:** Since controllers are constructor functions, the code in function will execute only once. Therefore, code your controllers to initialize data the view needs and define the methods that will run in response to user actions.

**?: Why is it a good practice to assign `this` to a local variable?**

**?: Explain the difference between<br>`angular.module('app', []);` and<br>`angular.module('app');` ?**

#### Individual Practice (5 mins)

Create a method in your controller named `getRandom(upTo)` that returns a random integer between 0 and the `upTo` parameter.

Bind a few `<p>` tags to the `getRandom()` method passing in different values for `upTo`.

Hint: Don't forget to "call" your method in your view.

### Two-way Data Binding

We've seen how the view binds to the controller. But as we discussed earlier, the controller can also bind to the view using the `ng-model` directive like this:

```html
<body class="container" style="background-color:{{ctrl.crazyColor}}" ng-controller="MainController as ctrl">
  <h1>{{ctrl.title}}</h1>
  <label>Color: <input type="text" class="form-control" ng-model="ctrl.crazyColor"></label>

</body>
```

This example demonstrates two-way binding, however, there are better ways in Angular to dynamically style elements using directives such as `ng-class`.

>**Note:** `ng-model` will create the data property if it does not already exist in the controller, however, it's a good practice to be clear and declare all properties in your controller even if they are going to be created by an `ng-model`.

### Directives

#### What are Directives?

Directives are "markers" in our HTML that attach behavior or transform DOM elements.

When the DOM is fully loaded, AngularJS's HTML compiler will scan all of the elements contained within - **what directive?**

#### More Examples

Let's see a couple more examples of directives. First up, the granddaddy of them all, `ng-repeat`, to render an array of names:

```js
...
      vm.title = 'AngularJS, the Superheroic MVW Framework';
      vm.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];
...
```

```html
...
  <label>Color: <input type="text" class="form-control" ng-model="ctrl.crazyColor"></label>
  <div>
    Names:
    <ul>
      <li ng-repeat="name in ctrl.names">{{name}}</li>
    </ul>
  </div>
...
```

Nice!

Who hates hooking up event listeners for the _click_ event? Me too. Angular makes it easy:

```js
...
      vm.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];
      vm.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];


      vm.addName = function() {
        if (vm.extraNames.length) vm.names.push(vm.extraNames.shift());
      };
...
```

```html
...
  <div>
    Names:
    <ul>
      <li ng-repeat="name in ctrl.names">{{name}}</li>
    </ul>
    Extra Names:
    <ul>
      <li ng-repeat="name in ctrl.extraNames">{{name}}</li>
    </ul>
    <button class="btn btn-success" ng-click="ctrl.addName()">Add Name</button>
  </div>
...
```

**?: Any questions about what's going on here?**

Want more? Let's say we want to toggle the display of the names. Because Angular apps are driven with data, we need model data to represent if we want the names shown, or not:

```js
...
      // toggle boolean to show/hide names
      vm.showNames = true;

      vm.addName = function() {
...
```
We can use the `ng-show`/`ng-hide` directives to show/hide elements based upon a truthy/falsey expression:

```html
...
  <label>Color: <input type="text" class="form-control" ng-model="ctrl.crazyColor"></label>

  <!-- name list to show/hide -->
  <div ng-show="ctrl.showNames">
    Names:
    <ul>
...
```

If we refresh our page, we should see that our name list is still showing because we initialized `vm.showNames` equal to `true`. Initializing it to `false` would result in the list being hidden at start up.

All we need now is a toggle button outside of the `<div>` holding the names to toggle `vm.showNames`. Because this is a simple operation, we can do it right in the `ng-click`.

```html
...
  </div>

  <!-- button to hide/show name list -->
  <br>
  <button class="btn btn-info" ng-click="ctrl.showNames = !ctrl.showNames">Show/Hide Names</button>

</body>
```

Yay!

>**Note:** The way we've used custom attributes is not valid HTML5. If you work for a shop that insists on 100% compliant HTML, simply preface all Angular directives with `data-`, for example, `data-ng-model`.

#### Individual Practice (5 mins)

A nice improvement would be to update the text in the button to just say "Show Names" or "Hide Names" instead of "Show/Hide Names".

Use the `ng-show` and/or `ng-hide` directives to make this happen!

#### Directives as Attributes & Elements

So far, we've seen directives being used as custom attributes in our HTML. However, another possibility is to use directives to create custom element tags! For example, you could write your own directives to for a blog app and use them like this:

```html
<body>
  <game>
    <score player="1"></score>
    <score player="2"></score>
    <game-board></game-board>
  </game>
</body>
```

Talk about semantic HTML!

#### Directives - Wrap Up

**?: What does AngularJS do if there are no directives in the HTML?**

**?: What directive do we use to bind data from an `<input>` in the view to the model data in the controller?**

You've seen a few directives, however, there are over 50 included with the core of Angular.

You'll see some more directives, as well as learn about some of the powerful options available to us with directives like `ng-repeat` in future lessons!

### Services (including `factory`, `service`, `value` & `constant`)

Services allow us to share data and/or behavior between controllers, directives, filters and even other services. This keeps our code more DRY.

They provide a way to organize related program logic and data together. This allows us to write more modularized code.

Services should be used to hold the bulk of your application's logic and data, thus keeping controllers lean and focused on what they are responsible for.

Unlike controllers, which are instantiated and destroyed as the HTML they are attached come into and out of view, services are created once and persist for the life of the application.<br>**?: Who can tell us what do we call an object that is designed to be created only once?**

The functionality and data packaged in services are provided to other components, e.g., controllers, using a process known as **dependency injection**. Dependency injection is really cool and we will talk about it more in a bit when we look at different ways to write controllers.

There are a few different methods for creating services, the most popular being the the `factory` method. A `service` does pretty much do the same thing, but is instantiated differently (a _service_ is instantiated as a constructor function, whereas a _factory_ simply return an object (most common), function, or scalar value directly).

We will look at writing services in a future lesson.

### Filters

Filters are used to transform data. They take data in, process it, and return it.

They are very flexible and can be used for formatting text in a view, such as making it all uppercase, or used to filter and sort an array of items.

Angular comes with several [built-in filters](https://docs.angularjs.org/api/ng/filter), but we can create custom filters as well.

Filters are most commonly used in conjunction with other directives in the view, however, they can also be injected into a function so that we can use their functionality in code.

Let's see how we can use Angular's filters to display the names in upper and lowercase:

```html
...
    <ul>
      <li ng-repeat="name in ctrl.names">{{name | uppercase}}</li>
    </ul>
    Extra Names:
    <ul>
      <li ng-repeat="name in ctrl.extraNames">{{name | lowercase}}</li>
    </ul>
...
```

As you can see, all we need to do is separate the expression with a pipe, followed by the name of the filter.

We'll cover filters, including creating custom ones, in a later lesson.

### The Many Faces of Controllers

#### In the beginning, Misko created `$scope`, and it was good...

Up until version 1.2, Angular had no controllerAs syntax, just the `$scope` syntax.

Using this original syntax, we instantiate controllers in our views with the familiar `ng-controller` directive like this:

```html
<body class="container" ng-controller="MainController">
```

versus the controllerAs approach we've already seen:

```html
<body class="container" ng-controller="MainController as ctrl">
```
Note the missing `as` option.

Accordingly, there is no namespace object (the `ctrl` identifier we defined after the `as`) in our view's bindings. For example,

This:

```html
<div ng-show="ctrl.showNames">
```

becomes this:

```html
<div ng-show="showNames">
```

To work with `$scope`, we have to inject it into the controller function like this:

```js
angular
  .module('myApp')
  .controller('MainController', function($scope) {
    $scope.title = 'AngularJS, the Superheroic MVW Framework';
  });
```

Now, `$scope`, not `this`, is the glue between our view and controller.

All model data and methods that you wanted accessible in the view, are now attached to `$scope` instead of `this` (or whatever variable you assigned `this` to).

>**Note:** Most Angularians today are using the controllerAs syntax for new development. However, there are a couple of methods available on the `$scope` object, such as `$watch`, `$broadcast`, `$on` and `$apply`. If you find yourself needing to use these methods, you can still inject `$scope` even if you are using the controllerAs method.

#### Individual Practice (5 mins)

Convert our current app to use `$scope`.

#### Dependency Injection

So what's this with this "inject" stuff?

Dependency Injection is a software design pattern where an object/service needed by another piece of code is provided to that piece of code instead of it creating that object/service itself.

It's a powerful pattern because it allows us to modularize code and easily swap a service or object out for a different implementation. This really helps testing as well.

Angular provides a dependency injection feature that enables us to inject Angular built-in services, or services we create, as parameters in functions.

`console.log` out `$scope` in your `MainController` controller - that nice object was dependency injected by AngularJS!

Say that you needed to use angular's `$http` service for making AJAX requests - just inject that bad boy like this:

```js
angular
  .module('myApp')
  .controller('MainController', function($scope, $http) {
    $http.get('http://somehost.com/api/cool-data')
    .then(function(response) {
      $scope.apiData = response.data;
    });
  });
```

You can inject as many services as you need, and order doesn't matter. Angular internally converts the parameters into an array of strings and uses the strings to lookup the services and provide them to the function.

Get in the habit of putting reusable code in services and injecting those services where they are needed - dependency injection will make you a happy developer!

#### Minification

To increase loading speeds, production JavaScript is often "minified".

Minification strips out whitespace, comments, and shortens variable and function identifiers to meaningless one or two character names.

This process will break Angular's dependency injection system if we write the controllers the way have so far.<br>**?: Who can tell us why minification will break Angular's dependency injection with the way we've written our controllers so far?**

#### What Do We Do?

So, you've seen controllers that use both the **$scope**  and the **controllerAs** syntaxes.

But the way we've written them so far is somewhat simplified to make them easier to learn, but they are not safe from minification.

There are two different ways to make our controller functions min-safe, and you will see both in use.

Additionally, we used an anonymous function for our controller function, we'll now look at using function declarations as it is considered a better practice.

#### Min-Safe Approach - `$inject` (Style Guide Recommended)

```js
...
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http'];

  function MainController ($scope, $http) {
...  
  }
```

Here we are setting a `$inject` property with an array of dependencies. Angular will now use this list to know which dependencies to provide to the controller function.

This cures our minification problem because the dependencies listed in the array are strings, and because strings are data, they are never changed by minifiers.

However, it's important to ensure the order of the parameters in the array and the constructor function line up.

#### Min-Safe Approach - Array Annotation (AngularJS Recommended)

```js
...
  .controller('MainController', ['$scope', '$http', MainController]);

  function MainController ($scope, $http) {
  }
```

Here we are passing an array as the second argument to our `controller()` method instead of a function. With this method signature, the controller function is always the last element in the array.

Again, be sure the arguments in the function are in the same order as they are in the array.

That wasn't too bad now, was it?

Here's a [gist](https://gist.github.com/jim-clark/a0e6a60e1eba0672b9cb) that shows all of the minification-safe flavors of the controller we used this lesson.

**?: What are the primary responsibilities of a controller in Angular?**

**?: When is a controller instantiated?**

**?: What does the minification process do to our JavaScript?**

## Lab - Create a To Do App

#### Pair Up for this Excercise

#### Create a To Do app using the power of AngularJS.  Your app should be able to:
- Display a list of tasks.
- Display a "Done" button with each task.
- When the user clicks the "Done" button next to the task, that task should be removed from the list.
- Provide the ability for the user to add new tasks.
- Hint: Knowing which task to remove is important. You can actually pass the current object in a `ng-repeat` loop to a method, however, since we only need to know the position of the task in the array, check out the `$index` property available in the `ng-repeat` template. In this case, `$index` would make a great argument in a method call ;)

## Essential Questions

**?: What are some benefits that AngularJS provides to us when developing web apps?**


## References
- [Official AngularJS website](https://angularjs.org/)

- Two great AngularJS Style Guides:<br>
   [John Papa's](https://github.com/johnpapa/angular-styleguide)<br>
   [Todd Motto's](https://github.com/toddmotto/angularjs-styleguide)
