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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    info.changeScoreBy(2)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.splash("Welcome to THE ROBO-MAZE")
game.splash("You're a robot and you have to beat this maze before the timer ends, can you do it?")
info.startCountdown(90)
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
mySprite2 = sprites.create(img`
    . . . . f f . . . f f . . . . . 
    . . . . f f . . . f f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f 7 f f 7 7 7 f f 7 f . . . 
    . . f 7 f f f f f f f f f f . . 
    . . f 7 f f 7 7 7 f f 7 7 f . . 
    . . f f f f f f f f f 7 7 f . . 
    . . . . f f . . . f f 7 7 f . . 
    . . . . f f . . . f f 7 7 f . . 
    . . . . f f . . . f f 7 7 f . . 
    . . . f f f f f f f f 7 7 f . . 
    . . . f f f 7 7 7 f f 7 7 f . . 
    . . . f f f 7 7 7 f f 7 7 f . . 
    . . . f f f f f f f f f f f . . 
    . . . . f f . . . f f . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(64, 37)
