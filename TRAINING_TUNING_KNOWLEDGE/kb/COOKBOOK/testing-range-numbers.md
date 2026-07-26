---
type: cookbook
name: "Testing for a range of numbers"
summary: "If you want to detect when a number has occurred that fits within a particular range, you'll want to use logical operators to test conditions such as is less th"
chapter: "Max"
keywords: ["split", "if", ">=", "<"]
objects: ["&&", "<", ">=", "if", "select", "split"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testingforarangeofnumbers.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testingforarangeofnumbers_0.PNG"
---

# Testing for a range of numbers

If you want to detect when a number has occurred that fits within a particular range, you'll want to use logical operators to test conditions such as is less than, is less than or equal to or is greater than this and less than that. Most logical operators send out the number *1* (meaning true) if the condition is met, and *0* otherwise. The **split** object sends out its left outlet all input numbers that fall within a specified 'minimum' and 'maximum', and sends the rest of its input numbers out the right outlet. The and operator **&&** sends out a *1* if both of its inputs are true (non-zero), and *0* otherwise.

## Objects used

`select` ×4, `<` ×2, `>=` ×2, `if`, `&&`, `split`

*Patch contains 41 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testingforarangeofnumbers.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testingforarangeofnumbers_0.PNG`
