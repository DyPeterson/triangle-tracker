$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($("#length1").val());
    const length2 = parseInt($("#length2").val());
    const length3 = parseInt($("#length3").val());

    let triangle = "";
    if (length1 + length2 <= length3 || length2 + length3 <= length1 || length1 + length3 <= length2) {
      triangle = "not a triangle"
    }
    else if (length1 === length2 && length2 === length3) {
        triangle = "Equilateral"
     }
    else if (length1 === length2 || length2 === length3 || length1 === length3) {
      triangle = "Isosceles"
    }
    else {
      triangle = "Scalene"
    }

    console.log(triangle);
  });
  });