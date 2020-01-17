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
sprites.onOverlap(SpriteKind.ammo, SpriteKind.poop, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
function hero () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . f f 5 5 5 5 f f . . . 
. . . . f 5 5 5 5 5 5 5 5 f . . 
. . . f 5 f f f 5 5 f f f 5 f . 
. . . f 5 f f f 5 5 f f f 5 f . 
. . f 5 5 f f f 5 5 f f f 5 5 f 
. . f 5 5 5 5 5 5 5 5 5 5 5 5 f 
. . f 5 5 5 5 5 5 5 5 5 5 5 5 f 
. . f 5 5 5 5 5 5 5 5 5 5 5 5 f 
. . . f 5 f f f f f f f f 5 f . 
. . . f 5 5 5 5 5 5 5 5 5 5 f . 
. . . . f 5 5 5 5 5 5 5 5 f . . 
. . . . . f f 5 5 5 5 f f . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.setPosition(78, 110)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setFlag(SpriteFlag.BounceOnWall, true)
}
function cloud () {
    cloud1 = sprites.createProjectileFromSide(img`
. . . . . . . f f . . . . . . . 
. . . . . . f 7 7 f . . . . . . 
. . . . f . f 7 7 f . . . . . . 
. . . f 7 f f f 7 7 f . . f . . 
. . . f 7 f f 7 7 7 f . f 7 f . 
. . . f 7 f f 7 7 7 f f 7 7 f . 
. . . f 7 f f 7 7 f f 7 7 7 f . 
. . . f 7 f f 7 7 7 f f f f . . 
. . . f 7 7 f 7 7 7 f . . . . . 
. . . f 7 7 f f 7 7 f . . . . . 
. . . f 7 7 f 7 7 7 f . . . . . 
. . . . f f f 7 7 7 f . . . . . 
. . . . . . f 7 7 f f . . . . . 
. . . . . . f 7 7 7 f . . . . . 
. . . . . . f 7 7 7 f . . . . . 
. . . . . . . f f f . . . . . . 
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
	
})
sprites.onDestroyed(SpriteKind.poop, function (sprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function CLOUD_2 () {
    CLOUD123 = sprites.createProjectileFromSide(img`
. . . . . . . f f . . . . . . . 
. . . . . . f 7 7 f . . . . . . 
. . . . f . f 7 7 f . . . . . . 
. . . f 7 f f f 7 7 f . . f . . 
. . . f 7 f f 7 7 7 f . f 7 f . 
. . . f 7 f f 7 7 7 f f 7 7 f . 
. . . f 7 f f 7 7 f f 7 7 7 f . 
. . . f 7 f f 7 7 7 f f f f . . 
. . . f 7 7 f 7 7 7 f . . . . . 
. . . f 7 7 f f 7 7 f . . . . . 
. . . f 7 7 f 7 7 7 f . . . . . 
. . . . f f f 7 7 7 f . . . . . 
. . . . . . f 7 7 f f . . . . . 
. . . . . . f 7 7 7 f . . . . . 
. . . . . . f 7 7 7 f . . . . . 
. . . . . . . f f f . . . . . . 
`, -10, 0)
    CLOUD123.setPosition(153, 7)
    CLOUD123.setFlag(SpriteFlag.BounceOnWall, true)
    CLOUD123.setKind(SpriteKind.poop)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
function raindrop () {
    scene.setBackgroundColor(14)
}
function ball () {
	
}
let PROJECTILE5: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let CLOUD123: Sprite = null
let cloud1: Sprite = null
let mySprite: Sprite = null
CLOUD_2()
whatever()
ball()
raindrop()
hero()
cloud()
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . b . . . . . . . 
. . . . . . . . b . . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, -100)
    projectile.setKind(SpriteKind.ammo)
})
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 4 4 4 4 4 4 5 5 . . 
. 5 5 5 4 4 2 2 4 4 4 4 4 5 5 . 
. 5 5 4 4 4 2 5 2 2 4 5 4 4 5 . 
5 5 5 4 5 2 2 4 2 2 4 2 4 4 5 5 
5 5 4 4 2 2 2 2 2 2 2 2 2 4 5 5 
5 5 4 4 4 2 2 4 2 2 4 2 2 5 4 5 
5 5 4 4 2 2 2 2 2 2 2 2 4 5 4 5 
5 5 4 5 4 2 2 2 2 2 2 4 4 4 4 5 
5 5 5 4 5 4 2 2 4 4 2 2 4 4 4 5 
. 5 5 4 4 4 4 5 4 4 4 4 4 4 5 . 
. 5 5 5 4 4 5 4 4 5 5 4 4 5 5 . 
. . 5 5 5 4 4 4 4 4 4 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
`, cloud1, 0, 45)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.y += 0
    projectile2.vx += 0
})
game.onUpdateInterval(1000, function () {
    PROJECTILE5 = sprites.createProjectileFromSprite(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 4 4 4 4 4 4 5 5 . . 
. 5 5 5 4 4 2 2 4 4 4 4 4 5 5 . 
. 5 5 4 4 4 2 5 2 2 4 5 4 4 5 . 
5 5 5 4 5 2 2 4 2 2 4 2 4 4 5 5 
5 5 4 4 2 2 2 2 2 2 2 2 2 4 5 5 
5 5 4 4 4 2 2 4 2 2 4 2 2 5 4 5 
5 5 4 4 2 2 2 2 2 2 2 2 4 5 4 5 
5 5 4 5 4 2 2 2 2 2 2 4 4 4 4 5 
5 5 5 4 5 4 2 2 4 4 2 2 4 4 4 5 
. 5 5 4 4 4 4 5 4 4 4 4 4 4 5 . 
. 5 5 5 4 4 5 4 4 5 5 4 4 5 5 . 
. . 5 5 5 4 4 4 4 4 4 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
`, CLOUD123, 0, 45)
    PROJECTILE5.setKind(SpriteKind.Enemy)
    PROJECTILE5.y += 0
    PROJECTILE5.vx += 0
})
