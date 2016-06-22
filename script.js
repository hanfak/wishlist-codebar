/* Exercise 1: Wish list */
function addToList(item) {
  $('#items').append('<li>' + item + '</li>');
}

$(document).ready(function() {
  $("#item").focus();

  $(document).on('click', '#add-to-list', function() {
    addToList($('#item').val());
    $('#item').val('');
    $('#item').focus();
  });

});
