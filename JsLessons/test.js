var storeContent = document.getElementsByClassName('findH2');

var storedH2 = storeContent[1].getElementsByTagName('h2');

storeContent[1].innerHTML = 'I have been changed';

var idH2 = document.getElementById('laterUse')

var docBody = document.getElementsByTagName('body')

docBody[0].innerHTML = '<p>I am a paragraph</p>'