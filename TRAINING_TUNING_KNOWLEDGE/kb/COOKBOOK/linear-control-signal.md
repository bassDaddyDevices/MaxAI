---
type: cookbook
name: "Linear control signal"
summary: "The phasor~ object produces a linear control signal that goes repeatedly from 0 to 1."
chapter: "Max"
keywords: ["phasor~", "cycle~", "line~", "scope~"]
objects: ["*~", "cycle~", "ezdac~", "line~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearcontrolsignal.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearcontrolsignal.png"
---

# Linear control signal

The **phasor~** object produces a linear control signal that goes repeatedly from 0 to 1. That's demonstrated in the upper left part of this patch. In general, a control signal that goes gradually in a straight line from one value to another is quite useful, but you don't always want it to repeat over and over the way that **phasor~**does.

The **line~** object, shown in the upper right part of this patch, produces a control signal that goes from one value to another in a specified amount of time and then stays at that new value until it gets further instructions. The message that it expects to receive is a *list* of two or more numbers. (A *list* is a specific message type in Max that starts with a number followed by additional items—usually other numbers—separated by spaces.) The first number in the list specifies a destination signal value, and the second number in the list specifies the amount of time, in milliseconds, that **line~** should take to get there.

The lower part of the patch shows the **line~** object being used to provide control information for the frequency and amplitude of a tone. Note that **line~** can understand a *list* of more than two numbers; it uses the first two numbers in the list as a destination value and a transition time, and then as soon as it arrives at its destination it uses the next pair of numbers in the list to determine its next destination value and transition time. With longer lists, as shown here, you can define a more complex control shape made up of line segments. If line receives just a single number, it goes to that destination value immediately. (It assumes 0 as its transition time in that case.)

The **button** triggers three messages. Because of the right-to-left ordering rule of Max messages, the message 220 is triggered first, telling **line~** to go immediately to a value of 220. The other two messages then tell one **line~** object to play a specific two-segment shape of frequency glissando in a **cycle~** object, while another **line~** object makes a four-segment shape to control the amplitude of that tone.

## Objects used

`line~` ×3, `scope~` ×3, `ezdac~`, `*~`, `cycle~`, `phasor~`

*Patch contains 22 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearcontrolsignal.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearcontrolsignal.png`
