# 🎵 Music Visualiser

A browser-based, audio-reactive visualiser built with **p5.js** and **p5.sound**. Originally developed as university coursework on top of a provided base template, then extended with several original visualisations, a custom beat-detection system, and a redesigned mouse-driven GUI.

🚀 **[Live Demo](https://kotrashh.github.io/musicVis/)**

---

## 📌 Overview

The app analyses an audio track in real time using `p5.FFT` (spectral energy, waveform, and per-band energy such as bass/treble) and `p5.Amplitude`, using that data to drive a set of selectable visualisations. Visualisations can be switched via number keys or the on-screen menu, and the window can be toggled to fullscreen mode.

---

## 🎨 Visualisations

| Visualisation | Description |
| :--- | :--- |
| **Spectrum** | Horizontal frequency bars coloured from green to red by amplitude |
| **Wavepattern** | Raw waveform plotted across the screen |
| **Needles** | Four dial-style meters for bass, low-mid, high-mid, and treble |
| **Snake** | Rotating blocks and a Perlin-noise line reacting to treble/bass |
| **Particles** | A ring of particles whose size and radius react to bass/low-mid energy |
| **Bars** | A scrolling bar chart of recent average energy |
| **Fireworks** | Beat-detection-driven particle explosions, one per detected beat |
| **Ellipsoid** | A rotating 3D ellipsoid whose shape and detail respond to bass/treble |
| **Cube** | A rotating 3D cube with six independently coloured, audio-reactive faces |

---

## 📁 Project Structure

```text
├── index.html
├── sketch.js              # setup/draw loop, FFT & amplitude instantiation
├── controlsAndInput.js    # playback button + clickable/keyboard visualisation menu
├── playbackButton.js
├── visualisations.js      # container managing available visualisations
├── spectrum.js
├── wavepattern.js
├── needles.js
├── snake.js
├── particles.js
├── bars.js
├── beatDetect.js          # rolling-average beat detection
├── fireworks.js
├── firework.js
├── particle.js
├── ellipsoid.js
├── cube.js
├── lib/                   # p5.js, p5.sound libraries
└── assets/                # audio track
