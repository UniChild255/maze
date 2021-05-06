scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    info.changeScoreBy(1)
    NextLevel()
})
function Level3 () {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    Level3()
})
function NextLevel () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    info.changeScoreBy(2)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . f 3 f 3 3 3 f 3 f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . f 3 f f f f f 3 f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . f f f f f f f f f . . . 
    . . f f f f 3 3 3 3 3 3 f f f f 
    . . f 3 3 f 3 3 3 3 3 3 f 3 3 f 
    . . f f f f 3 3 3 3 3 3 f f f f 
    . . . . . f f f f f f f f . . . 
    . . . . . . 9 9 9 9 9 9 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
