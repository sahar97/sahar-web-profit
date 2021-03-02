//menu slide down and up
$(document).ready(function() {
    $("#panel ").css("display", "none");
  
    $("#flip , #close").click(function() {
        $("#panel").slideToggle("slow");
    });
  });

  //validation functions 
  const fields_validations = {
    'first_name' : /^[a-zA-Z ]{2,30}$/,
    'last_name' : /^[a-zA-Z ]{2,30}$/,
     'comName' :/^[0-9a-zA-Z]+$/,
     'job' :/^[0-9a-zA-Z]+$/,
     'email' :/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
     'numb' :/[0][0-9]{9}/,
     'comWeb' : /https?:\/\/[^\s]/,
    }

function validate (event){
    element=event.target;
       elementId=event.target.id;
    var elementVal =event.target.value;
if (!(elementVal.match(fields_validations[elementId]))) {
document.getElementById(elementId).classList.add('invalid');

}
else {
    document.getElementById(elementId).classList.remove('invalid');
}

}

function validate_select(){
    
    if ($("#select")[0].selectedIndex <= 0) {
        $("#select").addClass("invalid");  
    } else {
        $("#select").removeClass("invalid");

    }

    }




