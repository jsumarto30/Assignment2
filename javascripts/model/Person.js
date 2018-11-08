(function (window) {
  'use strict';
  var App = window.App || {};
  var student = new Array();
/*
  function Person(){
    console.log('Running the Person Function');
    this.student = {};
  }
*/

  function Person(fn, ln){
    this.first_name = fn;
    this.last_name = ln;
  }

  Person.prototype.add = function (stu) {
    student.push(stu);
    console.log(student);
  };

  App.Person = Person;
  window.App = App;
})(window);
