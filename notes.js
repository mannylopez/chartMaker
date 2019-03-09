// Function to cut down on repeating the code for every color. Maybe I can create an object?

function addBlue(){
var step = document.getElementById("numberInput").value;
console.log(step);
var colors = {
 BLUE: '123,456,789',
 RED: '456,789,012',
};

var code = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(${colors.BLUE});width: 5.0%;text-align: center;vertical-align: top;"> \
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

// March 09, 2019 Remove repetitive functions


function addBlue(){
	var step = document.getElementById("numberInput").value;
	console.log(step);
	var blueRow = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(174,214,241);width: 5.0%;text-align: center;vertical-align: top;"> \
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

function addRed(){
	var step = document.getElementById("numberInput").value;
	console.log(step);
	var redRow = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(245,183,177);width: 5.0%;text-align: center;vertical-align: top;"> \
        <span class="wysiwyg-color-black wysiwyg-font-size-medium">${step}</span> \
      </td> \
      <td class="wysiwyg-text-align-center" style="width: 95.0%;background-color: rgb(247,247,247);text-align: left;vertical-align: top;"> \
        <p></p> \
      </td> \
    </tr>`;
	//We first get the current value of the textarea
	var x = document.getElementById("htmlOutput").value;
	//Then we concatenate the string "content" onto it
	console.log(redRow)
	document.getElementById("htmlOutput").value = x + redRow;
	// document.getElementById("htmlOutput").innerHTML = x + blueTable;
}

function addYellow(){
	var step = document.getElementById("numberInput").value;
	console.log(step);
	var yellowRow = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(249,231,159);width: 5.0%;text-align: center;vertical-align: top;"> \
        <span class="wysiwyg-color-black wysiwyg-font-size-medium">${step}</span> \
      </td> \
      <td class="wysiwyg-text-align-center" style="width: 95.0%;background-color: rgb(247,247,247);text-align: left;vertical-align: top;"> \
        <p></p> \
      </td> \
    </tr>`;
	//We first get the current value of the textarea
	var x = document.getElementById("htmlOutput").value;
	//Then we concatenate the string "content" onto it
	console.log(yellowRow)
	document.getElementById("htmlOutput").value = x + yellowRow;
	// document.getElementById("htmlOutput").innerHTML = x + blueTable;
}

function addGreen(){
	var step = document.getElementById("numberInput").value;
	console.log(step);
	var greenRow = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(171,235,198);width: 5.0%;text-align: center;vertical-align: top;"> \
        <span class="wysiwyg-color-black wysiwyg-font-size-medium">${step}</span> \
      </td> \
      <td class="wysiwyg-text-align-center" style="width: 95.0%;background-color: rgb(247,247,247);text-align: left;vertical-align: top;"> \
        <p></p> \
      </td> \
    </tr>`;
	//We first get the current value of the textarea
	var x = document.getElementById("htmlOutput").value;
	//Then we concatenate the string "content" onto it
	console.log(greenRow)
	document.getElementById("htmlOutput").value = x + greenRow;
	// document.getElementById("htmlOutput").innerHTML = x + blueTable;
}