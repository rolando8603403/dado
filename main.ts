input.onGesture(Gesture.Shake, function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showNumber(randint(1, 6))
    }
})
