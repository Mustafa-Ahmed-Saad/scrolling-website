let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mustafa = document.querySelector('.mustafa');

// event on scroll
window.onscroll = function () {
  // scrollY to get value of scroll in Y axis
  let scrollValue = window.scrollY;
  stars.style.left = `${scrollValue}px`;
  // make moon move down quickly
  moon.style.top = `${scrollValue * 4}px`;
  // last mountain
  mountains3.style.top = `${scrollValue * 2}px`;

  mountains4.style.top = `${scrollValue * 1.5}px`;

  river.style.top = `${scrollValue}px`;
  // the boat will move to down and will move to right
  boat.style.top = `${scrollValue}px`;
  boat.style.left = `${scrollValue * 3}px`;

  // worled of MUSTAFA will be bigger untell scrollValue = 70
  mustafa.style.fontSize = `${scrollValue}px`;
  let scrollPoint = 80;
  if (scrollValue >= scrollPoint) {
    mustafa.style.fontSize = `${scrollPoint}px`;
    mustafa.style.position = 'fixed';

    // change night or light [light]
    document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';

    // hidden Worled of MUSTAFA
    if (scrollValue >= 474) {
      mustafa.style.display = 'none';
    } else {
      mustafa.style.display = 'block';
    }
    // here we can write this code here, when scroll faster down and up the moon will appear in light
    // if (scrollValue >= 85) {
    //   document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
    // } else {
    //   document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
    // }
  } else {
    // change night or light [night]
    document.querySelector('.main').style.background = 'linear-gradient(#200016, #000)';
  }
};
