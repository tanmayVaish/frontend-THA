// =======================    Q1 start    =============================

var student = {name : "David Rayy", sclass : "VI", rollno : 12 };

// Accessing JS object's properties
console.log(student.name);


console.log("====================")
// for...in loop
for(let i in student)
{
    console.log(i+":"+student[i]);
}


console.log("====================")
// adding new properties

student.section = "A";
for(let i in student)
{
    console.log(i+":"+student[i]);
}


console.log("====================")
// deleting properties

delete student.sclass;
for(let i in student)
{
    console.log(i+":"+student[i]);
}

console.log("====================")


// nested properties
student.subjects = {Physics:89,Chemistry:69,Maths:60};
for(let i in student)
{
    console.log(i+":"+student[i]);
}
console.log("In Subjects property, there is nested property:")
for(let i in student.subjects)
{
    console.log(i+" "+student.subjects[i]);
}


console.log("====================")

// nested properties with arrays

student.extra = {sports:["Basketball","Hockey","Cricket"],charity:"walk for unity",books:"harry potter"};

for(let i in student)
{
    console.log(i+":"+student[i]);
}

console.log("In extra property, there is a array:")

for(let i in student.extra)
{
    console.log(i+" "+student.subjects);
}
console.log("nested Array: ")
for(let j in student.extra.sports)
{
    console.log(student.extra.sports[j]);
}

// ===================================================================