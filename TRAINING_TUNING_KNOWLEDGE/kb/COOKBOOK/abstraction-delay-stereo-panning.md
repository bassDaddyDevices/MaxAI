---
type: cookbook
name: "Abstraction for delay with stereo panning"
summary: "This abstraction encapsulates delay, gain control, and stereo panning in a single object that can be used in some other \"parent\" patch."
chapter: "MSP"
keywords: ["delay", "panning", "pan~", "tapout~", "tapin~", "tapconnect"]
objects: ["*~", "in", "line~", "out~", "pack", "pan~", "tapoutxfade~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutstereo~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tapoutstereo.png"
---

# Abstraction for delay with stereo panning

This abstraction encapsulates delay, gain control, and stereo panning in a single object that can be used in some other "parent" patch. It assumes that its first inlet will be connected to a **tapin~** object in the parent patch. That **tapin~** object will send a *tapconnect* message when MSP audio is turned on, thus linking the **tapout~** object in this abstraction to the memory buffer of the **tapin~** object in the parent patch.

For another example of the use of the *tapconnect* message, see "[Abstraction for crossfading delay times of a remote tapin~ object](abstraction-crossfading-delay-times-remote-tapin-object.md)". The abstraction in that example is a file called **tapoutxfade~**.maxpat, which is used as an abstraction within this patch. Another abstraction used in this patch is the **pan~**.maxpat file presented in the "[Constant-intensity panning subpatch](constant-intensity-panning-subpatch.md)". Both of those files will need to be in the Max file search path in order for this example to work.

Note that in this patch the delay time, the gain, and the stereo panning of the sound are all to be provided as Max *float* messages coming in the designated inlets; the *float* messages will be converted to signals and interpolated to the new value in 10 milliseconds by **line~** objects to avoid clicks. The initial values for those parameters can be specified as typed-in arguments in the parent patch, which will replace the *#1*, *#2*, and *#3* arguments in this patch.

Note that, in addition to **inlet** and **outlet** objects, this patch has **in** and **out~** objects. That's done so that this abstraction can be used either as an ordinary abstraction subpatch or as the contents of a **poly~** object. Both of those usages are demonstrated in related examples. Save this abstraction with the file name "tapoutstereo~.maxpat" somewhere in Max's [file search path](https://docs.cycling74.com/max7/vignettes/search_path). This abstraction is used as a subpatch with that name **tapoutstereo~** in the example, "[Multiple delays with stereo panning](http://music.arts.uci.edu/dobrian/maxcookbook/multiple-delays-stereo-panning)", and it is used inside a **poly~** object in the example "[Polyphonic panned delays with poly~](http://music.arts.uci.edu/dobrian/maxcookbook/polyphonic-panned-delays-poly)".

See also, for comparison, the example "[Abstraction for delay with quadraphonic panning](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-delay-quadraphonic-panning)" and related examples.

## Objects used

`in` ×4, `pack` ×2, `line~` ×2, `out~` ×2, `*~`, `pan~`, `tapoutxfade~`

*Patch contains 26 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutstereo~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tapoutstereo.png`
