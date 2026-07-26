---
type: cookbook
name: "Abstraction for hexagonal constant-intensity panning"
summary: "For speakers that are configured in a circle or in the vertices of a regular polygon, you can give a sense of localization of a sound by calculating the radial"
chapter: "Max"
keywords: ["round~", "clip~"]
objects: ["!-~", "!/~", "!=", "*~", "+", "+~", "-", "-~", "<~", "==", ">", "clip~", "cycle~", "lcd", "loadbang", "round~", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/hexagonalradialpanner~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/hexapanner.png"
---

# Abstraction for hexagonal constant-intensity panning

For speakers that are configured in a circle or in the vertices of a regular polygon, you can give a sense of localization of a sound by calculating the radial angle of the sound's desired virtual location relative to the center of the listening space, and then panning the sound between the speakers that are closest to that virtual location. In other words, for any virtual location that you want to imply, you need to calculate which speakers are closest to that location, and then pan the sound between those speakers.

This patch provides a useful abstraction for amplitude panning among a circular (i.e., hexagonal) configuration of six equally-spaced speakers surrounding the listening area. The patch by default assumes that the speakers are equally spaced around the listener at 60° intervals, starting with speaker 1 at -30° to the left off axis from the direction the listener is facing (e.g. in the front-left 11 o'clock position) and with the speaker numbers proceeding in clockwise order from there.

The left inlet receives the sound you want to pan, and the second inlet recieves the azimuth angle to which the sound should be panned, specified as a signal from 0 to 1. (Numbers in the form of Max *float* messages must be converted to a signal with **sig~** or **line~** before being sent in the panning inlet.) The use of the range 0 to 1 is agnostic regarding units such as degrees or radians, and makes it easy to pan the sound in a repeating circle using a **phasor~** object for the panning angle.

The source sound's panning angle, 0 to 1, is stated as a fraction of a circle, starting from 12 o'clock and increasing in a clockwise direction. As the panning angle enters the range of each speaker (within 60° on either side of the speaker), the amplitude of that speaker increases to 1 using the first 1/4 of the sin function. As the panning angle moves away from that speaker's angle, the amplitude decreases using the first 1/4 of the cos function.

The third inlet receives a signal from 0 to 1 specifying a "spread" beyond the two closest speakers (i.e., beyond the 120° range described in the preceding paragraph). The default spread (spread value of 0) will use just two of the six speakers at any given moment. A spread of 0 to 0.5 will inreasingly use the four nearest speakers, and a spread of 0.5 to 1 will use all six speakers.

The fourth inlet takes an integer 0 or 1 specifying one of two speaker placement options. The default (1) is as described above, with front left and right speakers, left and right side speakers at -90° and 90°, and rear left and right speakers, and with the speakers (output channels) numbered starting with the front left speaker and increasing in the clockwise direction. The other option (0) rotates that configuration by 30 degrees, so that speaker 1 is directly in front of the listener.

With this abstraction, a single signal from 0 to 1 can specify the azimuth angle of the sound. (Any panning signal value outside the range 0 to 1 will be wrapped around to stay within that range.) The virtual distance (D) of the sound from the listener can be modified outside of the abstraction (before panning) simply by scaling the sound's amplitude by a factor of 1/D.

## Objects used

`-~` ×13, `*~` ×13, `clip~` ×7, `+~` ×7, `==` ×6, `-` ×6, `>` ×6, `cycle~` ×6, `!/~` ×6, `<~` ×6, `+` ×6, `sel` ×2, `round~`, `loadbang`, `!=`, `unpack`, `!-~`, `lcd`

*Patch contains 141 boxes, 173 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/hexagonalradialpanner~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/hexapanner.png`
