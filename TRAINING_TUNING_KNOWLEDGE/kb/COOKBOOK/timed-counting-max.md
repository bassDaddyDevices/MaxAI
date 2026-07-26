---
type: cookbook
name: "Timed counting in Max"
summary: "The upper example shows how to count from 1 to 10 at a specific rate (e.g., one count every 500 ms) and stop when you reach 10."
chapter: "Max"
keywords: ["metro", "counter", "counting", "select", ">="]
objects: [">=", "counter", "loadbang", "metro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedcounting.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedcounting_1.png"
---

# Timed counting in Max

The upper example shows how to count from 1 to 10 at a specific rate (e.g., one count every 500 ms) and stop when you reach 10. The **metro** object sends out a *bang* message when it is turned on (when it receives a nonzero number in its left inlet), and continues to send out *bang* every x milliseconds (specified by the typed-in argument or by a number received in its right inlet). You can type in minimum and maximum values as arguments in the **counter** object. Every time it receives a *bang*, **counter** sends out its current count value and increments its internal counter to be ready to send out the next number. The **select** object looks for a particular number or word—the integer *10* in this case—and sends out a *bang* when it recognizes that message. That triggers a *0* to turn off the **toggle** which in turn turns off the **metro**. 

The lower example is a more generalized version of the upper example. It allows you to specify any starting and ending value for the count. To avoid any problems that might occur if the ending value were to get set lower than the current count (in which case the counting might continue upward indefinitely), we use a greater-than-or-equal-to test, **>=**. If the number received in the left inlet is greater than or equal to the number specified in the right inlet, **>=** sends out a *1* (true) message. That *1* will be detected by the **select** object, which will turn off the **metro**. Notice that **loadbang** is used in this example to initialize the settings of all the user interface objects (**number** boxes) and send those values into the necessary inlets of other objects.

If you just can't get enough of this (banal but fundamental) topic of "counting", you can read more on my [Algorithmic Composition blog](http://algocomp.blogspot.com/), specifically in the chapters titled "[Timed counting](http://algocomp.blogspot.com/2008/08/timed-counting.html)" and "[Counting through a List](http://algocomp.blogspot.com/2008/08/counting-through-list.html)".

## Objects used

`select` ×2, `metro` ×2, `counter` ×2, `loadbang`, `>=`

*Patch contains 37 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedcounting.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedcounting_1.png`
