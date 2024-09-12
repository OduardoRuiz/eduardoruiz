const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/5819207453.js';
script.crossOrigin = 'anonymous';
document.body.appendChild(script);


function downloadCvEnglish() {
  const link = document.createElement('a');
  link.href = './document/CVENGLISH1.pdf';
  link.download = '01 - Eduardo Ruiz - English.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}
function downloadCvPortugues() {
  const link = document.createElement('a');
  link.href = './document/CVPORTUGUES1.pdf';
  link.download = '01 - Eduardo Ruiz - Português.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}


