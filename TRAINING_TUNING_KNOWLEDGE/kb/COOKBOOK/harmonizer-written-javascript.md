---
type: cookbook
name: "Harmonizer written in JavaScript"
summary: "As a demo project to explore JavaScript programming in Max, this patch implements a script that harmonizes any played MIDI note with either a major seventh chor"
chapter: "Max"
keywords: ["kslider", "js", "stripnote", "MIDI"]
objects: ["flush", "iter", "js", "kslider", "noteout", "sel", "stripnote"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jsharmonizerdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jsharmonizerdemo.PNG"
---

# Harmonizer written in JavaScript

As a demo project to explore JavaScript programming in Max, this patch implements a script that harmonizes any played MIDI note with either a major seventh chord or a minor seventh chord that contains the played note. For any given pitch, there are four different major seventh chords and four different minor seventh chords that contain that pitch.

In order for this patch to work, you will first need to [download the JavaScript file](http://music.arts.uci.edu/dobrian/w15/music152/examples/javascript/myjsharmonizerdemo.js) and store it in Max’s files search path.

The script defines the two chord types as pitch class sets stored in global arrays, chooses one of the two chord types at random, randomly chooses and configures an inversion for the chord, then transposes that chord (in its chosen inversion) to include the played pitch.

## Objects used

`stripnote`, `noteout`, `flush`, `sel`, `kslider`, `iter`, `js`

*Patch contains 13 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jsharmonizerdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jsharmonizerdemo.PNG`
