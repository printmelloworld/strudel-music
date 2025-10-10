// "Learning: consts"
// @by print('Mello World!')

const songscale = "d:minor"

const phrase1 = [
  "{0 1 4 5 6 7}%16",
  "{1 4 6 8 9 11}%16"
]

$drum: sound("bd!4, [- sd]!2").bank("tr909").gain(.4)
$hh: sound("hh!16").bank("tr909").gain(.1)


$inst1: n(pick(phrase1, "<0 1>")).scale(songscale).slow(2).sound("supersaw")
  .lpf(1000)
  .lpq(10)
  .adsr("0:.3:.4:.2")
  .room(.6).size(4)
  // .delay(".1:.75:.6")
  ._punchcard()
