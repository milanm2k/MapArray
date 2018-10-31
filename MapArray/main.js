window.addEventListener("load", function() {

    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    DrawMap();

});

function DrawMap() {
    // list of all textures used. order: ID, Colour, Collision.
    const textures = [
        [0, "#00e1ed", false], // Sky.
        [1, "#05b200", true], // Grass.
        [2, "#ffc32b", false] // Sun.
    ];
    var mapArray = 
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    let posX = 0;
    let posY = 0;
    // for loop to check into the X dimension.
    for (var i = 0; i < mapArray.length; i++) {
        // for loop to check into the Y dimension.
        for (var j = 0; j < mapArray[i].length; j++) {
            // for loop to make every number the colour of said number in textures.
            for (var k = 0; k < textures.length; k++) {
                if (mapArray[i][j] == textures[k][0]) {
                    ctx.fillStyle = textures[k][1];
                    ctx.fillRect(posX, posY, 64, 64);
                }
            }
            // Move the X position 64 pixels to the right to create a new block.
            posX += 64; 
        }
        // Reset the X position for the new Y position.
        posX = 0;
        // Move the Y position 64 pixels downwards to create a new block row.
        posY += 64;
    }
}