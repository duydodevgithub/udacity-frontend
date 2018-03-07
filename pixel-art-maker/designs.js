// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();
    var grid = "";
    for(var i = 0; i < height; i++) {
        grid += "<tr>";
        for(var j = 0; j < width; j++) {
            grid += "<td onclick='colorChange(this)'></td>"
        }
        grid += "</tr>"
    }
    $("#pixelCanvas").html(grid);
}

function colorChange(el){
    var color = $("#colorPicker").val();
    el.style.backgroundColor = color;

}

$("#sizePicker").on("submit", function(){
    event.preventDefault();
    makeGrid();
})