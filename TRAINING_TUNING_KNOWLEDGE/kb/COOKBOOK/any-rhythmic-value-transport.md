---
type: cookbook
name: "Any rhythmic value, with transport"
summary: "Transport-based tempo-relative timing in Max allows you to specify any rhythmic value."
chapter: "Max"
keywords: ["transport", "rhythm", "tuplets", "ticks", "quantize"]
objects: ["+", "counter", "loadbang", "makenote", "metro", "noteout", "prepend", "random", "t", "transport", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/anydivision.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/anydivision.png"
---

# Any rhythmic value, with transport

Transport-based tempo-relative timing in Max allows you to specify any rhythmic value. The musical [time value syntax](https://docs.cycling74.com/max7/vignettes/maxtime_syntax) allows you to specify duple divisions (1n, 2n, 4n, 8n, 16n, 32n), dotted notes (2nd, 4nd, 8nd, etc.), and triplets (2nt, 4nt, 8nt, etc.). To specify other divisions such as quintuplets, septuplets, and so on, Max doesn't provide note value nomenclature, so you'll need to calculate (or program Max to calculate for you) the correct number of ticks, based on 480 ticks per quarter note (e.g., a quintuplet sixteenth note is 480/5 = 96 ticks). Fortunately, Max understands fractional numbers of ticks, so you can specify septuplet sixteenth notes quite precisely as 480/7 = 68.571429 ticks.

This patch chooses at random from among sixteen possible rhythmic values on the downbeat of every measure, and plays a chromatic scale at the chosen rate. It can divide a measure into 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, or 48 parts. When the **transport** is turned on, a **metro** at the top of the patch resets the counter to 0, randomly chooses a rhythmic division from the **umenu**, and sets another **metro** to trigger the **counter** at that rhythmic interval. A third **metro** plays each beat on high C (MIDI key 96) as a reference point. Note the use of the *quantize* attribute to ensure that the metronomes' output is perfectly synchronized with the musical timing of the transport.

## Objects used

`metro` ×3, `prepend` ×2, `noteout`, `makenote`, `+`, `counter`, `loadbang`, `umenu`, `random`, `t`, `transport`

*Patch contains 19 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/anydivision.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/anydivision.png`
