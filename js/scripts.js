// Business logic
const addColor = function(color, number) {
  const colors = {
    blue: '174,214,241',
    red: '245,183,177',
    yellow: '249,231,159',
    green: '171,235,198'
  };

  let code = `<tr> \
      <td class="wysiwyg-text-align-center" style="background-color: rgb(${colors[color]});width: 5.0%;text-align: center;vertical-align: top;"> \
        <span class="wysiwyg-color-black wysiwyg-font-size-medium">${number}</span> \
      </td> \
      <td class="wysiwyg-text-align-center" style="width: 95.0%;background-color: rgb(247,247,247);text-align: left;vertical-align: top;"> \
        <p></p> \
      </td> \
    </tr>`;
  
  return code
}

// User interface logic
$(document).ready(function() {

  $(".button").click(function(event) {
    event.preventDefault();
    
    let number = $("#numberInput").val()

    let color = $(this).attr("id");

    let presentValue = $("textarea").val()

    let result = addColor(color, number);

    $("#output").text(presentValue + result);
  });

  $("#end").click(function(event) {
    event.preventDefault();

    let presentValue = $("textarea").val()

    let closingTag = `</tbody></table>`
    
    $("#output").text(presentValue + closingTag);
  });

});