input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    if (true) {
        for (let index = 0; index < 4; index++) {
            led.plot(2, 0)
        }
    }
    
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    led.unplot(4, 0)
    led.unplot(2, 0)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    led.plot(7, 2)
})
for (let index2 = 0; index2 < 4; index2++) {
    music.playMelody("D E F G A G B A ", 120)
}
