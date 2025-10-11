// "Learning: Chords"
// @by print('Mello World!')

setcpm(108/4)

$chords: chord("<Gbadd9*16 Abadd9*16 Dbadd9@2*32>").voicing().sound("triangle").att(0).dec(.3).coarse(8).orbit(2)

$bass: note("<[gb3 gb4] [ab3 ab4] [db3 db4]!2>!4").sound("square").gain(.4)

$bd: sound("bd!4").bank("tr909").duck(2).duckatt(.2)
$sd: sound("[- sd]!2").bank("tr909")
