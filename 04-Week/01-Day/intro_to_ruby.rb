greeting = "hello " + "LA"
tres = 1 + 2
num = 1234.next
alt_greeting = "hello " + 2.to_s

# #{} is "string interpolation" - must use double quotes in puts statement
puts "greeting = #{greeting}, tres = #{tres}, num = #{num}, alt_greeting = #{alt_greeting}" 

puts ("greeting = " + greeting)
puts ("tres = " + tres.to_s)
puts greeting
puts tres



aFile = File.new("input.txt", "r")
if aFile
   content = aFile.sysread(20)
   puts content
else
   puts "Unable to open afile!"
end

bFile = File.new("output.txt", "w")
if bFile
   content.each_line....
   # process above content and write
   bFile.syswrite("ABCDEF")
else
   puts "Unable to open bfile!"
end

aFile.close
bFile.close