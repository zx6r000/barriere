input.onSound(DetectedSound.Loud, function () {
    ouvre()
    basic.pause(2000)
    ferme()
})
input.onButtonPressed(Button.A, function () {
    ouvre()
})
function ouvre () {
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
    Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Short, 2)
    basic.showIcon(IconNames.Happy)
}
function ferme () {
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
    Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Long, 1)
    basic.showIcon(IconNames.Sad)
}
input.onButtonPressed(Button.B, function () {
    ferme()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    texte = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (texte.includes("ouvert")) {
        ouvre()
    } else {
        if (texte.includes("ferme")) {
            ferme()
        } else {
            if (texte.includes("auto")) {
                ouvre()
                basic.pause(3000)
                ferme()
            } else {
            	
            }
        }
    }
})
let texte = ""
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
basic.forever(function () {
	
})
