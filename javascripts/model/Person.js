test = (function() {

	//var student1 = new Person('Amy','Gonzalez');
	var student2 = new Person('Tony','Gonzalez');
	var student3 = new Person('Brett','Gonzalez');

	var class1 = new Grade('Social Studies','B');
	var class2 = new Grade('Math','A');
	var class3 = new Grade('Language Arts','B');
	var class4 = new Grade('Science','A');

	var student_list = new Array();
  student_list.push(student1);
	student_list.push(student2);
	student_list.push(student3);
	console.log(student_list);
/*
	var report_card = new Array();
	report_card.push(class1);
	report_card.push(class2);
	report_card.push(class3);
	report_card.push(class4);
	console.log(report_card);
*/
	function Person(fn, ln) {
		this.first_name = fn;
		this.last_name = ln;
		this.report_card = [];

		this.add = function(classgrade){
			this.report_card.push(classgrade);
		};
	}

	function Grade(cn, lg){
		this.class_name = cn;
		this.letter_grade = lg;
	}

	//Create student name and grades for Amy Gonzalez
	var student1 = new Person('Amy','Gonzalez');
	objPerson.add(class1);
	objPerson.add(class2);
	objPerson.add(class3);
	objPerson.add(class4);
	//console.log(objPerson);
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
