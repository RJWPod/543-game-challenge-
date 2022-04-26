let Player_Variable = 0
for (let X = 0; X <= 4; X++) {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(X - Y, Y)
    }
}
basic.forever(function () {
	
})
