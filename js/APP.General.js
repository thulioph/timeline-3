var APP = APP || {};
APP.General = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href;

    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();

      href = $(this).attr('href');

      APP.General.request(href);
    });
  },

  request: function(href) {
    $.ajax({
      url: href,

      beforeSend: function() {
        APP.Timeline.stateTwo();
        $('#content').html('Carregando conteúdo...');
        
        // Insert dynamic script with page in request;
        href = href.replace('.html', '');
        APP.General.insertScript(href);
        APP.General.removeScript(href);
      },

      success: function(href) {
        $('#content').html(href);
      },

      error: function() {
        console.log('Ocorreu um erro!');
      }
    });
  },

  // Insert dynamic script with page in request;
  insertScript: function(page) {
    var script, content;

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'script-' + page;
    script.src = 'js/flash/'+page+'.js';

    content = document.querySelector('#content');
    content.parentNode.insertBefore(script, content);
  },

  // Remove script after init;
  removeScript: function(page) {
    var script, value;

    script = $('#script-'+page)[0].remove();
  }
}
