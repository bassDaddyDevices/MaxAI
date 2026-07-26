---
type: cookbook
name: "A useful subpatch for mixing and balancing two sounds"
summary: "To mix two sounds together equally, you just add them together."
chapter: "MSP"
keywords: ["mixing", "balance", "amplitude control", "abstraction"]
objects: ["*~", "+~", "-~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mix~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mix~.png"
---

# A useful subpatch for mixing and balancing two sounds

To mix two sounds together equally, you just add them together. If you know that both sounds will frequently be at or near full amplitude (peak amplitude at or near 1) then you probably want to multiply each sound by 0.5 after you add them together, to avoid clipping. However, if you want to mix two sounds unequally, with one sound having a higher gain than the other, a good way to accomplish that is to give one sound a gain between 0 and 1 and give the other sound a gain that's equal to 1 minus that amount. Thus, the sum of the two gain factors will always be 1, so the sum of the sounds will not clip. When sound A has a gain of 1, sound B will have a gain of 0, and vice versa. As one gain goes from 0 to 1, the gain of the other sound will go from 1 to 0, so you can use this method to create a smooth crossfade between two sounds.

This example employs that mixing technique and implements it as a patch that can be used as an object inside another patch. It's handy for easily mixing and/or adjusting the balance of two audio signals, or for crossfading from one signal to another. Save the patch as a file with a distinct and memorable name such as "mix~.maxpat" somewhere in the Max file [search path](https://docs.cycling74.com/max7/vignettes/search_path). Then you can use it as a subpatch (also often called an "abstraction") in any other patch just by making an object named **mix~**. The audio signals go into the left and middle inlets and the mix value from 0 to 1 goes into the right inlet. There are three ways to specify the balance: 1) as an argument typed into the object box, 2) as a float in the right inlet, or 3) as a signal in the right inlet. Using a signal to control mixing is the best choice if you intend to change the mix dynamically.

Whatever goes in the inlets of the **mix~** object in the main patch comes out the corresponding **inlet** objects in the **mix~** subpatch, and the mixed signal comes out the outlet. The **sig~** object provides a constant signal in which every sample has the same value, in this case a constant value of 1. The argument *#1* will be replaced by whatever is typed into the **mix~** object box as an argument in the parent patch; if nothing is typed in, it will be 0, and if a signal is attached in the main patch then the signal value will be used. This allows the user to type in an argument to specify the initial balance value in one of the **\*~** objects, and the **-~** object provides 1 minus that value to the other **\*~** object. That initial balance value can be replaced by sending in a float or a signal.

There is actually a subtly more computationally-efficient way to implement this mixing/balancing/crossfading algorithm, with identical results. That method is shown in the example "[Mix two signals (more efficiently)](http://music.arts.uci.edu/dobrian/maxcookbook/mix-two-signals-more-efficiently)".

## Objects used

`*~` ×2, `-~`, `sig~`, `+~`

*Patch contains 15 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mix~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mix~.png`
