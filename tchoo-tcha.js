// "Tchoo Tcha Tchoo Tcha"
// @by print('Mello World!')

setcpm(166/4)

const songscale = "g3:minor"
const bank_drum = "tr909"

$beat:
s("bd sd [ - bd ] sd").bank(bank_drum)
.room(.2).size(1.1)
.dist(2).postgain(.4)

$hh:
s("hh!8").bank(bank_drum).gain(.5)
.dec(.03)

$bass:
n("<-7!8 -3!2 -2!1 -6!1>!8")
.s("supersaw!8").scale(songscale)
.coarse(8)
.dec(0.3)
.gain(1.2)

$bassintense:
n(
"-7!16"
// .add("0 3 5 7")
 )
.sound("square").scale(songscale)
.dec(.1)
.gain(.8)
.lpf(1200)

$pluck:
n("[0 -3 -4 -6]!2"
.add("<0!4 7 7 3 2>") //phrase
 )
.sound("triangle").scale(songscale)
.dec(.07)
.lpf(1100)
.dist(2).postgain(.8)
._pianoroll({labels:1})
