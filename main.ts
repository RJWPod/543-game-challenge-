input.onButtonPressed(Button.A, function () {
    Player_Variable += 1
    if (Player_Variable == 1) {
    	
    }
    while (true) {
        led.unplot(0, 0)
        basic.pause(10)
        led.plot(0, 0)
    }
})
let Player_Variable = 0
Player_Variable = 0
for (let X = 0; X <= 4; X++) {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(X - Y, Y)
    }
}
basic.forever(function () {
	
})
