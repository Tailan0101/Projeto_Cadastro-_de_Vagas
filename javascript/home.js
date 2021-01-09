jQuery(function() {

    var minimized_elements = $('p.minimize');
  
    minimized_elements.each(function() {
      var t = $(this).text();
      if (t.length < 200) return;
      
  // vai inserir botão de leia mais e Leia menos no final do testo minimizado.
      $(this).html(
        t.slice(0, 200) + '<span>... </span><a href="#!" class="more">Leia Mais</a>' +
        '<span style="display:none;">' + t.slice(295, t.length) + ' <a href="#!" class="less">Esconder</a></span>'
      );
  
    });
  
    $('a.more', minimized_elements).click(function(event) {
      event.preventDefault();
      $(this).hide().prev().hide();
      $(this).next().show();
    });
  
    $('a.less', minimized_elements).click(function(event) {
      event.preventDefault();
      $(this).parent().hide().prev().show().prev().show();
    });
  
  });

  // minha função para esconder Logo da somente quando tele for menor que 400px

  function escondeLogo(){
    if(window.matchMedia("(max-width: 460px)").matches){
    if(document.getElementById('esconde').style.display =="none"){
    document.getElementById('esconde').style.display = "block";
    }
    else{
      document.getElementById('esconde').style.display ="none";
    }
    }
  }