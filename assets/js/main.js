/**************************************************
 *
 * CS3025 Prototype
 * AUTHOR   David Leger
 *          www.davidleger.me
 *
 **************************************************/

(function(){

  $('.menu-item, .back-btn').on('click', function () {
    $('.menu-item, .back-btn').removeClass('active');
    $(this).addClass('active');

    var currentSection = $(this).attr('data-section');
    $('.panel').hide(300);
    $(currentSection).show(300);

    if (currentSection === '#search') {
      $('.search-field').focus();
    }
  });

  $('.form').on('submit', function (e) {
    e.preventDefault();

    console.log('submit');

    var searchTerm = e.target.search.value.toLowerCase();

    if (searchTerm.length > 0) {
      console.log(searchTerm);

      var tags = null;

      $('.list-item').each(function(){
        tags = $(this).attr('data-tags').toLowerCase();
        console.log('data-tags', tags);

        if (~tags.indexOf(searchTerm)) {
          $(this).slideDown();
        } else {
          $(this).slideUp();
        }
      });

      $('.empty').hide(300);
      $('.search-results').slideDown();
    } else {
      $('.search-results').slideUp();
      $('.empty').show(300);
    }
  });

})();
