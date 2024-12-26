//  Chapter-14-to-16

//  Questuion-1
 let student =[];

// Questuion-2
 let newStudent = new Array();

// Questuion-3
 let students = ["Ameer","Hamza","Atif","faisal"]

// Questuion-4
 let marks = [90,80,70,60,]

 // Questuion-5
 let boolean = [true,false,true,false]

 // Questuion-6
 let mixArray = ["Ameer",90,true,"Hamza",50,false]

// Question-7

let educatiionPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM","MS", "M. Phil.","PhD"];

document.write("Qualification In Pakistan")
document.write("<ul>")
for (let i = 0; i <educatiionPakistan.length; i++) {
    document.write(`<li>${educatiionPakistan[i]}</li>`);
}
document.write("<ul>")

//Quesiton-8

let studentName = ["Zeeshan", "Umair", "Badar"]
let studentMarks = [100, 300, 450]

const totalMarks = 500

document.write("<h2>Students Scores and Percentages</h2>");
document.write("<table border='5' cellpadding='10' cellspacing='10'>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
for (let i = 0; i < studentName.length; i++) {
    let percentage = (studentMarks[i] / totalMarks) * 100;
    document.write(`<tr><td>${studentName[i]}</td><td>${studentMarks[i]}</ td><td>${percentage}%</td></tr>`);
}


//Question-11

let cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("<h1>Cities List</h1>",cities)


let citiess = cities.slice(0,2);
document.write("<h1>First Two Cities</h1>",citiess)




