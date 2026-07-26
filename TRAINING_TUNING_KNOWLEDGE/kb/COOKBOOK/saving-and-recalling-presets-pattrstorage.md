---
type: cookbook
name: "Saving and recalling presets in pattrstorage"
summary: "This patch demonstrates the use of pattr objects to store several attributes of a note-generating algorithm, and pattrstorage to store and recall preset values for all of those pattrs."
chapter: "Max"
keywords: ["pattr", "pattrstorage", "presets", "algorithmic composition"]
objects: ["!/", "+", "b", "ctlout", "i", "join", "line", "makenote", "metro", "multislider", "noteout", "pack", "pattr", "pattrstorage", "random", "t", "urn"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrnotes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrnotes.png"
---

# Saving and recalling presets in pattrstorage

This patch demonstrates the use of **pattr** objects to store several attributes of a note-generating algorithm, and **pattrstorage** to store and recall preset values for all of those **pattr**s. In order to use the presets already designed for this patch, you will first need to download the file called [notestreams.json](http://music.arts.uci.edu/dobrian/maxcookbook/file/notestreamsjson) and place it somewhere in the Max file search path.

A **pattr** object (the name stands for "patcher attribute") is a storage location for any Max message. A **pattrstorage** object stores the values of all the **pattr** objects in its patch at any given moment. Thus, you can think of **pattrstorage** as storing "snapshots" of the messages contained in all the **pattr** objects. Since **pattrstorage** can store many such snapshots and recall them later, you can set up any number of preset states for a patch to be in. When you recall one of those presets from **pattrstorage**, the **pattr** objects send out those stored values. In this way, you can instantly set any number of values in a patch just by specifying a single preset to **pattrstorage**.

(For examples demonstrating the entire family of **pattr**-related objects in more detail, see "[Introduction to the pattr object](introduction-pattr-object.md)", "[Binding objects to each other, and to a pattr](binding-objects-each-other-and-pattr.md)", "[Communicate with many pattr objects from a central hub](communicate-many-pattr-objects-central-hub.md)", "[Storing and recalling multiple pattr values](storing-and-recalling-multiple-pattr-values.md)", and "[Using the preset capabilities of pattrstorage](using-preset-capabilities-pattrstorage.md)".)

Significantly, **pattrstorage** can also interpolate between presets, doing all of the necessary calculations for you, to obtain intermediate states between any two presets of **pattr**values. To get that interpolation effect, send **pattrstorage** a message that starts with the word 'recall', followed by one preset number (think of it as preset A) and then another preset number (think of that as preset B) and then a value from 0. to 1. specifying the desired location between preset A and preset B. So, if you wanted to get a smooth interpolation from one preset to another, you would send a series of messages that say *recall [previouspreset] [nextpreset] [interpolationvalue]*, with each message having a different interpolation value progressing from 0 to 1.

The note-generating algorithm shown here produces MIDI notes at a specified rate (notes per second), with each note's pitch and velocity chosen randomly from within a constrained range of possibilities. Those ranges are specified by a minimum value (the lowest allowable random choice) and a range size (from minimum to maximum). For good measure, this patch also specifies a MIDI panning value to place the notes in the stereo field. Each of those paramenters is stored in a **pattr**: *notespersecond*, *pitchminimum*, *pitchrange*, *velocityminimum*, *velocityrange*, and *panning*. For this example, six presets of **pattr** values have been stored in the [notestreams.json](http://music.arts.uci.edu/dobrian/maxcookbook/file/notestreamsjson) file, so you can recall any of those presets by specifying a number 1 to 6 in the **number box** labeled "go to".

To interpolate gradually from one preset to another, a portion of the patch allows you to choose a starting preset, an ending preset, and an interpolation time, and then when you click on the **button** labeled "interpolate between presets", it will construct a series of 'recall' messages to cause the desired transition from one preset to another. To spare you the tedium of doing that by hand, there's also a subpatch called *randomtransition* that will randomly choose a new preset to which to transition, and will choose a random amount of time from 1 to 10 seconds to get there. Try clicking on the button in the top right corner of the patch to hear some interpolations from one preset to another. The pitches are played by the **noteout** object, and are displayed by the **multislider** (set in "Reverse Point Scroll" slider style with a single slider).

## Objects used

`+` ×6, `pattr` ×6, `random` ×3, `t` ×2, `pack` ×2, `i`, `b`, `urn`, `line`, `join`, `multislider`, `pattrstorage`, `ctlout`, `noteout`, `makenote`, `metro`, `!/`

*Patch contains 69 boxes, 64 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrnotes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrnotes.png`
