/*
Jonathan Sumarto
CPSC 473 - Assignment 2
*/

test = ( function () {
	//
		// this is the View module for the table grade layout.
		// the data being passed to this would be the array of grades.
		function TableView(data) {
			console.log("data");
			console.log(data);

			//need to change to table stuff.
			var table_node = document.getElementById('grade_table_id');
			this.root = table_node;
			this.content = data;

			this.createChildNodeHandlebars = function() {
				console.log('Invoking createChildNodeHandlebars method');
				var source = document.getElementById('s-grade-template').innerHTML;
				var template = Handlebars.compile(source);
				var context = {'grade' : this.content};
				var html_str = template(context);
				this.root.innerHTML = html_str;
			}
			this.createChildNodeHandlebars();
		}


	if (window.testApp == undefined) {
		window.testApp = {};
	}
	if (window.testApp.view == undefined) {
		window.testApp.view = {};
	}
	window.testApp.view.TableView = TableView;

	return window.testApp;
})();
