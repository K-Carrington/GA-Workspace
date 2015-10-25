def divisor(n)
  divisors = []
  for i in 1..n
    if ((n % i) == 0)
    	#puts "#{i}"
    	divisors << i
    end
  end
  return divisors
end

def prime (n)
  primes = []
  for i in 1..n
    d = divisor(i)
    if d.length == 2
      primes << i
    end
  end
  return primes
end

def fib(n)
  fibs = []
  if n > 0
    fibs << 1
  end
  if n > 1
  	fibs << 1
  end
  sum = 2
  i = 2
  while i <= n
    sum = fibs[i-2] + fibs[i-1]
    fibs << sum
    i += 1
  end
  return fibs
end

puts "Enter number to find primes of:"
n = gets.chomp
primes = prime(n.to_i)
puts "Primes of #{n}: #{primes}"
#p = prime(8)
#puts "Primes of 8: #{p}"
#p = prime(50)
#puts "Primes of 50: #{p}"

puts "Enter number to find fibs of:"
n = gets.chomp
f = fib(n.to_i)
puts "Fibs of #{n}: #{f}"
#f = fib(8)
#puts "Fibs of 8: #{f}"
#f = fib(10)
#puts "Fibs of 10: #{f}"


