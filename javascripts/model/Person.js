test = (function() {
	var student_list = new Array();
  student_list.push(new Person('Any','Gonzalez'));
	student_list.push(new Person('Tony','Gonzalez'));
	student_list.push(new Person('Brett','Gonzalez'));
	console.log(student_list);

	function Person(fn, ln) {
		this.first_name = fn;
		this.last_name = ln;
	}
	//
	Person.prototype.getString = function() {
		return this.first_name + " " + this.last_name;
	}

	// return the list of Person objects created
	Person.prototype.getAllPerson = function() {
		return student;
	}

/*
	// add the newly created Person object to the list
	Person.prototype.add = function(p_obj) {
		student.push(p_obj);
		// console.log(student);
	}
*/

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {};
	}

	window.testApp.model.Person = Person;

	return window.testApp;
})();
