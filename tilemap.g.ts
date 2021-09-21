// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000206060606060606060606060606060801030303030303030303030303030307040b0b0b100b0b0b0b0b0b10100f0e0a040b1010100b1010140b0b100b0b0b0a040b100b100b0b100b0b0b100c0b0d0a040b100b100c0b100b0b0b100b0b0b0a040b0b0b101010100b0b0b101010120a040b0b0b0b0b0b0b0b0b0b0b0b0b0b0a04140b1010100b0b0b0b0b0b0b100b0a040b0b0b0b100b140b0b100b0b10100a040b0b0b0b100b0b0b0b100b0b0b140a040b0b0b0b100b0b0b0b10100b0b0b0a0410101010100b0b0b0b0b101010120a04100c0b130b0b0b0b0b0b0b0b100b0a04100b0b100b0b0b0b0b0b0b0b100b0a05101010100b0b0b110b0b0b0b100c09`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . 2 2 . . 2 
2 . 2 2 2 . 2 2 . . . 2 . . . 2 
2 . 2 . 2 . . 2 . . . 2 . . . 2 
2 . 2 . 2 . . 2 . . . 2 . . . 2 
2 . . . 2 2 2 2 . . . 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . . . . 2 . 2 
2 . . . . 2 . . . . 2 . . 2 2 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 2 . . . 2 
2 2 2 2 2 2 . . . . . 2 2 2 . 2 
2 2 . . . . . . . . . . . 2 . 2 
2 2 . . 2 . . . . . . . . 2 . 2 
2 2 2 2 2 . . . . . . . . 2 . 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles1,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles2,sprites.builtin.forestTiles7,sprites.builtin.forestTiles3,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.castle.tilePath5,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.stairLarge,sprites.dungeon.greenSwitchUp,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
