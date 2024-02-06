console.log(document.getElementsByClassName('findH2'));

var storeContent = document.getElementsByClassName('findH2');

var storedH2 = storeContent[1].getElementsByTagName('h2');

storeContent[1].innerHTML = 'I have been a real boy';

var docBody = document.getElementsByTagName('body');

docBody[0].innerHTML = "<p>I am a paragraph</p>";

