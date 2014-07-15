$(document).ready(function(){
  $('form#new-contact-form').submit(function(event){
    event.preventDefault();

    var newFirstName = $('#new-first-name').val();
    var newLastName = $('#new-last-name').val();
    var newAddress = $('#new-address').val();

    var thisContact = { firstName: newFirstName,
                        lastName: newLastName,
                        address: newAddress };



      $('#contact-list').append("<li><span class='contact'>" + thisContact.firstName + " " +
                            thisContact.lastName + ", " +
                            thisContact.address + "</span></li>");



      $('.contact').last().click(function() {
        $('#view-contact').show();
        $('.first-name').text(thisContact.firstName);
        $('.last-name').text(thisContact.lastName);
        $('.address').text(thisContact.address);
      });

  });
});

