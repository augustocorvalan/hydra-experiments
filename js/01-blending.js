


triangle = () => shape(3,   () => {
    if (mouse.x > 500) return 0.5
    return 0.05
  })
.scrollX(0, [0.006, -0.006].fast(0.05))


osc([75,80,60].fast(0.25), 0)
.thresh()
.colorama(100)
.kaleid(
  () => {
    if (mouse.x > 1000) return 50
    return 1
  }
)
.diff(triangle())
.modulate(osc(
  () => {
    if (mouse.x > 1000) return 50
    return 1
  }
))
.out()



// shape(4,[0.4, 0.5, 0.7].fast(0.04))
// .repeat(n,n)
// .colorama(({time}) => Math.sin(time/100))
// //.modulateScrollX(osc(50,0.04),0.1,0)
// .scrollY(0, 0.04)
// //.scrollY(0, ({time}) => Math.sin(time/500))
// .diff(triangle())
// .out()
