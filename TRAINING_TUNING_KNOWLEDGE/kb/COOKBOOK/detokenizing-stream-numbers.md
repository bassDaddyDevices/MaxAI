---
type: cookbook
name: "Detokenizing Stream of Numbers"
summary: "A Max user was having trouble detokenizing a stream of number."
chapter: "Max"
keywords: ["gate", "select", "trigger"]
objects: ["1", "2", "3", "4", "counter", "gate", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/DetokenizingStreamOfNumbers.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/DetokenizingStreamOfNumbers.PNG"
---

# Detokenizing Stream of Numbers

A Max user was having trouble detokenizing a stream of number. In this case, given a stream of number, he wanted to route the number immediately following a *8* to a first output, the number immediately following a *9* to a second output, the four numbers immediately following a *10* to a third output, and all the rest to a fourth output. This example shows how to achieve just that, using a combination of **select**, **gate**, and **trigger** objects.

Even though this is one of those situations when Java or Javascript might be more straightforward than Max, we can still achieve it with Max. Coincidentally, this example also pretty much illustrates how one might do it in a text-based language.

## Objects used

`t` ×3, `sel` ×2, `4`, `counter`, `3`, `2`, `1`, `gate`

*Patch contains 21 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/DetokenizingStreamOfNumbers.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/DetokenizingStreamOfNumbers.PNG`
