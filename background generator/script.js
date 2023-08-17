const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const generateBtn = document.getElementById('generateBtn');
const preview = document.querySelector('.preview');
const cssCode = document.getElementById('cssCode');

function generateGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;

  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

  preview.style.background = gradient;
  cssCode.value = `background: ${gradient};`;
}

generateBtn.addEventListener('click', generateGradient);

// Initial generation on page load
generateGradient();
