---
type: cookbook
name: "Use stored waveform for a synthesizer"
summary: "This patch demonstrates the technique of wavetable synthesis: using one cycle of a stored waveform as the wave type for a synthesizer tone."
chapter: "MSP"
keywords: ["notein", "poly", "pow", "cycle~", "buffer~", "line~", "mtof"]
objects: ["*", "*~", "+~", "/", "buffer~", "cycle~", "ezdac~", "line~", "mtof", "notein", "pack", "poly", "pow", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/synthesizer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/synthesizer.png"
---

# Use stored waveform for a synthesizer

This patch demonstrates the technique of wavetable synthesis: using one cycle of a stored waveform as the wave type for a synthesizer tone. The **cycle~** object with no argument produces a cosine wave; however, **cycle~** can also refer to a waveform stored in a **buffer~**, and use that as a wavetable. To do that, you need to create a **buffer~**, store a waveform in it, and then refer to that **buffer~** by creating a **cycle~** with the same name. The **cycle~** will then read through that **buffer~** (or any specified subsection of it) cyclically to produce a periodic tone.

This patch also presents, in simplified form, some of the basic techniques commonly used in synthesizer design. The **notein** object provides the pitch and velocity of every incoming MIDI note message. The **poly *1 1*** object limits its output to one note at a time, and implements "voice stealing", meaning that it turns off a prior held note before playing a new one (by outputting the pitch of the prior note along with a 0 velocity). The velocity value, which will range from 0 to 127, is converted into the range of 0. to 1. by the **/ 127.** object, then cubed by the **pow *3.*** object to convert the velocity into an amplitude value that follows the desired velocity-to-loudness relationship for the oscillator. The pitch of the MIDI note is converted to the correct frequency by the **mtof** object.

There are also two other **cycle~** objects generating 6 Hz sinusoidal control signals, which function as low-frequency oscillators (LFOs) to cause vibrato (frequency modulation) and tremolo (amplitude modulation). The amplitude of those control LFOs is determined by the frequency and amplitude values that were calculated from the MIDI pitch and velocity; in each case, the frequency or amplitude value is multiplied by a small fraction to determine the amplitude of the LFO, then the output of the LFO is added to the base value to create a small sinusoidal fluctuation of frequency or amplitude.

## Objects used

`*~` ×4, `cycle~` ×3, `+~` ×2, `*` ×2, `ezdac~`, `sel`, `line~`, `pack`, `notein`, `/`, `pow`, `poly`, `mtof`, `buffer~`

*Patch contains 26 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/synthesizer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/synthesizer.png`
