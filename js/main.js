
var elTitle = document.querySelector('.title')

var son = prompt('Son kiriting');

if(son%3 == 0 && son%7 ==0 ){
    elTitle.textContent = '3 gayam 7 gayam bolinad';
 }
else if(son%3 == 0){
    elTitle.textContent = '3 ga bolinad';
 }else if(son%7 == 0){
    elTitle.textContent = '7 ga bolinadi';
 }
 
 else {
    elTitle.textContent = 'xatolik';
 }
