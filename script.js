function downloadCvEnglish() {
    const link = document.createElement('a');
    link.href = '/document/cvEnglish.pdf';
    link.download = '01 - Eduardo Ruiz - English.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }
  function downloadCvPortugues() {
    const link = document.createElement('a');
    link.href = '/document/cvPortuguesN.pdf';
    link.download = '01 - Eduardo Ruiz - Português.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }
  
  