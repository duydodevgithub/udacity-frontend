// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;

    //create a table with height x width dimension
    let tableCode="";
    for(let i = 0; i < height; i++) {
      tableCode+= "<tr>";
      for(let j = 0; j < width; j++) {
        tableCode += "<td onclick='changeColor(this)'></td>"
      }
      tableCode+= "</tr>"
    }
    let grid = document.getElementById("pixelCanvas");
    grid.innerHTML = tableCode;
  }

  //create an event listener for form
  const sizePicker = document.getElementById("sizePicker");
  sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();    
    makeGrid();
  })

  //code for changing color
  function changeColor(pixel) {
    //get color code
    const colorCode = document.getElementById("colorPicker").value;
    pixel.style.backgroundColor ? ( pixel.style.backgroundColor = "") :(pixel.style.backgroundColor = colorCode)
  }
