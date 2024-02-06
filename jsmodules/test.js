alert("Hey how are ya")

var firstVariable

var myName= "Kirk";
document.write(myName);
console.log(myName);



//here is a comment
var myAge= 24
if (myAge> 30){
    document.write("warning mid life crisis")
}
else if (myAge>20){
    document.write("you're in your prime")
}
else if (myAge>10){
    document.write("you're a child")
}
else{
    document.write("you're a baby!")
}


var personAge = 25
if (personAge >= 18 || personAge<= 30)
document.write("you can go to the concert")
else{
    document.write("Who is yeat?")
}

var personAge = 5
while(personAge <10){
    console.log("you are less than 10");
    personAge++;
}document.write("you are over 10");

for (personAge = 5; personAge < 10; personAge ++){

    console.log("you are less than 10");
}document.write("you are over 10");

for(i = 1; i < links.length; i ++){

    console.log('this is link number'+ i)

}document.write('all links have been looped')

for (i = 0; < 10; i++){
    console.log(i);
}
if (i === 7){
    console.log("the loop is broken");
    break;
}