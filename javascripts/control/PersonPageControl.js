var createPerson = (function() {

// Option 1 - Use addEventListener to register event handler
	function PersonPageControl() {

		// link the search button to a JS variable.
		var search_elm = document.getElementById('search_person_id');

		// define a new event handler for the search button.
		search_elm.addEventListener('click', function(event){
			console.log("the search button was clicked and activated the eventHandler");
			// grabs the value that is in the text box when user clicks search.
			var student_ln = document.getElementById('ln_id').value;
			console.log(student_ln);
			console.log(test);
			// searches through the Peron list and finds all students with matching last name?
			var found_list = searchStudent(student_ln);
			console.log("found_list");
			console.log(found_list);

			// create the view... HOW????
			var list_view = new test.view.ListView(found_list);

		});
	}

	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

/*
// Option 2 - Use onSubmit attribute to register event handler
	function createPerson(event) {
		console.log('Invoking createPerson() handler.');
		event.preventDefault();
		//
		var p_obj = new test.model.Person();
		var frm = event.target;
		console.log(frm);
		var elms = frm.elements;
		for (i=0; i<elms.length; i++) {
			if (elms[i].getAttribute('data-attr') != undefined) {
				var prop_name = elms[i].getAttribute('data-attr');
				console.log(prop_name);
				p_obj[prop_name] = elms[i].value;
			}
		}
		//
		p_obj.add(p_obj);
		// Create the view
  		var list_view = new test.view.ListView(p_obj.getAllPerson());
	}
	*/

	function searchStudent(last_name) {
		console.log("invoking the searchStudent function");
		var found_students = new Array();

		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		for (let person of listPerson) {
			if (person.getLastName() == last_name) {
				found_students.push(person);
				console.log(found_students);
			}
		}

		return found_students;
	}

	return createPerson;

})()
