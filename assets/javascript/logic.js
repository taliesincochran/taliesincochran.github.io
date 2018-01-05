$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6pRKFFt7Rw9RdvivMHk4OjNWKSzUanoU",
    authDomain: "portfolio-contact-form-tdc.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-tdc.firebaseio.com",
    projectId: "portfolio-contact-form-tdc",
    storageBucket: "",
    messagingSenderId: "387173850316"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  $('#submit-button').on('click', function() {
    var name = $('#nameInput').val().trim();
    var email = $('#emailInput').val().trim();
    var message = $('#messageInput').val().trim();
    var firebaseObj = {
      name: name,
      email: email,
      message: message
    };
    if(name.length > 0 && email.length > 0 && message.length > 0) {
      var messageSent = database.ref('messages');
      return messageSent.push(firebaseObj).then(function(config) {
        console.log("pushed message to firebase.");
      })

    }
  });
});