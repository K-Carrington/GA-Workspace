function print_type_and_value(a_var) {
	var the_type = typeof a_var;
	var rtn_val = the_type + "=" + a_var;
	console.log(rtn_val);
	return rtn_val;
}

print_type_and_value(5);
print_type_and_value(true);
print_type_and_value("a str");