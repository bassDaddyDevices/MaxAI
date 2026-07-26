---
type: cookbook
name: "Quadraphonic panning based on radial angle"
summary: "This patch enables you to pan a sound to any azimuth angle in a quadraphonic sound system."
chapter: "MSP"
keywords: ["abstraction", "clip~", "cycle~", "panning", "quadraphonic"]
objects: ["*~", "+~", "clip~", "cycle~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quadpan3~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/quadpan3~.png"
---

# Quadraphonic panning based on radial angle

This patch enables you to pan a sound to any azimuth angle in a quadraphonic sound system. The abstraction assumes a square configuration of four equidistant speakers: 1 = front left, 2 = front right, 3 = rear left, 4 = rear right. The sound signal comes in the left inlet, and the azimuth angle comes in the right inlet, either as a number or as a signal.

The azimuth angle is stated as a value from 0 to 1, with 0 being straight in front of the listener, directly between speakers 1 and 2. As the angle value increases toward 1, the virtual angle of the sound moves clockwise in a circle around listener (who is assumed to be in the center of the speakers). So, for example, the angle 0.125 will be exactly in the right speaker, 0.250 will be directly between the two right speakers, 0.375 will be only in the right rear speaker, and 0.5 will be directly behind the listener. Thus, a **phasor~** object outside the right inlet would move the sound continuously in a clockwise circle. The angle values are not limited between 0 and 1, however; angle values beyond that range will effectively be wrapped around within that range. So, for example, values that decrease from 0 to -1 will move the sound counter-clockwise around the circle.

The amplitude for each speaker is obtained by looking it up in a stored cosine wavetable (the right inlet of a 0-Hz **cycle~** object). Compare this with the method described in "[Constant-intensity panning subpatch](http://music.arts.uci.edu/dobrian/maxcookbook/constant-intensity-panning-subpatch)". The virtual locations of the four speakers are assumed to be 1 = 0.875, 2 = 0.125, 3 = 0.375, and 4 = 0.625. Whenever the panning angle value is within ±0.25 of the speaker location, the positive portion of the cosine wave will be used to obtain the amplitude for that speaker; whenever the panning angle is out of range of that speaker, the amplitude of that speaker is set to 0.

This abstraction allows us to describe the location of the sound using polar coordinates from 0 to 1. The virtual azimuth angle of the sound is controlled by the panning angle value in the right inlet. The virtual distance of the sound would be controlled outside of this abstraction by scaling the amplitude of the sound coming in the left inlet, using the formula amplitude = 1/distance.

## Objects used

`sig~` ×4, `+~` ×4, `clip~` ×4, `cycle~` ×4, `*~` ×4

*Patch contains 41 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quadpan3~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/quadpan3~.png`
