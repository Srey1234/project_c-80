function Pragraph1() {
    var display_Paragraph_array = [];
     for (var j = 1; j <= 4; j++)
    
     { var paral_input_box_array = document.getElementById("paral_input_box_"+j).value;
      console.log(paral_input_box_); paral_input_box_array.push(paral_input_box_); } 
      console.log(paral_input_box_);


     var lenght_of_paral_input_box_array = paral_input_box_array.length;
     console.log(lenght_of_paral_input_box_array); 
     for (var k = 0; k < lenght_of_paral_input_box_array; k++)
     {display_Paragraph_array.push("<h4>NAME - "+ paral_input_box_array[k] + "</h4>"); console.log(display_Paragraph_array); }
     console.log(display_Paragraph_array);
     document.getElementById("showParagraph_1").innerHTML = display_student_array; var remove_commas = display_Paragraph_array.join(" ");
     console.log(remove_commas);
     document.getElementById("Paragraph_button_1").style.display = "none";
}