---
type: cookbook
name: "Curve in a transfer function"
summary: "You can obtain values that change exponentially or logarithmically by using the pow object or by using the pow($f1,$f2) function in the expr object."
chapter: "Max"
keywords: ["function", "expr"]
objects: ["expr", "function"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/curvefunction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/curvefunction.png"
---

# Curve in a transfer function

You can obtain values that change exponentially or logarithmically by using the **pow** object or by using the pow($f1,$f2) function in the **expr** object. Numbers in the left inlet that stay between 0 and 1 will stay between 0 and 1 at the output. An exponent of 1 (in the right inlet) will make a linear function (output will equal input); exponents greater than 1 will create the effect of an exponential curve as the base numbers in the left inlet go from 0 to 1; exponents between 0 and 1 will create the effect of a logarithmic curve as the base numbers go from 0 to 1.

You can use the **function** object to make a *transfer function—*a table in which input numbers are used to look up corresponding numbers on the stored function. The stored function can be made up of line segments or curves (if you put the **function** object in Curve mode in its Inspector).

This patch shows how a single curve in a **function** object can be used as a lookup function that emulates an exponential curve.

In **function**, a curvature value of 0 makes a straight line, a positive curve value gives a quasi-exponential curve, and a negative curve value gives a quasi-logarithmic curve. When the **function** is in Curve mode, you can cause the segment leading to a given point to be curved with the *setcurve* message. The settings in the **message** box show the different messages that can be used to change the appearance and behavior of **function**, as they were used to set up the initialization of this patch.

## Objects used

`expr`, `function`

*Patch contains 13 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/curvefunction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/curvefunction.png`
