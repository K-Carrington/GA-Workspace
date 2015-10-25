def square_em(n)
  #result = []
  #n.to_s.split('').each { |num| result.push(num.to_i ** 2)}.join.to_i
  n.to_s.split('').map {|num| num.to_i ** 2}.join.to_i
end

puts square_em(12)
puts square_em(123)
puts square_em(9119)