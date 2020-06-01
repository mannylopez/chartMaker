// Business logic
const addColor = function(color, number) {
  return color + number
}

// User interface logic
$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    
    let number = $("#numberInput").val()
    console.log(number);

    let color = $(this).attr("id");
    console.log(color);

    let result = addColor(color, number);

    $("#output").text(result);

  });
});

// $(document).ready(function() {
//   $("#number-to-sentence").submit(function(event) {
//     event.preventDefault();

//     let userInput = parseInt($("#user-input").val());
//     let result = rogersConverter(userInput);
    
//     $(".rogers-output").text();
//     $(".rogers-output").text(result);
//   });
// });



// // One function to rule them all
// function addColor(colorName){
//   var step = document.getElementById("numberInput").value;
//   console.log(step);
//   var colors = {
//    BLUE: '174,214,241',
//    RED: '245,183,177',
//    YELLOW: '249,231,159',
//    GREEN: '171,235,198'
//   };

//   var code = `<tr> \
//       <td class="wysiwyg-text-align-center" style="background-color: rgb(${colors[colorName]});width: 5.0%;text-align: center;vertical-align: top;"> \
//         <span class="wysiwyg-color-black wysiwyg-font-size-medium">${step}</span> \
//       </td> \
//       <td class="wysiwyg-text-align-center" style="width: 95.0%;background-color: rgb(247,247,247);text-align: left;vertical-align: top;"> \
//         <p></p> \
//       </td> \
//     </tr>`;
//   //We first get the current value of the textarea
//   var x = document.getElementById("htmlOutput").value;

//   //Then we concatenate the string "content" onto it
//   document.getElementById("htmlOutput").value = x + code;
//   // document.getElementById("htmlOutput").innerHTML = x + blueTable;
// }

// function endTag(){
//   //We first get the current value of the textarea
//   var x = document.getElementById("htmlOutput").value;
//   var end = `</tbody></table>`
//   //Then we concatenate the string "content" onto it
//   console.log(end)
//   document.getElementById("htmlOutput").value = x + end;
// }
