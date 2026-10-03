// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`2000080001010101010101010201010101020101010101010101010200010101010101010000000000000000020000000002000000000000000000020000000000000000000000000000000002000000000200000202020202000002000004000000070500000004000004000200040000000000020000000000000200000004000006030000000000000000000000000000040002000400000000020000000404000809000000000200000000040002000000000200000202020202000004000400000000000000020000000000020000000000020000000000000000000000000000000101010102010101010102010101010102010101010101010101010101010101`, img`
. . . . . . . . 2 . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . 2 . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . 2 . . . . 2 . . 2 2 2 2 2 . . 2 . . . . . . . . 
. . . . . . . . 2 . . . . . . . 2 . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . 
. . . . 2 . . . . . . 2 . . . . 2 . . 2 2 2 2 2 . . . . . . . . 
. . . . 2 . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . 
. . . . 2 . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath8], TileScale.Sixteen);
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
// 自動生成されたコードです。変更しないでください。
