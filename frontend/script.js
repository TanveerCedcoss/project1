$(document).ready(function () {
  $(".btn").click(function (e) {
    e.preventDefault();

    var email = $("#email").val();
    var rating = $(".feedbackValue:checked").val();
    var feedback = $(".description_area").val();
    validateFields(email, rating, feedback);
    // token = getAuthToken(email);
    arrau = {'email' : email};
    console.log(arrau);
  });
});

function validateFields(email, rating, feedback) {
  if (email.length == 0) {
    alert("email is required!!");
    throw "email is required!!";
  }
  if (typeof rating == "undefined") {
    alert("Please select a rating");
    throw "Please select a rating";
  }
  if (feedback.length == 1 || feedback.length == 0) {
    alert("Message cannot be empty");
    throw "Message cannot be empty";
  }

  if (!validateEmail(email)) {
    alert("Incorrect email format!");
    throw "Incorrect email format!";
  }
}

function validateEmail(email) {
  var reg = /^([\w-\.]+@+([\w-]+\.)+[\w-]{2,4})?$/;
  return reg.test(email);
}

function getAuthToken(email) {
  $.ajax({
    method: "GET",
    url: "http://0.0.0.0:8080/getToken/123@cnb.com",
    // data: { email: email },
  }).done(function (data) {
    data = JSON.parse(data);
    console.log(data);
  });
}

function postFeedback() {
  $.ajax({
    method: "POST",
    url: "http://0.0.0.0:8080/feedbacks",
    // data: { email: email },
  }).done(function (data) {
    data = JSON.parse(data);
    console.log(data);
  });
}
