var file;
var recording = false;
var buffer = "";
var sampleCount = 0;

function onAccel(a) {
  if (!recording || !file) return;
  
  buffer += getTime().toFixed(3) + "," + 
            a.x.toFixed(3) + "," + 
            a.y.toFixed(3) + "," + 
            a.z.toFixed(3) + "\n";
  sampleCount++;

  // Flush to flash every ~25 samples (~2 seconds at 12.5 Hz)
  if (sampleCount % 25 === 0) {
    file.write(buffer);
    buffer = "";
    drawStatus("Recording...\nSamples: " + sampleCount);
  }
}

function drawStatus(text) {
  g.clear();
  g.setFont("Vector", 18);
  g.setFontAlign(0, 0);
  g.drawString(text, g.getWidth() / 2, g.getHeight() / 2);
}

setWatch(function() {
  recording = !recording;
  if (recording) {
    buffer = "";
    sampleCount = 0;
    file = require("Storage").open("accel.csv", "w");
    file.write("Time,X,Y,Z\n");
    Bangle.on('accel', onAccel);
    drawStatus("Recording...\nSamples: 0");
  } else {
    Bangle.removeListener('accel', onAccel);
    if (buffer.length > 0 && file) {
      file.write(buffer);
      buffer = "";
    }
    file = undefined;
    drawStatus("Saved " + sampleCount + "\nto accel.csv");
  }
}, BTN, {repeat: true, edge: "rising", debounce: 50});

// Save remaining buffered data if the app exits mid-recording
E.on('kill', function() {
  if (recording && buffer.length > 0 && file) {
    file.write(buffer);
  }
});

drawStatus("Press BTN to Start");
