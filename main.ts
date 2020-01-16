namespace SpriteKind {
    export const projectile3 = SpriteKind.create()
    export const ammo = SpriteKind.create()
    export const poop = SpriteKind.create()
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
    cloud1 = sprites.createProjectileFromSide(img`
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
    cloud1.setPosition(4, 7)
    cloud1.setFlag(SpriteFlag.BounceOnWall, true)
    cloud1.setKind(SpriteKind.poop)
}
function score () {
	
}
function whatever () {
	
}
sprites.onOverlap(SpriteKind.poop, SpriteKind.ammo, function (sprite, otherSprite) {
    game.over(true, effects.slash)
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
    projectile.setKind(SpriteKind.ammo)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
function raindrop () {
    scene.setBackgroundColor(14)
}
function ball () {
	
}
let projectile2: Sprite = null
let projectile: Sprite = null
let cloud1: Sprite = null
let mySprite: Sprite = null
whatever()
ball()
raindrop()
hero()
cloud()
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
5 . 5 . . 8 8 8 8 8 8 . 5 . 5 . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
5 . . . . . . . . . . . . . 5 . 
. 5 . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . 5 . 
. 5 . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . 5 . 
. 5 . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . 5 . 
. 5 . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . 5 . 
. 5 . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . 5 . 
. . . . . . . . . . . . . . . 5 
5 . . . 5 . 5 . 5 . 5 . 5 . 5 . 
. 5 . 5 . 8 8 8 8 8 8 . . 5 . 5 
`, cloud1, 0, 45)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.y += 0
    projectile2.vx += 0
})
