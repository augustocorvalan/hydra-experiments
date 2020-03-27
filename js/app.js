const initHydra = require('./hydraInit');

initHydra();

// once hydra instance is created
// you can then copy / paste exisiting hydra sketch

// osc().out(o0);

voronoi(2, 0.05, 1)
  //.modulate(voronoi(12, 0.1, 2))
  .out(o0);

render(o0);

console.log(sketch);
