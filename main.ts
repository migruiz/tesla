radio.onReceivedString(function (receivedString) {
    receivedCommand = receivedString
    if (receivedCommand == "STOP") {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
    } else if (receivedCommand == "FORWARD") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 71)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 71)
    } else if (receivedCommand == "BACKWARDS") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 71)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 61)
    } else if (receivedCommand == "RIGHT") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 43)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 43)
    } else if (receivedCommand == "LEFT") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 43)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 43)
    }
})
let receivedCommand = ""
radio.setGroup(1)
basic.forever(function () {
    if (receivedCommand == "STOP") {
        basic.showIcon(IconNames.Square)
    } else if (receivedCommand == "FORWARD") {
        basic.showArrow(ArrowNames.North)
    } else if (receivedCommand == "BACKWARDS") {
        basic.showArrow(ArrowNames.South)
    } else if (receivedCommand == "RIGHT") {
        basic.showArrow(ArrowNames.East)
    } else if (receivedCommand == "LEFT") {
        basic.showArrow(ArrowNames.West)
    }
})
