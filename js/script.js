function subAns(){
	var tot= 5;
	var sc= 0;

	var q1 = document.forms["form1"]["q1"].value;
	var q2 = document.forms["form1"]["q2"].value;
	var q3 = document.forms["form1"]["q3"].value;
	var q4 = document.forms["form1"]["q4"].value;
	var q5 = document.forms["form1"]["q5"].value;


	for(i=1; i<= tot;i++){
		if(eval('q'+i)== null||eval('q'+i)==''){
			alert('You have not answered'+i);
			return false;
		}
	}


	var answers = ["b","a","d","b","d"];

for( i=1;i<tot;i++){
	if(eval('q'+i) == answers[i-1]){
		sc++;
	}
}
var results= document.getElementById('results');
results.innerHTML = '<h3>You scored<span>'+sc+'</span> out of <span>'+tot+'</span></h3>';
	
	return false;
}