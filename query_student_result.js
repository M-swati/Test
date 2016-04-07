var QueryStudentResults = function () {

}

QueryStudentResults.prototype.getTopper = function(studentResults) {
	//Returns the name of student with highest marks and his percentage
//getTopper = function(){
	var temp;
	for(var i=0; i <studentResults.length -1; i++){
		if (i <studentResults.length -1 )
{
	var S1Marks = studentResults[i].marks.Maths +
	studentResults[i].marks.ComputerScience +
	studentResults[i].marks.English ;

var S2Marks = studentResults[i].marks.Maths +
	studentResults[i].marks.ComputerScience +
	studentResults[i].marks.English ;

	if (S1Marks > S2Marks){
		temp = S1Marks;

	}  
    else {temp = S2Marks;
    } 
}	}

}
 console.log("Topper:" +temp)''
}

QueryStudentResults.prototype.getResultSheet = function(studentResults) {
	//returns the name of each student with their %	
var Result = [];
for (var i=0; i < studentResults.length; i++){
	var name = studentResults[i].name;
	var totalmarks = studentResults[i].marks.Maths +
					studentResults[i].marks.ComputerScience +
					studentResults[i].marks.English;
					var percentage = (totalmarks/300)*100;

					Console.log(name+ "got" + percentage + "%");
}
}

QueryStudentResults.prototype.getSubjectTopper = function(subjectName, studentResults) {
	//returns the name of each student with their %	
}
module.exports = QueryStudentResults;
