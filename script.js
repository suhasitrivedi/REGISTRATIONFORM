function clearForm() {
    document.getElementById("registrationForm").reset();
    document.getElementById("output").innerHTML = "";
}

function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function() {
        var output = document.getElementById('imagePreview');
        output.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var imageFile = document.getElementById("image").files[0];

    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    var skillsArray = [];
    var checkboxes = document.querySelectorAll('input[name="skills"]:checked');
    checkboxes.forEach(function(checkbox) {
        skillsArray.push(checkbox.value);
    });
    var skills = skillsArray.join(', ');

    var tableRow = document.createElement("tr");

   
    var tableDataDetails = document.createElement("td");
    tableDataDetails.innerHTML = "<strong>Full Name:</strong> " + fullName + "<br>" +
                                  "<strong>Email:</strong> " + email + "<br>" +
                                  "<strong>Website:</strong> " + website + "<br>" +
                                  "<strong>Gender:</strong> " + gender + "<br>" +
                                  "<strong>Skills:</strong> " + skills;

    
    var tableDataImage = document.createElement("td");
    var imageElement = document.createElement("img");
    
    
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function(event) {
            imageElement.src = event.target.result;
        };
        reader.readAsDataURL(imageFile); 
    } else {
        imageElement.src = ""; 
    }
    
    imageElement.style.maxWidth = "100px"; 
    tableDataImage.appendChild(imageElement);

   
    tableRow.appendChild(tableDataDetails);
    tableRow.appendChild(tableDataImage);

    document.getElementById("studentTableBody").appendChild(tableRow);

    
    clearForm();
});
