---
type: cookbook
name: "Using MIDI pitchbend data in MSP"
summary: "For this patch to work correctly, you must have the six guitar string samples in the same directory as you save this Max patch."
chapter: "Max"
keywords: ["bendin", "xbendin", "xbendin2", "midiin", "sflist~", "sfplay~"]
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchbender.png"
---

# Using MIDI pitchbend data in MSP

For this patch to work correctly, you must have the [six guitar string samples](http://music.arts.uci.edu/dobrian/maxcookbook/file/guitarstringszip) in the same directory as you save this Max patch.

This Max patch demonstrates the arithmetic process of converting a MIDI pitchbend message into a factor that can be used to scale the fundamental frequency of a synthesized tone or the playback rate of a prerecorded sample in MSP.

The **bendin** object uses only the most significant byte (MSB) of the pitchbend message and outputs it as a value from 0 to 127. To get the full 14-bit resolution of an incoming message, one needs to use the **midiin** object to get the raw MIDI bytes, and then use the **xbendin** object to recognize pitchbend messages in the data stream, parse those messages, and combine the two data bytes into a single 14-bit value from 0 to 16,383.

A pitchbend value of 8192 (or of 64 if one is considering only the MSB) is considered the central value meaning no change in pitch. But it’s not literally exactly in the center of the range from 0 to 16,383, so in order to map the range 0-16,383 into the range -1 to +1 with 8192 in the center with a value of 0, one needs to treat the values below 8192 differently from the values above 8192. We do this by subtracting 8192 from the value so that the values now occupy the range -8192 to 8191, and then splitting the pitchbend values into two ranges and scaling the negative numbers by 1/8192 and the nonnegative numbers by 1/8191.

Once the values have been mapped into the range -1 to 1, they’re multiplied by the range of semitones desired (a range of ± 2 semitones is the norm). That number is then divided by 12 (the number of equal-tempered semitones in an octave) and that result is used as the exponent of 2 to get the frequency-scaling factor—the value by which we multiply the base frequency of the tone or the playback rate of the sample.In this example, we use the frequency-scaling factor to alter the playback rate of a prerecorded note. The **sfplay~** object accesses a set of six preloaded sound cues, numbered 2 through 7. Each sound is a single guitar note, played at its original recorded rate. Since a playback rate of 1 gives the original pitch of the note, we can use the scaling factor directly to determine the desired playback rate for the “bent” note.

There are a few other things in this Max patch that bear explanation. Although they’re hidden from view, there are some objects in the patch that are included to make the **slider** object return quickly to its centered position the way that a real springloaded pitchbend wheel would do. On the left side of the patch there’s a demonstration of the same technique using the 7-bit pitchbend value from a **bendin** object. The right side of the patch demonstrates that an **xbendin2** object will provide the two data bytes of each pitchbend message as two separate 7-bit values, and the patch demonstrates explicitly the bit-shifting and bit-masking operations that take place internally in the **xbendin** object to make a single 14-bit value.

## Files

- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchbender.png`
