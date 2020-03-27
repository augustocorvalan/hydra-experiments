const Hydra = require("hydra-synth");

module.exports = initHydra = () => {
  // choose correct precision value
  let isIOS =
  (/iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
  !window.MSStream;
  let precisionValue = isIOS ? 'highp' : 'mediump';

  // set up Hydra Sketch
  window.sketch = new Hydra({
    // selects our canvas element in our DOM
    //canvas: document.getElementById("hydra-canvas"),

    //width: window.innerWidth,

    //height: window.innerHeight,

    pb: null,

    autoLoop: true,

    makeGlobal: true,
    // while this pollutes the global namespace
    // it makes it easier to copy and paste existing
    // hydra code

    numSources: 5,

    numOutputs: 5,

    detectAudio: false,
    // prevents microphone prompt
    // if your code doesn't use audio

    precision: precisionValue,

    enableStreamCapture: false
  });
}
