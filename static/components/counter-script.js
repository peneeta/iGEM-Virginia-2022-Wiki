import { CountUp } from '../countUp.min.js';

var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
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

        var countUP = new CountUp(item, 0, countValue, 0, 2, options);
        if (!countUP.error) {
            countUP.start();
        }
    }
}

countStart();

// ScrollReveal().reveal('.counter-section', {
//     beforeReveal: countStart
    
// })
