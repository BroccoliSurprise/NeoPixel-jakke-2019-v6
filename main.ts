/**
 * Dette er kildekoden til "microbitjakken", en dressjakke laget til Halloween 2019 med neopixel-lys i ermene og langs fronten.
 * 
 * De ulike funksjonene i Modeshift er ulike fargemønster jeg har laget. (Blå og lilla roterings-mønster, "ild", "lyn" og blåtone-regbue.)
 * 
 * Designet for å kunne fjernstyres av en annen microbit (i lommen, eller på en hanske)
 * 
 * Jakken kostet 100kr på Fretex, neopixlene kostet 700 på Kjell&Co :D
 * 
 * Planen er å lage en ny jakke av teip med powerbank-batteri og NodeMCU-kontroll, som kan styres via mobilen.
 */
function FLASH () {
    for (let index = 0; index < 4; index++) {
        blinken = randint(10, 100)
        strip.clear()
        arm.clear()
        strip.showColor(neopixel.rgb(blinken, blinken, blinken / 5))
        arm.showColor(neopixel.rgb(blinken, blinken, blinken / 5))
        strip.show()
        arm.show()
        basic.pause(randint(20, 30))
        strip.clear()
        arm.clear()
        strip.show()
        arm.show()
        basic.pause(randint(40, 90))
    }
    basic.pause(1000 * randint(1, 3))
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        modus += 1
    } else {
        modus += -1
    }
    if (modus > 6 || modus < 0) {
        modus = 0
    } else {
    	
    }
    basic.pause(100)
    MODESHIFT()
})
function downfall () {
    strip.rotate(1)
    arm.rotate(1)
    strip.show()
    arm.show()
    basic.pause(24)
}
function ColNEOARM () {
    arm.clear()
    arm.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    arm.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    arm.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    arm.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    arm.setPixelColor(7, neopixel.colors(NeoPixelColors.Purple))
    arm.setPixelColor(13, neopixel.colors(NeoPixelColors.Purple))
    arm.show()
}
function ColNEON () {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Purple))
    strip.show()
}
function UpDrop () {
    strip.rotate(-1)
    arm.rotate(-1)
    strip.show()
    arm.show()
    basic.pause(12)
}
input.onButtonPressed(Button.AB, function () {
    modus += 1
    if (modus > 6 || modus < 0) {
        modus = 0
    } else {
    	
    }
    basic.pause(100)
    MODESHIFT()
})
function COLRGBLUE () {
    strip.clear()
    arm.clear()
    strip.showRainbow(140, 220)
    arm.showRainbow(140, 220)
    strip.show()
    arm.show()
}
function MODESHIFT () {
    if (modus == 5) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        COLRGB()
    } else if (modus == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        ColNEOARM()
        ColNEON()
    } else if (modus == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (modus == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (modus == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (modus == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        COLRGBLUE()
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            . . . . .
            `)
    }
}
function COLRGB () {
    strip.clear()
    arm.clear()
    strip.showRainbow(1, 360)
    arm.showRainbow(1, 360)
    strip.show()
    arm.show()
}
function downspin () {
    strip.rotate(1)
    arm.rotate(1)
    strip.show()
    arm.show()
    basic.pause(42)
}
function BURN () {
    strip.showColor(neopixel.rgb(randint(10, 100), randint(0, 20), 0))
    arm.showColor(neopixel.rgb(randint(10, 100), randint(0, 20), 0))
    strip.show()
    arm.show()
    basic.pause(50)
}
let blinken = 0
let modus = 0
let arm: neopixel.Strip = null
let strip: neopixel.Strip = null
radio.setGroup(8)
strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
arm = neopixel.create(DigitalPin.P0, 18, NeoPixelMode.RGB)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `)
led.setBrightness(5)
strip.setBrightness(155)
arm.setBrightness(50)
modus = 0
basic.forever(function () {
    if (modus == 0) {
        strip.clear()
        arm.clear()
        strip.show()
        arm.show()
    } else if (modus == 1) {
        UpDrop()
    } else if (modus == 2) {
        BURN()
    } else if (modus == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        arm.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (modus == 4) {
        FLASH()
    } else if (modus == 6) {
        downfall()
    } else {
        downspin()
    }
})
