/*VALIDATOR FORM*/

$(document).ready(function() {
  $("#container form-box").validate({
	rules: {
    name : {
       required: true,
       minlength: 3
      },
    email: {
       required: true,
       email: true
     },
    birthday: {
    	required: true,
    	date: true
    },
    telf: {
    	required: true,
    	digits: true,
    	maxlength: 12
    },
    city:{
    	required: true,
    	minlength: 4
    },
    postalcode: {
    	required: true,
    	digits: true,
    },
    date: {
    	required: true,
    	date: true
    },
    people:{
    	required: true,
    	range: [1,10]
    },

    messages : {
  	name: {
    	minlength: "Name should be at least 3 characters"
 	 },
 	email: {
    	email: "The email should be in the format: abc@domain.tld"
    },
    postalcode: {
    	digits: "Please only number"
    	
  });
});



/* COMPARTIT EN FACEBOOK*/

var  d = new Date();
var month = new Array(12);
month[0]='Enero';
month[1]='Febrero';
month[2]='Marzo';
month[3]='Abril';
month[4]='Mayo';
month[5]='Junio';
month[6]='Julio';
month[7]='Agosto';
month[8]='Septiembre';
month[9]='Octubre';
month[10]='Noviembre';
month[11]='Diciembre';

var todaysDate=+d.getDate()+' de '+month[d.getUTCMonth()]+' del '+d.getUTCFullYear();
document.getElementById('fechahoy').innerHTML='Hoy es: '+todaysDate;