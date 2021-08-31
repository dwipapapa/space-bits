namespace SpriteKind {
    export const Bals = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bals, function (sprite, otherSprite) {
    otherSprite.bottom = sprite.top
    otherSprite.vy = 0 - otherSprite.vy
})
sprites.onOverlap(SpriteKind.Bals, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "l", -1)
    if (sprite.x < otherSprite.x) {
        otherSprite.vy = 0 - otherSprite.vy
        sprite.right = otherSprite.left
    } else if (sprite.x > otherSprite.x) {
        otherSprite.vy = 0 - otherSprite.vy
        sprite.left = otherSprite.right
    } else if (sprite.y < otherSprite.y) {
        otherSprite.vy = 0 - otherSprite.vy
        sprite.bottom = otherSprite.top
    } else if (sprite.y > otherSprite.y) {
        otherSprite.vy = 0 - otherSprite.vy
        sprite.top = otherSprite.bottom
    }
    if (sprites.readDataNumber(otherSprite, "l") == 0) {
        otherSprite.destroy()
    }
})
scene.onOverlapTile(SpriteKind.Bals, assets.tile`myTile0`, function (sprite, location) {
    music.setVolume(0)
    game.over(false)
})
let Blocker: Sprite = null
tiles.setSmallTilemap(tilemap`level3`)
let mySprite = sprites.create(img`
    . c c c c c c c c c c c c c c . 
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    . c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 110)
controller.moveSprite(mySprite, 100, 0)
let Ball = sprites.create(img`
    . . . . . . . . 
    . . c c c c . . 
    . c b b b b c . 
    . c b b b b c . 
    . c b b b b c . 
    . c b b b b c . 
    . . c c c c . . 
    . . . . . . . . 
    `, SpriteKind.Bals)
Ball.setVelocity(randint(-100, 100), randint(-100, 100))
Ball.setBounceOnWall(true)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    Blocker = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Enemy)
    sprites.setDataNumber(Blocker, "l", 1)
    tiles.placeOnTile(Blocker, value)
    Blocker.image.fill(randint(1, 14))
    Blocker.image.drawRect(0, 0, 8, 8, 15)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
