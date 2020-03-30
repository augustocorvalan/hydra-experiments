bpm(20)
const createFeedback = () => src(o0)
  .scale(0.9)
  .rotate([0, 0, 0.01, -0.01])

const increaseWithTime = () => () => {
  return Math.tan(time)
}


// osc(3, 0.1, 1)
// .hue()
// .saturate([10,20])
// .kaleid([1,4,100].fast(0.25))
// .rotate(10, 0.03)
// .pixelate([10, 5], [100, 10])
// .out(o1)


osc([10,5], 0.1, [5,11])
.rotate(10,0.03)
.out(o1)

shape([2,3,4],0.8)
.modulateRotate(osc(1))
.diff(createFeedback())
.add(src(o1))
.out(o0)
