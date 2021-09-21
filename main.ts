let Cristi_speranta = sprites.create(img`
    . . . . 2 2 f f 2 2 . . . . . . 
    . . . . f 1 8 8 8 f . . . . . . 
    . . . . f 8 8 8 8 f . . . . . . 
    5 2 2 2 f 2 2 2 2 f 2 2 2 . . . 
    5 2 2 2 2 f 5 5 f 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 . 2 2 . . . 
    . . . . 2 2 2 2 2 2 . 2 2 . . . 
    . . . . 2 2 2 2 2 2 . 5 5 . . . 
    . . . . f f 5 5 f f . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 5 5 . . 5 5 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cristi_speranta)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Cristi_speranta)
let Stone_golem = sprites.create(img`
    . . . . . . 5 a a 5 . . . . . . 
    . . . . . . a f f a . . . . . . 
    a a a 7 a 7 f a a f a a a b a a 
    b . 7 7 a 7 a a a a a b b b . b 
    b . 7 a a 7 a a a a a a a a . b 
    b . 7 a a 7 7 a a a a a a a . b 
    b . a a a a 7 b b b b b b a . b 
    a . a a a a 7 a a a a a b a . b 
    f . a a a a a a a a a b b a . a 
    . . a a a a a a a a a a b a . f 
    . . a a b a . . . . a a a a . . 
    . . a b b a . . . . a 7 a a . . 
    . . a b a a . . . . 7 7 a a . . 
    . . a b a a . . . . 7 a a a . . 
    . . a a a a . . . . a 7 7 a . . 
    . . f f f f . . . . f f f f . . 
    `, SpriteKind.Enemy)
Stone_golem.follow(Cristi_speranta)
let cavegurdian = sprites.create(img`
    . . f . . . . . . . . . f . . . 
    . . e . . . . . . . . . e . . . 
    e e e . . . . . . . . . e . . . 
    e . . . . . . . . . . . e e . . 
    e . e e e e e e e e e . . e . . 
    e . e 5 5 f f f 5 5 e e e e . f 
    e e e 5 5 f f f 5 5 e . . . e e 
    . e e e e e f e e e e e e e e . 
    . . e f 1 f 1 f 1 f e . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e . e . . . e . e . . . . . 
    . . e . e . . . e . e e . . . . 
    . e e . e . . . e e . e . . . . 
    . e . e e . . . . e . e . . . . 
    . f . f . . . . . f . f . . . . 
    `, SpriteKind.Enemy)
cavegurdian.follow(Cristi_speranta)
let CristalCrowler = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . c c c 7 c . . . . . 
    . . . 2 c c c 2 2 2 c c c 2 . . 
    . . . . . . c c c c 7 . . . . . 
    . c c c 7 c 2 c c c 2 c c c c . 
    . c c . 7 c c 2 f 2 c c . c c . 
    . c c . c 7 7 c c c c c . c c . 
    . c c . c c c 7 c 7 c c . f 2 . 
    . f 2 . c 7 7 c c c 7 c c . . . 
    . . . . c 7 c . . c 7 c . c . . 
    . . . . c c 7 . . c 7 c . c . . 
    . . . . c c c . . c c 7 . . c . 
    . . . . c c c . . c 7 c . . . 2 
    . . . . c c c . . 7 c c . . . . 
    . . . . c c c . . c c c . . . . 
    . . . . 2 f 2 . . 2 f 2 . . . . 
    `, SpriteKind.Enemy)
CristalCrowler.follow(Cristi_speranta)
