import { CountUp } from '../countUp.min.js';

window.onload = function() {
  var countUp = new CountUp('myTargetElement', 17900000, {useEasing: true}, {enableScrollSpy: true });
  countUp.start();
}