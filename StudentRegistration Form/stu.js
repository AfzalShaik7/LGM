document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var idCard = document.getElementById("idCard").value;
    var course = document.getElementById("course").value;
    
    // Display details
    var detailsContainer = document.getElementById("registrationDetails");
    detailsContainer.innerHTML = "<div class='details'><strong>Name:</strong> " + name + "</div>";
    detailsContainer.innerHTML += "<div class='details'><strong>Email:</strong> " + email + "</div>";
    detailsContainer.innerHTML += "<div class='details'><strong>Gender:</strong> " + gender + "</div>";
    detailsContainer.innerHTML += "<div class='details'><strong>ID Card Number:</strong> " + idCard + "</div>";
    detailsContainer.innerHTML += "<div class='details'><strong>Course:</strong> " + course + "</div>";
    
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("idCard").value = "";
    document.getElementById("course").value = "";
  });
  