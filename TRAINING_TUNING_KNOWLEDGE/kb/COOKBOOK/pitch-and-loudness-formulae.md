---
type: cookbook
name: "Pitch and loudness formulae"
summary: "This patch doesn't do anything musical, but it shows the math formulae that underlie the mtof, ftom, atodb, and dbtoa objects."
chapter: "MSP"
keywords: ["pitch", "loudness", "frequency", "amplitude", "decibel", "mtof", "ftom", "dbtoa", "atodb"]
objects: ["atodb", "dbtoa", "expr", "ftom", "mtof"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pitchandloudnessformulae.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchandloudness.png"
---

# Pitch and loudness formulae

This patch doesn't do anything musical, but it shows the math formulae that underlie the **mtof**, **ftom**, **atodb**, and **dbtoa** objects.

The base frequency of 440 Hz is defined as the pitch A above middle C, MIDI key number 69. Each semitone up or down is a change by a factor of the 12th root of 2. So, we subtract 69 from any MIDI key number (to find the pitch difference in semitones from A 440) and use that number divided by 12 as the exponent of the base 2, multiplied by the base frequency of 440. For example, Bb above middle C (MIDI 70) has a frequency of 440 times 2 to the (70-69)/12 power. You can verify that this expresson in the **expr** object yields the same result as the **mtof** object. For converting frequency to MIDI pitch, we effectively reverse that process, using a logarithm to the base 2. (Because the **expr** object doesn't have a log2 function, to get log2(x) you have to substitute *log(x)/log(2)*.)

A decibel is a measure of *relative* value (of power, intensity, etc.), and thus it implies a comparison (specifically, the ratio) of one value to another: the ratio of one value to an established reference value. So, to calculate a value in decibels, you must first find the ratio of that value to some reference value. In computer music, the reference amplitude (let's call it "Aref") is usually 1, so the ratio A/Aref is A/1, which is just A. In dealing with amplitudes, because amplitude squared is proportional to intensity, we effectively need to square the values. To find the number of *bels* that that represents, you calculate the logarithm to the base 10 of that ratio (in this case, A), and multiply that by 10 (since there are 10 decibels per bel), and then multiply that by 2 because we want the number of decibels represented by the square of A. In short, the formula is: amplitude in decibels is 20 times the log10 of A/Aref. To convert decibels to absolute amplitude, you essentially reverse that process.

## Objects used

`expr` ×4, `dbtoa`, `atodb`, `ftom`, `mtof`

*Patch contains 20 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pitchandloudnessformulae.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchandloudness.png`
