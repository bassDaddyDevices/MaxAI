---
type: cookbook
name: "Using the preset capabilities of pattrstorage"
summary: "In order for this example to work properly, you should first download the file called noiseburstpresets.json and save it with that name somewhere in the Max file search path."
chapter: "Max"
keywords: ["pattr", "preset", "autopattr", "pattrstorage", "algorithmic composition"]
objects: ["!/", "*", "*~", "+", "+~", "-1", "autopattr", "b", "clip", "cycle~", "dbtoa", "decide", "ezdac~", "i", "line", "loadmess", "metro", "mtof", "noise~", "pack", "pak", "pass~", "pattrstorage", "pcontrol", "preset", "random", "reson~", "sel", "sig~", "t", "urn"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo7.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo7_03.png"
---

# Using the preset capabilities of pattrstorage

[In order for this example to work properly, you should first download the file called [noiseburstpresets.json](http://music.arts.uci.edu/dobrian/maxcookbook/file/noiseburstpresetsjson#overlay-context=using-preset-capabilities-pattrstorage) and save it with that name somewhere in the Max file search path.]

This patch shows some features of **pattrstorage**, and demonstrates how it might be used to structure a series of different settings to shape the formal structure of a longer period of time. For another example of how pattrstorage can store states that create a formal structure for a composition, see "[Saving and recalling presets in pattrstorage](saving-and-recalling-presets-pattrstorage.md)".

The first thing to notice is that there is not a single **pattr** object anywhere in this patch. However, each of the nine labeled **number box**es that provides parameter data to the **patcher *noisebursts*** subpatch has been given a scripting name in its object Inspector. The **autopattr** object, as soon as it is created, finds not only all the **pattr** objects anywhere in the patch but also all the UI objects that have scripting names, and it makes available all of those names—**pattr** object names and UI scripting names—to any **pattrhub**, **pattrforward**, and **pattrstorage** objects in the patch. So, without needing any **pattr** objects or explicit bindings, all we need to do is include an **autopattr** at the top level of our patch, and automatically all the UI objects that have scripting names will be storable and recallable by **pattrstorage**.

The sonic/musical function of this patch is to generate different randomized patterns of short bursts of filtered noise. The patterns are generated inside the **patcher *noisebursts*** subpatch—and all the MSP objects that create the actual bursts of filtered noise are isolated in another subpatch within that so that they can be easily enabled and disabled to turn the sound on and off—but the UI objects that provide the parameters that shape the noiseburst patterns are all in the main patch. Those UI objects all have scripting names, so they can be controlled by the **pattrstorage** object, and the **pattrstorage** can in turn be controlled by the **preset** object.

Before the whole system of **pattr**-related objects existed, a standard way to store the settings of all UI objects was with a **preset** object. (You can see the standard usage of the **preset** object in action in "[Repeated notes at 6 related tempi, with different probabilities](repeated-notes-6-related-tempi-different-probabilities.md)" (an example from one of the original Max tutorials), and another good example can be found in the tutorial patch for [MSP Synthesis Tutorial 1: Additive Synthesis](http://docs.cycling74.com/max7/tutorials/06_synthesischapter01).) The **preset** object was notoriously a bit buggy and problematic, so the **pattrstorage** system is ultimately superior. Nevertheless, the straightforward graphic interface of the **preset** object is very effective, so a feature was added to it that would allow it to be used with **pattrstorage**. All you need to do is create a **preset** object, then send it a *pattrstorage* message indicating the name of the **pattrstorage** object you'd like it to control. From then on, you can use that **preset** object to store and recall presets in the named **pattrstorage**.

When the patch is loaded, the **pattrstorage** object tries to load in the JSON preset file of the same name, called "noiseburstpresets.json". If you have saved that file correctly in a location that's findable by Max (i.e., within the Max file search path), that should happen automatically. Because the **preset** object is bound to the **pattrstorage** object, you should be able to choose different settings for the parameter UI objects just by clicking on different buttons of the **preset**. Note that the **preset** is not controlling those objects directly, as it would in a traditional usage of the **preset** object; it is controlling the **pattrstorage** object, which is actually in charge of controlling all the UI objects that have scripting names. You can double-click on the **pattrstorage** object to see its "Client Objects" window. Note that the on/off **toggle** does not have a scripting name, so it's invisible to the **pattrstorage**; that's intentional, so that we can turn the sound on and off independently of any preset changes we might make.

Click on the **ezdac~** to turn MSP on, use the **toggle** to turn the noisebursts on, then try choosing one of the 16 saved presets to change the sound.

There is also a subpatch called **patcher autopresetchooser** that's intended to demonstrate one possible approach to automating preset changes and preset interpolations. Double-click on it to see its contents. The subpatch is designed to choose a new preset number every 15 seconds, form a *recall* message that will enable interpolation from the previous preset to the newly chosen present, and then trigger a 5-second interpolation from the old preset to the new preset. The resulting messages will thus say *recall <previouspreset> <nextpreset> <interpolationvalue>*, with each message having a different interpolation value progressing from 0 to 1 over five seconds. Try turning on the **autopresetchooser** subpatch to cycle randomly through all the different presets. This demonstrates how one might automate changes over a long period of time to create a certain formal structure, one that is either determinate or, as in this case, indeterminate because of randomized decisions.

The composition of known states of a patch, governing its behavior, can be composed in non-real time and stored in a whole collection of presets within **pattrstorage**, and those presets can then be recalled interactively or automatically in a performance to recreate known behaviors at the desired time.

## Objects used

`+` ×9, `*` ×6, `*~` ×4, `random` ×4, `sel` ×2, `metro` ×2, `loadmess` ×2, `pass~` ×2, `cycle~` ×2, `preset`, `b`, `line`, `pack`, `i`, `t`, `urn`, `pattrstorage`, `autopattr`, `ezdac~`, `reson~`, `noise~`, `+~`, `sig~`, `pcontrol`, `pak`, `clip`, `-1`, `decide`, `!/`, `dbtoa`, `mtof`

*Patch contains 135 boxes, 108 connections, 5 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo7.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo7_03.png`
