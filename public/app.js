function addProfileFromUsername(username){
  $.get('https://api.github.com/users/'+username+'?client_id=058399f7ffb7aabf5c62&client_secret=92289716e9f45636be4bdf18cd374493d1f42dce', function(user){
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $(newProfile).prependTo('.profile-container').hide().slideDown();
  }).error(function () {
    alert ("sorry, username not found");
  }).always(function(){
    $('#username').val('');
  })
}

$(document).ready(function() {
  $('#add_profile').submit(function(event) {
    event.preventDefault();
    addProfileFromUsername($('#username').val())
  });
  $('.profile-container').on('click', '.close', function() {
    $(this).closest('.profile').slideUp(function() {
      $(this).remove();
    })
  });
});