---
type: cookbook
name: "Generate a sinusoid with gen~"
summary: "Max provides an object called gen~ that opens up a new patching window in which you can program audio at the sample level."
chapter: "MSP"
keywords: ["capture~", "ezdac~", "gen~", "scope~"]
objects: ["*", "+", "/", "capture~", "cos", "counter", "ezdac~", "gen~", "in", "out", "param", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/generatesinusoid.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/generatesinusoid_0.png"
---

# Generate a sinusoid with gen~

Max provides an object called **gen~** that opens up a new patching window in which you can program audio at the sample level. You build an audio network inside the gen~ window with objects that are quite similar to MSP objects, but within the gen~ window there is only audio, no non-audio events. What you build in gen~ is represented equivalently in a special text language called GenExpr in an adjacent “Codebox” window. This gives the programmer access to text-based sample-level programming which is then compiled as an audio object that runs just like other MSP objects.

Here is an example of generating a sinusoidal tone from scratch using **gen~**.

![](/dobrian_book/drupal/sites/default/files/generatesinusoid.png)

And here is what the contents of the **gen~** object look like, with the GenExpr code.

![](/dobrian_book/drupal/sites/default/files/sinusoidingen~.png)

Notice that the objects in gen~ are similar to MSP objects but a) they don’t need the tilde**~** because everything is audio, b) some objects are different, like **counter** instead of **count~**, c) some macros exist, such as SAMPLERATE, d) inlets are specified by **in** objects, which only receive audio signal, and e) parameters defined within gen~ can have their value changed by named messages from the main patch received in the first inlet. (The **in** object is not really needed in this gen~ patch because there’s no audio input.)

## Objects used

`*` ×3, `param` ×3, `ezdac~`, `capture~`, `scope~`, `gen~`, `cos`, `+`, `/`, `counter`, `in`, `out`

*Patch contains 30 boxes, 21 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/generatesinusoid.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/generatesinusoid_0.png`
