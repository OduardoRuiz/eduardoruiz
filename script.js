// Define a função para ativar o item do menu atual
function activateCurrentMenu() {
    // Obtém a URL atual da página
    var currentUrl = window.location.href;
  
    // Obtém todos os links do menu
    var links = document.querySelectorAll('nav ul li a');
  
    // Itera sobre cada link do menu
    for (var i = 0; i < links.length; i++) {
      // Obtém a URL do link atual
      var linkUrl = links[i].href;
  
      // Verifica se a URL atual é igual à URL do link
      if (currentUrl == linkUrl) {
        // Adiciona a classe "active" ao item do menu atual
        links[i].classList.add('active');
        break;
      }
    }
  }
  
  // Chama a função para ativar o item do menu atual quando a página é carregada
  window.onload = function() {
    activateCurrentMenu();
  };
  