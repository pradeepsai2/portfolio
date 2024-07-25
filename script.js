const colorPalette = ['#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0'];
let colorIndex = 0;

function cycleColor() {
  colorIndex = (colorIndex + 1) % colorPalette.length;
  return colorPalette[colorIndex];
}

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('click', () => {
    section.style.backgroundColor = cycleColor();
  });
});
