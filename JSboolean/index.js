var skyIsBlue = true;

var skyIsBlue = 'true';

Boolean(10 > 5);

var dogsHaveFur = true;
if (dogsHaveFur){
    document.write('Yes, dogs have fur!')
}   else{
    document.write('someone shaved this dog :(')
}

var myAge = 26;

if (myAge > 30){
    document.write('warning, midlife crisis agead!')
} else if (myAge > 20){
    document.write("you're in your prime!")
} else if(myAge > 10){
    document.write ('you are a child!')
} else {
    document.write('you are a baby!')
}


var personAge = 27;

if(personAge >= 18 || personAge < 30 || personAge === 27){
    document.write('you can go to the concert!')
} else {
    document.write('you need to stay home!')
}

// var personAge = 5;

while(personAge < 10){
    //code block
    console.log('you are less than 10')
}
document.write('you are over 10')


for(personAge = 5; personAge < 10; personAge++){
    console.log('you are less than 10')
}
document.write('now you are over 10')


var links = document.getElementsByTagName('a'); 

for(i = 1; i <= links.length; i++){
    console.log('this is link number')
}
document.write('all links have been looped')



for(i = 0; i < 10, i++;){
    

    if(i ===5 || i === 3){
        continue;
    }

    console.log(i)

    if(i === 7){
       console.log('the loop is broken')
        break;
    }
}



var links = document.
document.getElementsByTagName('a')

for(i = 1; i <= links.length; i++){
    links [i].className = 'Link-' + i
}