namespace SpriteKind {
    export const projectile3 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
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
`
}
function hero () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.setPosition(78, 110)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setFlag(SpriteFlag.BounceOnWall, true)
}
function cloud () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f . . . f f f f f . 
. . . . f 1 1 f . f 1 1 1 1 1 f 
. . f f 1 1 1 1 f 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 10, 0)
    projectile2.setPosition(64, 7)
    projectile2.setFlag(SpriteFlag.BounceOnWall, true)
}
function score () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, -100)
})
function raindrop () {
	
}
function ball () {
	
}
let projectile3: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
ball()
raindrop()
hero()
cloud()
game.onUpdateInterval(1000, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 4 4 4 5 5 4 4 4 5 5 5 . . 
. 5 4 5 4 4 4 5 4 4 4 4 5 4 5 . 
5 4 4 5 5 4 2 4 4 2 4 2 4 4 5 5 
5 4 4 4 2 2 2 2 2 2 2 2 4 4 4 5 
5 4 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
5 4 2 2 2 4 2 2 4 2 4 2 4 4 5 5 
5 4 2 2 2 2 2 2 2 2 2 2 4 5 5 5 
5 4 2 2 4 2 2 2 2 2 2 2 2 2 4 5 
5 4 2 2 2 2 4 4 2 2 2 2 2 4 4 5 
5 4 5 4 2 2 2 4 2 2 2 2 4 5 5 5 
5 4 5 4 4 2 2 2 2 2 2 2 2 5 4 5 
5 4 4 4 5 4 4 2 2 2 2 2 2 4 4 5 
. 5 4 5 5 4 4 2 5 4 2 4 2 4 5 . 
. . 5 5 4 4 5 5 4 5 4 4 2 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
`, projectile2, 0, 50)
    projectile3.y += 3
    projectile3.vx += 0
})
