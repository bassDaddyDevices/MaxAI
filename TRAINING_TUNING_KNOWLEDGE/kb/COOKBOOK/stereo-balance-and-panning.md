---
type: cookbook
name: "Stereo balance and panning"
summary: "This patch shows a simple way to control the balance between two sounds, and also illustrates the relationship between a) mixing two sounds to one location and b) panning one sound to two locations."
chapter: "MSP"
keywords: ["cycle~", "ezdac~", "inlet", "line~", "metro", "noise~", "outlet", "pack", "patcher", "sig~ *~", "+~", "!-~"]
objects: ["!-~", "*~", "+~", "cycle~", "ezdac~", "line", "line~", "metro", "noise~", "pack", "sig~", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stereobalance_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/strereobalance.png"
---

# Stereo balance and panning

This patch shows a simple way to control the balance between two sounds, and also illustrates the relationship between a) mixing two sounds to one location and b) panning one sound to two locations.

The upper-left portion of this patch shows the simplest way to pan a sound from one output to the other. You can start with the gain going to one output set to 1 and the other output gain set to 0, then gradually turn one output down to 0 as you bring the other up to 1. The **slider** provides values from 0 to 1 to the **line~** object, which smooths each change with a 10-ms sample-by-sample interpolation to avoid clicks. The right **\*~** object uses that value to control the gain of the right output channel, while the left **\*~** object uses 1 minus that vaue to control the gain to the left output channel. You can move the **slider** to hear the effect of panning the source sound between the two channels, effectively changing the balance of how much gets sent to each destination. You can also click the **message** boxes to hear a gradual linear pan from one channel to the other.

In a similar vein, shown in the upper-right portion of the patch, a good way to crossfade between two different sounds is to give one sound a gain between 0 and 1 and give the other sound a gain that's equal to 1 minus that amount. Thus, the sum of the two gain factors will always be 1, so the sounds will not clip, even if added together. When sound A has a gain of 1, sound B will have a gain of 0, and vice versa. As one gain goes from 0 to 1, the gain of the other sound will go from 1 to 0, so you can use this method to create a smooth crossfade between two sounds. In this example, the crossfading process is encapsulated inside the **p balance~** subpatch. The subpatch has two outlets in this example, and we send one sound to the left channel and the other to the right channel, but you could just as easily add the two sounds together to mix them into a single output. This sort of linear mixing and crossfading is demonstrated in [A useful subpatch for mixing and balancing two sounds](http://music.arts.uci.edu/dobrian_book/drupal/content/useful-subpatch-mixing-and-balancing-two-sounds).

You don't necessarily have to use a straight line for such a crossfade. In the lower-left portion of the patch, we use one quarter of a cosine waveform as the shape for fading the sound out, and one quarter of a sine waveform as the shape for fading the other sound in. (In the subpatch you can see that this is achieved by changing the phase offset of two 0-Hz **cycle~** objects.) The resulting effect is that the sound that's fading in fades in more quickly at first and more slowly at the end of the fade, and the sound that's fading out does the reverse. The effect is subtly different, and at the midway point the output amplitude of each sound is 0.707 (-3 dB) rather than 0.500 (-6 dB).

The use of those particular curves is especially appropriate for realistic panning of a single sound moving from one speaker to another, as shown in the lower-right part of the patch. The perceived intensity of two speakers at amplitude 0.5 is actually about 3 dB less than the perceived intensity of one speaker at amplitude 1. The quarter-cosine and quarter-sine curves address that discrepancy. As the source sound is panned toward the center, the curves approach the value 0.707, which is 3 dB greater than 0.500. The two speakers each at -3 dB create a perceived intensity that's equal to a single speaker at 0 dB (amplitude 1). Using those panning curves, as is done inside the **p pan~** subpatch, yields a pan with no dip in intensity as the sound moves from one speaker to the other. That method of panning is generally accepted as a good one, and it is useful to keep as a [Constant-intensity panning subpatch](http://music.arts.uci.edu/dobrian_book/drupal/content/constant-intensity-panning-subpatch).

## Objects used

`*~` ×16, `cycle~` ×8, `line~` ×8, `ezdac~` ×4, `line` ×4, `pack` ×4, `slider` ×4, `metro` ×4, `sig~` ×2, `+~` ×2, `noise~` ×2, `!-~` ×2

*Patch contains 109 boxes, 94 connections, 3 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stereobalance_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/strereobalance.png`
