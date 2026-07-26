---
type: cookbook
name: "Amplitude envelope with the function object"
summary: "Each MSP object (each object that has signal input and/or output) is always producing signal as long as audio is turned on."
chapter: "Max"
keywords: ["function", "line~", "envelope", "window", "amplitude"]
objects: ["*~", "ezdac~", "function", "gain~", "line~", "saw~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/amplitudeenvelope.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/amplitudeenvelope3.png"
---

# Amplitude envelope with the function object

Each MSP object (each object that has signal input and/or output) is always producing signal as long as audio is turned on. For example, signal generators like **cycle~** (sinusoidal wave generator) and **saw~** (band-limited sawtooth wave generator) are always producing a full-amplitude wave. You control the amplitude of that wave with multiplication, using **\*~** or some other object that performs a multiplication internally (such as **gain~**). Multiplication by a value greater than 1 increases the amplitude (amplification), and multiplication by a value between 0 and 1 decreases the amplitude (attenuation). (Multiplication by a negative number has the same sort of effect, while also inverting the signal about the x-axis.) Multiplication by 0 completely suppresses the signal (silence). In that last case, the signal generator is still working just as hard, producing its full amplitude signal, but the multiplication by 0 converts every sample to 0.

You can think of every individual sound as being surrounded by silence. You could imagine that, as in MSP, sound is always present, but during the silence its amplitude is 0 (the sound is being multiplied by 0), and when the sound is audible it is being multiplied by 1 or by some other nonzero number. Thus, the sound is audible only when its amplitude is being controlled by a nonzero value––a conceptual "window" is opened on the sound allowing it through––and the rest of the time it's being multiplied by 0 and the conceptual window is closed. This idea of a "window"––a period of nonzero values surrounded by 0 before and after––is an important concept in digital music and in digital signal processing. A sound that is off (0), then is instantaneously switched on (1), and then is later instantaneously turned off again (0) has been windowed with a rectangular-shaped function. More commonly in music software we use a window shape that is not exactly rectangular, such as a trapezoidal window with tapered ends, to avoid clicks.

This example demonstrates the use of a **function** object to create a trapezoidal window signal coming out of the **line~** object to control the amplitude of a sawtooth oscillator. Each time **function** receives a *bang*, it sends out a list that says, "Go to 1 in 50 milliseconds, stay at 1 for 900 milliseconds, then go to 0 in 50 milliseconds." The changing values from **line~** are used as the multiplier controlling the amplitude of the oscillator, opening a 1-second window on the sound.

The duration of that window can be changed simply by sending a *setdomain* message to **function**. Note that the duration of each segment of the function is time-scaled proportional to the domain specified, so the fade-in and fade-out tapered ends of the function, which are 50 milliseconds initially, would last only 5 milliseconds if the duration of the window were shortened to 100 ms, and would last 500 milliseconds if the total duration (the domain) were set to 10,000 ms.

## Objects used

`line~`, `function`, `*~`, `gain~`, `ezdac~`, `saw~`

*Patch contains 17 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/amplitudeenvelope.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/amplitudeenvelope3.png`
