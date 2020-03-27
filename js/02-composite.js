triangle = () => shape(3,   () => {
    if (mouse.x > 500) return 0.5
    return 0.05
  })
.scrollX(0, [0.006, -0.006].fast(0.05))
.out(o1)

oscill = () => osc([75,80,60].fast(0.25), 0)
.thresh()
.colorama(100)
.out(o2)

triangle()
oscill()

src(o1)
//.add(o1)
.mult(o1)
//.diff(o1)
//.mask(o1)
//.blend(o1)
.modulate(o2)
.out(o0);

render(o0);
