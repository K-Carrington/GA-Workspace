## Steps we took to create our Rails app using active record:

**Step 1.** Create the new app (without specifying the database type, it defaults to SQLite when we create the database in the next step):

``` bash
rails new app_name_here
```

**Step 2.** Create the default SQLite database:

``` bash
rake db:create
```

**Step 3.** Create a model (specifying the types of fields we want to store):

``` bash
rails generate model User name:string email:string age:integer
```

The above command creates the Model files as well as a migration file for the database, but does not actually modify the database itself. We do that next:

**Step 4.** Run a command to apply the migration file's instructions to modify the database accordingly. 

``` bash
rake db:migrate
```

In the Rails console, try creating some users based on the model you created:

``` bash
rails console
# Loading development environment (Rails 4.2.2)
irb(main):001:0> User.create({name: "Napoleon Dynamite", email: "napoleon@gmail.com", age: 19})
```

This will return the object you've saved to the database, and you should see something like this below the SQL code that appears:

``` bash
=> #<User id: 1, name: "Napoleon Dynamite", email: "napoleon@gmail.com", age: 19, created_at: "2015-10-27 01:30:59", updated_at: "2015-10-27 01:30:59">
```

You can now see properties about that user in the console:

``` ruby
napoleon = User.first
napoleon.age
=> 19
```

**Step 5.** Now create another model, one that might belong to the user, that a user might have many of (like 'Post', or 'Movie'), using the above as a reference.

**Step 6.** Once you have two models that you want to create a relationship for, there are two things that need to happen:

​	1. We need to add a column to the new model we built, which will reference a user's ID.

​	2. We need to create the relationship between the two models in our code.

Create a migration to add the user_id column to the other table and assign it as a foreign key, so we can reference the user it belongs to:

``` bash
rails generate migration AddUserToPosts user:references
rake db:migrate
```

In your Models, add the relationships. Here's one for the User model:

``` ruby
class User < ActiveRecord::Base
  has_many :posts
end
```

Here's one for the Post model:

``` ruby
class Post < ActiveRecord::Base
  belongs_to :user
end
```

Restart your rails server and console to make sure any errors are our fault and not the app's :)

**Step 7.** Back in the rails console, find the user you created, and create a post for that user:

``` ruby
irb(main):005:0> user = User.first
irb(main):006:0> user.posts.create({title:"Hello World!", body:"Testing 12345!!!"})

=> #<Post id: 1, title: "Hello World!", body: "Testing 12345!!!", created_at: "2015-10-26 22:07:53", updated_at: "2015-10-26 22:07:53", user_id: 1>
```

if you see a `user_id` for that record you just created, you'll know that the one-to-many relationship has been established correctly. You can now query your database for records in either table many different ways using ActiveRecord!

``` ruby
irb(main):007:0> u1 = User.first
irb(main):008:0> u1.posts.first.title
irb(main):009:0> u1.posts.first.body

irb(main):010:0> p1 = Post.first
irb(main):011:0> p1.user.name
```

**Step 8.** Let's load some data from our database into a view. First we need a controller. In this example, we'll create a users controller to create views pertaining to users:

``` bash
rails generate controller users index show
```

**Step 9.** Create an instance variable for one of our users, to make sure the connection to our database is all fine and dandy:

``` ruby
# in /controllers/users_controller.rb:
class UsersController < ApplicationController
  def index
    @user = User.first
  end

  def show  
  end
end
```

And in the associated index view (index.html.erb)

``` erb
<!-- in /views/users/index.html.erb -->
User's name: <%= @user.name %><br>
User's first post title: <%= @user.posts.first.title %>
User's first post body: <%= @user.posts.first.body %>
```