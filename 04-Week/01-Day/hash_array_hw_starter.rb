# hint, change to instance var with @ infront
@students = [
	{name: "Alexander Juneja", email: "alexjuneja1@gmail.com"},
	{name: "Andrew Kim", email: "andyjinkim@gmail.com"},
	{name: "Brian Frager", email: "btfrager@gmail.com"},
	{name: "Genny Langan", email: "cglangan78@gmail.com"},
	{name: "Colin Chan", email: "clnsdabst@gmail.com"},
	{name: "Crystal Murray", email: "crystalsmurray@gmail.com"},
	{name: "Dan McQuillan", email: "djmcquillan76@gmail.com"},
	{name: "Eddie Jung", email: "ejung716@gmail.com"},
	{name: "Ellie Shahla", email: "ess9213@yahoo.com"},
	{name: "Emma Gilhuly", email: "emmagilhuly@me.com"},
	{name: "Eunice Chang", email: "omgunis@gmail.com"},
	{name: "Ivy Wong", email: "ivykww@gmail.com"},
	{name: "John Meredith", email: "johnm589@yahoo.com"},
	{name: "Juan Ruelas", email: "jruel006@ucr.edu"},
	{name: "Ken Carrington", email: "kcarring93@verizon.net"},
	{name: "Kevin Williams", email: "kevin.williams@onidaprep.com"},
	{name: "Kristen Gunn", email: "ohkristen@creativekdg.com"},
	{name: "Lilly Ghassemieh", email: "lillygh@gmail.com"},
	{name: "Nick Hendren", email: "nhendren7@gmail.com"},
	{name: "Rich Donnellan", email: "rich.donnellan@gmail.com"},
	{name: "Sam Hager", email: "sam.hager11@gmail.com"},
	{name: "Sam Richardson", email: "samrichardson01@hotmail.com"},
	{name: "Santiago Casar", email: "santiago@nowhereprod.com"},
	{name: "Sean Esteva", email: "seangeleno@gmail.com"},
	{name: "Sean Hall", email: "seanhall22@gmail.com"},
	{name: "Seri Orfali", email: "seriorfali@gmail.com"},
	{name: "Stefanie Koenig", email: "stefanie.l.koenig@gmail.com"},
	{name: "Ted Shumway", email: "shumway.ted@gmail.com"},
	{name: "Veronica Sykes", email: "vasykes@gmail.com"}
]

# A method to count how many students we have, also using string interpolation to generate output
def count_students
  #code here
  @students.count
end
count = count_students
puts "There are #{count} students in our class"

# A method to create a new student hash and push it to our students array
# The argument here is named student to make it clear it's a hash holding details about a new student
def new_student(name, email)
  #code here
  @students.push({name: name, email: email})
end
new_student("Joe Shmou", "shmou@gmail.com")

count = count_students
puts "count now = #{count}"

# A method to list our existing students in a particular format
  # This uses a new method, sort_by, which works similar to sort & came from the documentation
  # Then we're using string interpolation to define exactly what we want the output to look like
def list_students
  #code here 
  # First redo hash to list last name first
  # and format into array to get only name and email values
  s = []
  @students.each do |stu|
  	n = ''
    stu.each do |k,v| 
    # *** instead of this process stu[:name] & stu[:email] ***
      #puts "**key = #{k}, value = #{v}"
      if (k == :name) #want every other value (only names not emails)
      	n = v.split(' ')
        tmp = n[0]
        n[0] = n[1]
        n[1] = tmp
        n = n.join(" ")
      else
        #puts "pushing #{n}, #{v}"
      	#s.push({name: n, email: v})
      	s.push(n + ", " + v)
	  end
    end
  end

  #@students.reverse.sort_by {|n| n[:name] } #this sorts by 1st name given the original hash array
  return s.sort
end
sorted_list = list_students
puts "sorted_list = #{sorted_list}"



### BONUS

# A method to print a student's email, where the student's name can be passed as an argument to run the 'search'.
# use .find with |n| n[:name] == student_name) [;email]
# look up find
def student_details(s_name)
  #code here
 @students.find {|n| n[:name] == s_name} [:email]
end
email = student_details("Ken Carrington")
puts "email = #{email}"




