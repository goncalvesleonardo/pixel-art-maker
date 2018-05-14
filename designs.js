// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < y; columns++) {
            $(".container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
}; 


$(document).ready(function() {

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    });

    $("#enviar").click(function() {
        let width = $("#inputWidth").val();
        let height = $("#inputHeight").val();

        let color = $("#colorPicker").val();

        console.log(height);
        $(".container .grid").remove();
        makeGrid(width, height);   

        $(".grid").mouseover(function() {
        $(this).css("background-color", color);
        });
    });
});