---
type: cookbook
name: "Using matrix~ for audio routing and mixing"
summary: "The matrix~ object is an audio mixer/router that can be configured with any number of inlets and outlets."
chapter: "MSP"
keywords: ["matrix~", "dbtoa", "cycle~", "mixing"]
objects: ["*", "+", "+~", "cycle~", "dbtoa", "ezadc~", "ezdac~", "gain~", "matrix~", "metro", "pack", "random", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matrix~forroutingandmixing.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matrix~forroutingandmixing.png"
---

# Using matrix~ for audio routing and mixing

The **matrix~** object is an audio mixer/router that can be configured with any number of inlets and outlets. The arguments specify the number of audio inlets, the number of audio outlets (there's always one additional outlet on the right), and the initial gain for the connections of inlets to outlets. Each inlet is potentially connectable to each outlet with a unique gain setting. The gain of the connections is changed by sending messages in the left inlet.

The messages in the left inlet of **matrix~** specify an inlet number (numbered starting from 0), an outlet number, a gain factor for scaling the amplitude of that connection, and a ramp time in milliseconds to arrive at that amplitude. You can send as many such messages as needed to establish all the desired connections.

The patch on the left shows how **matrix~** can be used to route a signal to multiple destinations. The first message connects inlet 0 to outlet 0 with a gain factor of 1 and a ramp time of 10 milliseconds, which is to say that it quickly opens the first outlet. The next message sets all four outlets to an amplitude of 0.25, but assigns a different fade time to each outlet, which shows that **matrix~** can be used as a mixer as well as a simple router. The third message quickly turns off all four outlets (turns them all to 0 amplitude in 10 ms).

This method of sending a message for each possible connection may seem a bit cumbersome, but in fact it's about the most efficient way to control a large matrix (a virtual patchbay) of possible connections. With some clever message management, you can control or automate a great many constantly-changing connections. The patch on the right automates a constantly-changing mix of four sound sources.

Every four seconds (or whatever time interval you choose) the **metro** bangs an **uzi** object which outputs four messages (numbers from 0 to 3 out its right outlet, and four *bangs* out its left outlet), which in turn trigger four messages to **matrix~**. Each *bang* from **uzi** chooses a random amplitude from -12 dB to -42 dB, packs it with a connection number and a transition time, and formats that as a connection message for **matrix~**.

## Objects used

`cycle~` ×4, `+~` ×3, `uzi` ×2, `matrix~` ×2, `+`, `metro`, `pack`, `dbtoa`, `*`, `random`, `gain~`, `ezdac~`, `ezadc~`

*Patch contains 52 boxes, 42 connections, 4 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matrix~forroutingandmixing.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matrix~forroutingandmixing.png`
