---
type: cookbook
name: "A subpatch suitable for use in poly~"
summary: "This patch demonstrates how one might make an audio patch that can serve as a voice in a polyphonic synthesizer."
chapter: "MSP"
keywords: ["abstraction", "adsr~", "in", "in~", "out", "out~", "thispoly~", "polyphony", "FM", "frequency modulation"]
objects: ["*", "*~", "+~", "adsr~", "cycle~", "in", "loadbang", "out~", "pack", "thispoly~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FMsynth~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FMsynth~.png"
---

# A subpatch suitable for use in poly~

This patch demonstrates how one might make an audio patch that can serve as a voice in a polyphonic synthesizer. It's quite similar to the **FMtone~** patch shown in “[Generating a simple 2-operator FM tone](http://music.arts.uci.edu/dobrian/maxcookbook/generating-simple-2-operator-fm-tone)”, but with some modifications that make it suitable for use with the **poly~** object so that it can be used polyphonically. Some important features been added in this example.

Notice, first of all, that in addition to the **inlet**s and **outlet**, this patch has **in** objects and an **out~** object. These objects are specifically needed in conjunction with the **poly~** object. Wherever you would normally have **inlet**s and **outlet**s for using a patch as a subpatch, you should use the equivalent **in** and **out** objects for using the patch in **poly~**. These will then appear as inlets and outlets in the **poly~** object that loads this patch as a subpatch. For inlets and outlets that will handle MSP signals, use the **in~** and **out~** objects instead. This patch uses both—**inlet**s and an **outlet** and **in**s and an **out~**—so the patch can be used either as a normal subpatch or inside a **poly~**.

The **pack** object in this patch allows the parent patch to send in the frequency and amplitude information either as separate numbers in the two inlets or as a single two-item list in the left inlet, similarly to the way that **noteout** and many other Max objects work. But regardless of how the information is sent in, when something comes in the left inlet **pack** will send out both items, and **unpack** will send them to the proper place.

The amplitude information is used by two different **adsr~** objects, one for controlling the output amplitude and one for controlling the modulation index. The modulation envelope has a faster attack time and a slower decay time than the amplitude envelope, so the timbre evolves slightly differently from the amplitude. The *legato 1* message to **adsr~** tells it to turn "legato" playing on. That means that when **adsr~** starts a new envelope it should start from whatever amplitude it is currently at, rather than leap to 0 to start the new envelope. This will give a smoother (more legato) transition from one note to another if a new note is triggered before the release time of the previous note has fully elapsed.

The FM portion of the synthesizer is encapsulated inside a **patcher** object (the **p FM~** subpatch). This is done just for organization, to make the window a little less complex visually, not for any particular functional reason.

The **thispoly~** object is important because it allows a subpatch inside **poly~** to communicate some things about its state to the **poly~** that contains it—things that might be unique to that particular voice. The most significant things you can do with **thispoly~** are to mute/unmute a voice, or to set/unset its "busy" status. You can stop computation in a particular voice of a **poly~** by sending a *mute 1* message to a **thispoly~** object in the voice patch. To restart MSP computation in that voice, send *mute 0* to **thispoly~**. An extremely useful feature of the **adsr~** object is that when it completes an envelope it sends a *mute 1* message out its third outlet, and when it starts a new envelope it sends out *mute 0*. This is specifically meant to be sent to **thispoly~** by the **adsr~**that is controlling amplitude, as is done in this example, in order to turn off computation in the voice whenever the amplitude is 0. For voice allocation in response to *note* or *midinote* messages, **poly~** needs to know whether a voice is already busy synthesizing or whether it's available to synthesize a new note. If the signal in the inlet of **thispoly~** is 0, **poly~** considers that the voice is available to play a new note, but if the signal in the inlet of **thispoly~** is nonzero **poly~** knows that that voice is already busy. For this purpose, too, the **adsr~** that controls the amplitude is the perfect object to provide the "busy" or "not busy" signal, because when the envelope is at 0 that means that the note is over and the voice is once again available. Thus, **thispoly~** is a necessary object for eliminating unnecessary MSP computation and for voice allocation, and its logical partner is an **adsr~** object that is controlling the patch's output amplitude.

“[Polyphony with the poly~ object](http://music.arts.uci.edu/dobrian/maxcookbook/polyphony-poly-object)” shows this patch being used inside a **poly~** object. You will need to download this patch and save it with the name "FMsynth~.maxpat" in order for that example to work.

## Objects used

`*~` ×3, `in` ×2, `adsr~` ×2, `cycle~` ×2, `thispoly~`, `pack`, `unpack`, `out~`, `*`, `loadbang`, `+~`

*Patch contains 31 boxes, 28 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FMsynth~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FMsynth~.png`
