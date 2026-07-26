---
type: cookbook
name: "Line segment control functions"
summary: "In some other examples (e.g., Linear fade-in/out of audio from a different course website) you can see how the line~ object interpolates sample-by-sample in a straight line from one value to another."
chapter: "MSP"
keywords: ["line~", "scope~"]
objects: ["*~", "cycle~", "ezdac~", "line~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linesegmentcontrolfunctions.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linesegmentcontrolfunctions.png"
---

# Line segment control functions

In some other examples (e.g., [Linear fade-in/out of audio](http://music.arts.uci.edu/dobrian/Music215W11/examples.htm#Ex05) from a different course website) you can see how the **line~** object interpolates sample-by-sample in a straight line from one value to another. You provide it with a pair of numbers­­––a destination value to go to, and an amount of time in which to get there––and it changes gradually (linearly) to that destination value in that amount of time.

This example shows that you can actually provide **line~** with a longer list of numbers, and it will break the list up into pairs of numbers––each pair representing a destination value and a ramp time––and will enact each pair one after the other. This results in a control shape that's made up of a series of line segments instead of a single straight line.

You can make a large variety of shapes with various lists. In this example we just use two shapes: one for the frequency of an oscillator and another for that oscillator's amplitude. (Notice that each of the two **line~** objects has a typed-in argument specifying its initial value. When audio is first turned on, the oscillator's frequency is 1000 Hz and its amplitude is 0, because those are the signal values being provided by the **line~** objects.) When you click on the button, you trigger both message boxes, sending the lists to the two **line~** objects.

The frequency goes from 1000 Hz to 2000 Hz (one octave higher) in 3000 milliseconds (3 seconds), then drops two octaves to 500 Hz in 500 ms (1/2 second), then returns to 1000 Hz in 1500 ms. The amplitude fades quickly up to .7 in just 50 ms, then drops by -12 dB to 0.175 in 1950 ms, then goes up about 9 dB to 0.5 in 1000 ms (all that in the same amount of time that the frequency is going up one octave), then goes up another 6 dB to 0.99 in 500 ms, fades down about -40 dB to 0.01 in 1450 ms, and then goes completely to 0 in the last 50 ms. These two "envelopes"––a frequency shape and an amplitude shape––each take the same total amount of time (5 seconds) but are not identical. (N.B. Because the **scope~** objects need to gather audio samples before drawing them, the visual display lags somewhat behind what you hear.)

## Objects used

`scope~` ×2, `line~` ×2, `*~`, `cycle~`, `ezdac~`

*Patch contains 20 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linesegmentcontrolfunctions.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linesegmentcontrolfunctions.png`
