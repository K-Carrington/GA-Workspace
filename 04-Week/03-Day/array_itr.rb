dwarfs = ['sleepy', 'bashful', 'dopey', 'happy', 'doc', 'grumpy']
dwarfs.each {|d| puts("the " + d + " dwarf")}
dwarfs.each {|d| puts("the " + d[0] + d[1] + " dwarf")}
dwarfs.each {|d| puts("the " + d.slice(2) + " dwarf")}

dwarf_initials = []
dwarfs.each {|d| dwarf_initials.push(d.slice(0..1))}
# this can be done better with map (creates an array via the transfomation in {})
dwarf_initials = dwarfs.map {|d| d.slice(0..1)}


mych = "abcde"
#gsub can also do the above (maybe) but 
# here is a regex that checks that first 2 chars exsist
if (mych.gsub!(/.{2}/))
  puts "true"
end  