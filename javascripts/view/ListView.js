/*
Jonathan Sumarto
CPSC 473 - Assignment 2
*/

test = ( function () {

	//displays the list of individuals for the searched last names
	function ListView(data) {
		console.log("data");
		console.log(data);
		var ul_node = document.getElementById('person_list_id');
		this.root = ul_node;
		this.content = data;

		this.createChildNodeHandlebars = function() {
			console.log('Invoking createChildNodeHandlebars method');
			var source = document.getElementById('p-list-template').innerHTML;
			var template = Handlebars.compile(source);
			var context = {'people' : this.content};
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
	window.testApp.view.ListView = ListView;

	return window.testApp;
})();
