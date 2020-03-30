const vid = document.createElement('video');
vid.autoplay = true;
vid.loop = true;
vid.src = "/img/eye-1.mp4";


function range(min, max, step=1) {
  const arr = [];
  for (var i=min;i<max;i+=step) {
    arr.push(i);
  }
  return arr;
}

// osc([3,4,5,8,10], 0.1, 1)
// .kaleid([40,20])
// .rotate(1, 1)
// .out(o1)
voronoi(range(0.5,2,0.25).fast(0.5),1,[3,4])
.pixelate(4,range(1,10))
//.rotate(() => Math.sin(time),0.05)
.out(o1)


s0.init(
  {
    src: vid,
    dynamic: true
  }
);

src(s0)
.scrollX(0.5, 0.25)
.repeat([2,4].fast(0.25))
//.color([0,2,0.5],[1,2],[1,0,0.5])
//.saturate(0.75)
.out(o4)

src(o4)
.modulateRepeat(o1,[1,5].fast(0.75))
.out(o0);

//render()
