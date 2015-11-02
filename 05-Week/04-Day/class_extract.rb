def extract_obj_from(arr, class_name)
	new_array = []
	arr.each do |elem|
      new_array.push(elem) if elem.is_a?(class_name)
	end
	puts new_array
	return new_array
end

mixed_array = ["Boom!", 25, :gloop, 90, :foo, "Knock knock?", {name: "Uncle Jimmy"}]
puts "Ineger:"
new_array = extract_obj_from(mixed_array, Integer)
puts "String:"
new_array = extract_obj_from(mixed_array, String)
puts "Symbol:"
new_array = extract_obj_from(mixed_array, Symbol)
puts "Hash:"
new_array = extract_obj_from(mixed_array, Hash)
