// "Learn: Different pattern making methods"
// @by print('Mello World!')

$: stack(
// Mini Notation
note("f5 [f5 a5] f5 <f4 a5>").sound("gm_xylophone").gain(0.7),
//Struct
note("g2").struct("x - x - x - x - x x x x - - x x").sound("gm_xylophone").gain(0.3),
// Beat
note("a6").beat("0,7,9",16).sound("gm_xylophone").gain(0.6),
//Euclid
note("g3").euclid(5,16).sound("gm_xylophone").gain(0.5),
)
