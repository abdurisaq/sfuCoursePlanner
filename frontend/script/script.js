alert('test')



const majors = ["appliedSciences","socialSciences","socialSciences"];

document.addEventListener("DOMContentLoaded", function() {
  var txt1 = document.getElementById("major");
  txt1.addEventListener("change", function() {
  var strUser = txt1.options[txt1.selectedIndex].text;
    document.getElementById("ouput").innerHTML = "You have selected: " + strUser;
  });
});

