---
type: cookbook
name: "Make a yes-or-no decision with a given likelihood"
summary: "The probablility P of something occurring is defined as the number of looked-for outcomes divided by the number of possible outcomes."
chapter: "Max"
keywords: ["probability", "probabilistic", "decision", "likelihood", "gamble", "random"]
objects: ["*", "<", "clip", "patcherargs", "random"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gamble.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gamble.png"
---

# Make a yes-or-no decision with a given likelihood

The probablility P of something occurring is defined as the number of looked-for outcomes divided by the number of possible outcomes. For example, the probability that heads will show up on an unbiased coin flip is 1 (there is one instance of heads on the coin) divided by 2 (there are two possible outcomes, heads or tails), which means P = 0.5. With this definition, any probability can be described as a number in the range from 0 (impossible) to 1 (absolute certainty).

This patch allows you to specify a probability P from 0 to 1 (as a typed-in argument or as a *float* in the right inlet) and then send a *bang* (or any message) in the left inlet to make a yes-or-no decision (1 or 0) using that specified probability. The likelihood that the output will be 1 corresponds to the stated probability. That is, over many iterations, you can expect that the output will be 1 in proportion to P, relative to the number of iterations.

We do this using the **random** object, which outputs a randomly chosen integer from 0 to one less than its argument. Because random only outputs integers, we multiply the fractional value P by the same range as the **random** object has. For example, with a probability P equal to 0.5 (the default), 0.5 times the range of 1,000,000 equals 500,000. So, if the number chosen by **random** is less than 500,000, a 1 will be sent out; otherwise, a 0 will be sent out.

## Objects used

`clip`, `<`, `patcherargs`, `*`, `random`

*Patch contains 16 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gamble.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gamble.png`
