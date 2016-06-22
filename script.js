/* Exercise 1: Wish list */
function addToList(item) {
  var pending = "<span class='label pending'>Pending</span>";
  $('#items').append('<li>' + item + pending + "</li>");
}

function updateTotal() {
  var pending = $("span.pending").length;
  var completed = $("span.success").length;
  var message = 'Pending: ' + pending + ' Completed: ' + completed;
  $(".total").text(message);
}


$(document).ready(function() {
  $("#item").focus();

  $(document).on('click', '#add-to-list', function() {
    addToList($('#item').val());
    $('#item').val('');
    $('#item').focus();
    updateTotal();
  });

  $(document).on('click', 'span.label.pending', function(){
    var li_node = $(this).parent();
    li_node.append("<span class='label success'>Done!</span>");
    li_node.addClass('completed');
    $(this).remove();
    updateTotal();
  });
});
