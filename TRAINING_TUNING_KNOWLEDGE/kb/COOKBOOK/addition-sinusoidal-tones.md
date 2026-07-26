---
type: cookbook
name: "Addition of sinusoidal tones"
summary: "To play two tones, you need two oscillators: two cycle~ objects)."
chapter: "MSP"
keywords: ["cycle~", "+~", "*~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/additionofsinusoidaltones.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/additionofsinusoidaltones.png"
---

# Addition of sinusoidal tones

To play two tones, you need two oscillators: two **cycle~** objects). To mix them together, simply add the two signals with a **+~** object. (For digital signals, addition is mixing.) To control the amplitude, multiply it by some factor, using a **\*~** object. (Multiplication is amplification.)

Note the psychoacoustic effect of mixing sine tones with two different frequencies. When two tones have nearly the same frequency, we tend to hear only one pitch, but the waves interfere in a way that causes puslation ("beating") at a rhythmic rate up to about 12 times per second. Once the tones are sufficiently far apart in frequency, we can begin to distinguish two pitches and the beating becomes a sort of "roughness", too fast for us to hear as a rhythm. The roughness persists up to about an interval of a minor third, at which point the interval is heard as less rough, more "consonant".

The comments in this patch explain the use of a typed-in "argument" in an object box to set an initial internal value for that object (such as the initial frequency value 440 typed into one of the **cycle~**objects), and also describe the use of certain settings in a **flonum~** (floating point **number**B> box) object's Inspector to cause it to display and send out a specific numerical value when the patch is opened.

## Objects used

`*~` ×2, `cycle~` ×2, `+~`, `scope~`, `ezdac~`

*Patch contains 27 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/additionofsinusoidaltones.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/additionofsinusoidaltones.png`
