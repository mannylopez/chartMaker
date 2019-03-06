// Function to cut down on repeating the code for every color. Maybe I can create an object?

function addBlue(){
var step = document.getElementById("numberInput").value;
console.log(step);
var blue = "174,214,241"
var code = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(${blue});width: 5.0%;text-align: center;vertical-align: top;"> \
        <span class="wysiwyg-color-black wysiwyg-font-size-medium">${step}</span> \
      </td> \
      <td class="wysiwyg-text-align-center" style="width: 95.0%;background-color: rgb(247,247,247);text-align: left;vertical-align: top;"> \
        <p></p> \
      </td> \
    </tr>`;
//We first get the current value of the textarea
var x = document.getElementById("htmlOutput").value;
//Then we concatenate the string "content" onto it
console.log(blueRow)
document.getElementById("htmlOutput").value = x + blueRow;
// document.getElementById("htmlOutput").innerHTML = x + blueTable;
}