radio.setGroup(1)
radio.setTransmitPower(7)
basic.showString("sensor")
basic.forever(function () {
    radio.sendValue("sensor", Math.abs(input.acceleration(Dimension.Y)) + Math.abs(input.acceleration(Dimension.X)))
    led.plotBarGraph(
    Math.abs(input.acceleration(Dimension.Y)) + Math.abs(input.acceleration(Dimension.X)),
    1000
    )
})
