
function getVideo(src, source) {
  const vid = document.createElement('video');
  vid.autoplay = true;
  vid.loop = true;
  vid.src = src;
  source.init({
    src: vid,
    dynamic: true
  });
  return source;
}

// Video Feedback

getVideo('/img/flower-1.mp4', s0);


bpm(10)
src(s0)
.scale(0.8)
.mult(src(s0).scale(0.9))
.modulate(
  voronoi([1,2,0.5],0.5, () => Math.tan(time/2))
)
.out(o0)
