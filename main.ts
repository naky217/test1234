input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    led.plot(2, 0)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    led.unplot(3, 0)
    led.unplot(2, 0)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    led.plot(3, 0)
})
music.playMelody("D E F G A G B A ", 120)
