// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`14000f00010101010000020000000000000200000101010101010101000002000000000000020000010101010101010102000002020202020200000201010101010101010200000200020200020000020101010101010101000202020202020202020200010101010101010100000002000000000200000001010101010101010000000202020202020000000101010101010101000000000000000000000000010101010101010100000000000000000000000001010101010101010000000000000000000000000101010101010101000000000000000000000000010101010101010100000000000000000000000001010101010101010000000000000000000000000101010101010101000000000000000000000000010101010101010103030303030303030303030301010101`, img`
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
`, [myTiles.transparency8,myTiles.tile1,myTiles.tile4,myTiles.tile2], TileScale.Eight);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "transparency8":return transparency8;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
