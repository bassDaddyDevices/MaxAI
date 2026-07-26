---
type: cookbook
name: "Tremolo effect in Max for Live"
summary: "This patch shows one possible implementation of a tremolo effect as a Max for Live (M4L) device."
chapter: "Max for Live"
keywords: ["plugin~", "plugout~", "cycle~", "phasor~"]
objects: ["*", "*~", "+", "-", "-~", "64", ">>", "change", "coll", "cycle~", "dbtoa~", "ezadc~", "ezdac~", "line~", "live.dial", "live.meter~", "live.numbox", "loadbang", "pack", "phasor~", "plugin~", "plugout~", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tremolo4live.amxd_.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tremolo4live.amxd_.png"
---

# Tremolo effect in Max for Live

This patch shows one possible implementation of a tremolo effect as a Max for Live (M4L) device.

The topic of tremolo is discussed in several other examples: "[Amplitude modulation and frequency modulation](http://music.arts.uci.edu/dobrian/maxcookbook/amplitude-modulation-and-frequency-modulation)", "[Tremolo effect on a sound file](http://music.arts.uci.edu/dobrian/maxcookbook/tremolo-effect-sound-file)", and "[Sync tremolo to transport units](http://music.arts.uci.edu/dobrian/maxcookbook/sync-tremolo-transport-units)". Here we'll focus on a couple things that are specific to Max for Live.

To get audio into and out of a Max for Live device, you use the **plugin~** and **plugout~** objects. Those are directly analogous to a pair of **inlet** and **outlet** objects that you would normally use for two channels of audio in a Max abstraction. In fact, it's perfectly fine to use both, as shown here, so that your patch can work either as an abstraction in MSP or as an audio device in Max for Live.

N.B. In this patch, the **ezadc~**, **ezdac~**, and **live.gain~** objects are included only to make it easy for you to try out the patch. To use this patch as an abstraction or a M4L device, you should delete those objects.

One thing you need to decide when programming a Max for Live device, as with any program, is how you want the user to be able to control the parameters, and how you want to display information to the user. In this device, we want the user to be able to control the parameters of tremolo rate and tremolo depth, either with onscreen dials or with MIDI data. We use **live.dial** objects, which can be easily mapped to MIDI in Max or Live. The range of the dials is set from 0 to 127, corresponding to a MIDI controller, so that the user can see the MIDI-format information, but we also want the user to see the information in a more user-friendly format, so we use also **umenu** to display the tremolo rate in tempo-based units, and we use **live.numbox** to add *dB* units in the display of the tremolo depth.

In order always to keep the tremolo rate synchronized with the transport, in either Max or Live, instead of using milliseconds for the rate, we use bars, beats, and units (ticks)—a.k.a. *bbu*. We keep those transport-based time units stored in a **coll** object, and we use the **live.dial**'s position to look up the timing we want. However, the range of the **live.dial** is 0 to 127, yet we need the range 1 to 16 for addresses in the **coll**, and we need the range 0 to 15 for the display of the **umenu**. A simple way to do that would be to integer-divide the 0-127 numbers by 8, to convert those into numbers 0 to 7 (then add 1 to that for the **coll**, or simply change the indices in the **coll**). For some reason, this example uses a similar—but slightly less efficient and more abstruse—way; it subtracts 8 from the value, then bitshifts that 3 bits to the right, then adds the appropriate offset to get the proper range for **coll** and **umenu**. We use the **change** object to filter out identical values caused by this range-reduction operation.

For the tremolo depth, we can take advantage of the fact that **live.dial** also sends its position, on a scale from 0 to 1, out its right outlet. We (floating-point) multiply that value by 48.0 to get gradations of depth from 0 to 48 decibels. We use **line~** to smooth those changes to avoid clicks, then we use that to scale and offset the output of the LFO (the **cycle~** object), causing a sinusoidal amplitude fluctuation of + and - that number of decibels. Finally, we converts decibels to an actual amplitude value using **dbtoa~**, and we use that in **\*~** to set the instantaneous gain imposed on the signal that's passing through.

## Objects used

`live.meter~` ×4, `*~` ×3, `+` ×2, `live.dial` ×2, `line~`, `64`, `loadbang`, `pack`, `-~`, `live.numbox`, `coll`, `-`, `change`, `umenu`, `>>`, `phasor~`, `cycle~`, `*`, `dbtoa~`, `ezadc~`, `ezdac~`, `plugout~`, `plugin~`

*Patch contains 39 boxes, 39 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tremolo4live.amxd_.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tremolo4live.amxd_.png`
