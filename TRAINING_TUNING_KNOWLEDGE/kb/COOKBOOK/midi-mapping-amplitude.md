---
type: cookbook
name: "MIDI mapping to amplitude"
summary: "Mapping one range of values to another needed range of values is a crucial technique in computer music."
chapter: "Max"
keywords: ["sfplay~", "scale", "ctlin", "expr", "pow", "dbtoa", "line~"]
objects: ["*", "*~", "-", "/", "ctlin", "dbtoa", "expr", "ezdac~", "line~", "live.gain~", "pow", "scale", "sfplay~", "slider", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDImappingtoamplitude.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDImappingtoamplitude.png"
---

# MIDI mapping to amplitude

Mapping one range of values to another needed range of values is a crucial technique in computer music. In this example, we want to map MIDI data values that range from 0 to 127 into a useful range for controlling the amplitude—and thus the loudness—of a sound in MSP.

The **scale** object is the most useful tool for data mapping in Max. The arguments of the **scale** object are the minimum and maximum input values you expect it to receive, and the corresponding minimum and maximum output values you want it to send out. In this example, in the upper-left portion of the patch, we use as **scale** object to map input values 0 to 127 (the range of data values from a MIDI continuous control message) into the range -70 to 0 (the default range of decibel values for the **live.gain~** object).

If you don't have a MIDI volume controller (a volume pedal or a volume knob or fader on a MIDI device), try dragging up and down on the **slider** to emulate the effect of a volume pedal. Notice that as the input values go from 0 to 127, the output values go from -70 to 0. In this example the arguments typed into **scale** are all integers, so the output will be integers. If you want **scale** to do calculations using decimal numbers (floats), you need to include a decimal point in at least one of the arguments. In this case, we made a quasi-arbitrary decision to use integers, mainly because MIDI data is always integers, and a loudness difference of one decibel is about the smallest change we can perceive anyway, and using integers makes the demonstration simpler.

The **live.gain~** object actually does some additional mapping of its own internally. It converts decibels into the amplitude values by which it will scale its audio input. That's exactly the same as the **dbtoa** or **dbtoa~** object would do, combined with a **\*~** object to scale the amplitude of the sound. Additionally, internally **live.gain~** does some rapid smoothing of the amplitude value (linear interpolation from one amplitude to the next) over the course of about 10 ms, to avoid clicks. That's exactly the same as using a **line~**object before the inlet of **\*~**.

The lower-right portion of the example patch shows how all of this is working inside the **scale** and **live.gain~** objects, by doing the exact same operations with simple math objects. The incoming MIDI values 0 to 127 are first divided by that full range (127-0=127) to map them into the range from 0. to 1. Then that's multiplied by the desired output range of decibels (70), and then offset by the minimum desired output value (-70) to bring the decibels into the range -70. to 0., as the input data goes from 0 to 127. The **dbtoa**object shows the conversion from decibels to amplitude. The math objects just to the right of that show what's actually going on inside the **dbtoa** object. Finally, the **line~** object shows the smoothing and multiplication that's going on inside the **live.gain~** object after it does the decibel-to-amplitude conversion.

The decibel scale is proportional to the logarithm of the amplitude. That means that a linear change in decibels will create the desired exponential increase in amplitude. Because we perceive loudness proportional to the logarithm of amplitude (that is, we perceive more or less according to the decibel scale), the resulting exponential increase in amplitude corresponds to the desired linear sense of the change in loudness.

## Objects used

`t` ×2, `sfplay~` ×2, `*~` ×2, `/` ×2, `line~`, `expr`, `pow`, `dbtoa`, `-`, `*`, `ezdac~`, `live.gain~`, `scale`, `slider`, `ctlin`

*Patch contains 40 boxes, 29 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDImappingtoamplitude.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDImappingtoamplitude.png`
