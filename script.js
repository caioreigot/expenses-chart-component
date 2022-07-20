/* Bar Stat Hover Implementation */
const statBars = [...document.querySelectorAll('.stat-bar')];
const statBarHoverBox = [...document.querySelectorAll('.stat-bar-hover-value')];

statBars.forEach((bar, index) => {
  // Makes the value box appear when the mouse hovers over the stat bar
  bar.onmouseover = () => {
    statBarHoverBox[index].style.opacity = 1;
  }

  // When the mouse leaves the stat bar, it hides all the value boxes
  bar.onmouseleave = () => {
    statBarHoverBox.forEach(box => box.style.opacity = 0);
  }
});
/* End Bar Stat Hover Implementation */

/* Stat Bar Sizing Mechanics */
let statBarValues = [];
let highestMonetaryValue = 0;
let maxBarHeight;

statBarHoverBox.forEach((box, index) => {
  // Stores values ​​without "$" nor ".", example: $50.20 becomes 5020
  const value = box.innerText.replace(/[$.]/gm, '');
  statBarValues.push(value);

  if (value > highestMonetaryValue) {
    highestMonetaryValue = value;
    maxBarHeight = statBars[index].clientHeight;
  }
});

statBars.forEach((bar, index) => {
  // The highest value found on the chart is the base size for the other bars
  const heightPercentage = statBarValues[index] / highestMonetaryValue;
  correspondingHeight = maxBarHeight * heightPercentage;
  bar.style.height = `${correspondingHeight}px`;

  if (heightPercentage === 1) {
    bar.style.backgroundColor = 'var(--cyan)';
  }
});
/* End Stat Bar Sizing Mechanic */