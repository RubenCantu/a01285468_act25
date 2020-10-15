input.onPinPressed(TouchPin.P0, function () {
    y = 0
    x = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        x += -1
        basic.pause(500)
        y += 1
    }
})
input.onButtonPressed(Button.A, function () {
    Counter = 5
    while (Counter >= 0) {
        basic.showNumber(Counter)
        Counter += -1
    }
    music.playMelody("A G A B A G B B ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
let Counter = 0
let x = 0
let y = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
