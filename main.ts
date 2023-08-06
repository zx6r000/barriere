input.onButtonPressed(Button.A, function () {
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
    Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Short, 2)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
    Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Long, 1)
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    texte = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (texte.includes("ouvert")) {
        Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
        Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Short, 2)
        basic.showIcon(IconNames.Happy)
    } else {
        if (texte.includes("ferme")) {
            Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
            Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Long, 1)
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showString(texte)
        }
    }
})
let texte = ""
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
basic.forever(function () {
	
})
