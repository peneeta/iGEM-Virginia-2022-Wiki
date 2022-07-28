import { CountUp } from '../countUp.min.js';

var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    enableScrollSpy: true,
};

var counterParent = 
document.getElementById('counter-parent');
var children = counterParent.children;

function countStart(){
    console.log('started');
    $('#counter-parent').addClass('active');
    for (var i = 0; i < children.length; i++){
        var item = document.getElementById(children[i].id).querySelector('.counter');

        var countValue = item.getAttribute('data-value');

        var countUP = new CountUp(item, countValue, options);
    }
}

$( document ).ready(function() {
    console.log('ready');
    countStart();

})


