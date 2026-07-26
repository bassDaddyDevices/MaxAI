---
type: cookbook
name: "Very low frequency modulation for gradual change"
summary: "This example combines seven pre-recorded saxophone sounds, slowly modulating several aspects of their playback to create an ever-changing mix."
chapter: "MSP"
keywords: ["cycle~", "dac~", "deferlow", "inlet", "live.gain~", "loadbang", "outlet", "patcher", "phasor~", "pow~", "sfplay~", "triangle~", "*~", "+~", "AIFF file", "WAVE file"]
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sevensaxessinging.png"
---

# Very low frequency modulation for gradual change

This example combines seven pre-recorded saxophone sounds, slowly modulating several aspects of their playback to create an ever-changing mix.

N.B. In order for this example to work properly, you will need to have the seven relatively short sound files saved in the same folder as you save this example patch.

The patch demonstrates the use of the **patcher** object to encapsulate each particular task of the program. This makes for a tidier program overall, in which you can easily see how each process is working.

The patch also demonstrates the use of extremely low frequency oscillators (**cycle~** objects) to very gradually modulate aspects of the sound. The oscillators are used to modulate *playback* *speed*, *amplitude*, and *stereo panning* of each of the seven sounds being played simultaneously. The low-frequency oscillators (LFOs) are tuned to *very* low frequencies ranging from 1/4 Hz to 1/187 Hz. The oscillator rates were chosen based on inversions of the mutually prime numbers 2, 3, 5, 7, 11, 13, and 17, so that the overall sound almost never repeats, giving a constantly-changing variety of composite sound. This sort of extremely low-frequency change can be thought of as a way to shape sonic and musical form over any period of time, even over several minutes.

I won’t try to explain all the details of the way the whole program works, but you can learn about its construction by switching out of Presentation Mode and double-clicking on **patcher** objects to see their contents.

## Files

- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sevensaxessinging.png`
