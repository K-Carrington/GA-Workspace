def ex_oh(str)
  str_arr = str.split('')
  x_count, o_count = 0, 0 # or just use return str.count('x') == str.count('y')
  str_arr.each do |chr|
  	 x_count += 1 if chr == 'x'
  	 o_count += 1 if chr == 'o'
  end
  if x_count == o_count
  	return true
  else 
  	return false
  end
end


def additive_persistence(n)
if n.class == Fixnum && n > 0
	#could use reduce: (5..10).reduce(:+)  #=> 45
  while n >= 10 do
  	str_arr = n.to_s.split('')
    sum = 0
    str_arr.each { |chr| sum += chr.to_i }
    n = sum
  end
  return n
else
  return "Please enter and integer greater than 0"
end
end
#could also
=begin
while n.to_s.length > 1
	sum = 0
	arr = n.to_s.each_char.map {|c| c.to_i}
	arr.each {|d| sum += d}
	n = sum
end
return n
---OR---
TBD look up map and reduce
sum = n.to_s.split('').map{|n| n.tail}.reduce{|sum,n| sum+n}
=end

is_it = ex_oh("xoxo")
puts is_it
is_it = ex_oh("xxoox")
puts is_it

n = additive_persistence(2718)
puts "#{n}"
n = additive_persistence(10)
puts "#{n}"