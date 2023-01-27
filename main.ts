input.onGesture(Gesture.TiltRight, function () {
    led.plot(2, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(4, 0)
    led.unplot(2, 0)
})
input.onGesture(Gesture.Shake, function () {
    led.plot(3, 2)
})
for (let index = 0; index < 4; index++) {
    music.playMelody("D E F G A G B A ", 120)
}
