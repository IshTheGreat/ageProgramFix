//Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
    h1.setAttribute('id', 'ageInDayss');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDayss').remove();
}

function generateCat() {
   var image = document.createElement('img')
   var div = document.getElementById('flex-cat-gen');
   image.src = "http://thecatapi.com/api/images/get?format=src&tye=gif&size=small"
   div.appendChild(image);
}