const vid = document.createElement('video');
vid.autoplay = true;
vid.loop = true;
vid.src = "/img/eye-1.mp4";


osc([3,4,5,8,10], 0.1, 1)
.kaleid([40,20])
.rotate(1, 1)
.out(o1)


s0.init(
  {
    src: vid,
    dynamic: true
  }
);

src(s0)
.scrollX(0, 0.05)
.repeat([2,4])
.color([0,2,0.5],[1,2],[1,0,0.5])
.out(o4)

src(o4)
.modulate(o1)
.out(o0);

//render()
