---
type: cookbook
name: "Calculating Doppler shift for moving virtual sound sources"
summary: "A stereo spatialization effect can be achieved using x,y coordinates to determine intensity and delay for the sound at each speaker at each moment."
chapter: "MSP"
keywords: ["Doppler", "atan~", "line~", "lores~", "sqrt~", "tapin~", "tapout~", "delay"]
objects: ["!-~", "!/~", "*~", "+~", "/~", "atan2~", "cycle~", "dac~", "line~", "lores~", "phasor~", "pink~", "sig~", "sqrt~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/dopplerexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dopplerexample.png"
---

# Calculating Doppler shift for moving virtual sound sources

A stereo spatialization effect can be achieved using x,y coordinates to determine intensity and delay for the sound at each speaker at each moment. The hypothetical listener is placed at a point equidistant from the two speakers. The speakers are each assumed to be at some angle from the listener between 0 and pi radians, with 0 radians being straight to the right, pi/2 radians being directly in front of the listener, and pi radians being to the left. (For example, for speakers at the front-left and front-right corners of a square room, and the listener at the center, the angle of the left speaker would be 3pi/4 radians (135 degrees), and the angle of the right speaker would be pi/4 radians (45 degrees). When the angle of the localized sound is greater than or equal to 90 degrees (pi/2 radians) from a speaker, the amplitude at that speaker will be 0.

If we assume the location of the speakers to be at equal distance and angle on either side of the listener, and we know the virtual location of the sound source (as x,y coordinates), we can use the arctangent function to calculate the angle of the sound source relative to the listener, which permits us to calculate the gain for each of the two channels, and we can use the Pythagorean theorem to calculate the overall amplitude and also the delay of the sound in getting to the listener. The angle of the sound source will determine the gain at each speaker, and the distance of the sound source will determine the delay. If the distance is changing, the delay will change, and Doppler shift will occur.

In this example, we specify starting and ending x and y coordinates for the sound source, and the amount of time needed to get from one point to the other in a straight line. We say that the y coordinate is always 1, the starting x coordinate is -200, and the ending x coordinate is 200; so, the sound will effectively move in a straight line from the extreme left of the listener to the extreme right, passing 1 unit in front of the listener. If we assume those units to be meters, and we take 36 seconds to go from the starting point to the ending point, the sound source will move virtually 400 meters in 36 seconds, which is exactly 40 km/hr, approximately 25 mph. The **line~** object provides that continuously changing location information.

We then use this information to calculate the angle of the sound (using the atan function) to determine the amplitude of the sound in each speaker as the sound "moves", and we calculate the distance (using the Pythagorean theorem) to figure out the overall amplitude of the source sound relative to the listener and the delay it would have in getting to the listener (who is located at coordinate 0,0). As the distance of the sound source from the listener changes, the changing delay introduces a changing loudness and also a pitch shift in the perceived sound, known as "Doppler shift".

## Objects used

`*~` ×10, `+~` ×3, `sqrt~` ×3, `!-~` ×2, `line~` ×2, `/~` ×2, `cycle~` ×2, `lores~`, `sig~`, `atan2~`, `pink~`, `phasor~`, `!/~`, `tapout~`, `tapin~`, `dac~`

*Patch contains 61 boxes, 45 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/dopplerexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dopplerexample.png`
