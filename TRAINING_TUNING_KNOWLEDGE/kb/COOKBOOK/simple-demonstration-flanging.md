---
type: cookbook
name: "Simple demonstration of flanging"
summary: "The technique of flanging in computer music refers to a changing delay time applied to a sound, usually by modulating the delay time with a low-frequency oscillator (LFO)."
chapter: "Max"
keywords: ["sfplay~", "cycle~", "delay~"]
objects: ["*", "*~", "+~", "/", "adstatus", "cycle~", "delay~", "ezdac~", "live.gain~", "loadbang", "prepend", "sfplay~", "translate"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpledemonstrationofflanging.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpledemoofflanging.png"
---

# Simple demonstration of flanging

The technique of flanging in computer music refers to a changing delay time applied to a sound, usually by modulating the delay time with a low-frequency oscillator (LFO). The continuously changing delay time causes a subtle—or not-so-subtle—change in the pitch of the sound. When the flanged sound is mixed with the original sound, the two sounds interfere in continuously changing ways, creating a charactistic modulated filtering effect.

This example patch shows how to do that in Max. (A similar take on the same topic can be found in another example of simple flanging.) The idea is to establish a very short delay time (usually not more than 10 ms), and then use an LFO to increase and decrease the delay slightly (again, usually just by a very few milliseconds) at a regular (sub-audio) rate. This creates a pitch vibrato that can range from subtle to extreme.

The sound signal is delayed with the **delay~** object, which creates a circular buffer of the most recently received samples of audio, and allows you to specify how much delay should be imposed (provided it's not more than the size of the buffer). The size of the buffer is defined in samples, as is the delay time. The translation between clock time and samples can be done by the **translate** object, or simply calculated based on the current sampling rate. The rate and depth (frequency and amplitude) of the LFO determine the intensity of the flanging effect.

Some aspects of this patch are oversimplified. For example, changes in delay time and LFO depth should ideally be smoothed (e.g., with a **line~** object) to avoid clicks. And the mix between dry sound and flanged sound should ideally be adjustable, rather than fixed in an equal mix as shown here. Improvements to these oversimplifications are demonstrated in the more sophisicated [demonstrantion of flanging](http://music.arts.uci.edu/dobrian/maxcookbook/simple-flanging-0).

## Objects used

`loadbang` ×2, `prepend` ×2, `*~` ×2, `+~` ×2, `*` ×2, `sfplay~`, `translate`, `cycle~`, `/`, `adstatus`, `delay~`, `live.gain~`, `ezdac~`

*Patch contains 45 boxes, 35 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpledemonstrationofflanging.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpledemoofflanging.png`
