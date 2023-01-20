input.onGesture(Gesture.TiltRight, function () {
    led.plot(1, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(3, 0)
    led.unplot(1, 0)
})
input.onGesture(Gesture.Shake, function () {
    led.plot(3, 0)
})
music.playMelody("D E F G A G B A ", 120)
