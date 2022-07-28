import { CountUp } from '../countUp.min.js';

var options = {
    duration: 4,
    useEasing: true,
    smartEasingThreshold: 500,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    enableScrollSpy: true,
    scrollSpyDelay: 5,
    scrollSpyOnce: true,
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


