def on_gesture_tilt_right():
    led.plot(2, 0)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_tilt_left():
    led.unplot(4, 0)
    led.unplot(2, 0)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_shake():
    led.plot(3, 0)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

for index in range(4):
    music.play_melody("D E F G A G B A ", 120)