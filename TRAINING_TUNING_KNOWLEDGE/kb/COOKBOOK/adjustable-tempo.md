---
type: cookbook
name: "Adjustable Tempo"
summary: "This example explores some approaches to recording and playing events in Max."
chapter: "Max"
keywords: ["mtr", "transport", "timepoint", "record events"]
objects: ["/", "0", "b", "coll", "counter", "gate", "i", "key", "loadmess", "mtr", "pack", "pipe", "swap", "t", "textbutton", "timepoint", "transport", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AdjustableTempo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/AdjustableTempo.PNG"
---

# Adjustable Tempo

This example explores some approaches to recording and playing events in Max.

The **mtr** object is made for recording messages and playing them back in the same rhythm as they were recorded––see the top-left portion of the patch.

But **mtr** is not really designed to play back at a different rate than the events were recorded. However, we can do it with a little ingenuity––see the bottom-left portion of the patch.

The **transport** object is the key to having an adjustable tempo, because it keeps track of time in tempo-relative timing units, such as bars, beats, and ticks. If you want to record events and play them back at a different rate, you might want to use the **transport** object to obtain the precise time at which and event occurs, and use that information to store each message with its associated time tag, as demonstrated in the righthand portion of the patch.

To have the recorded messages be synchronized with precise moments in the **transport**’s timer, we record the event time along with the event, and then use those time tags to play back the events. In this example, we use the **coll** object to store keystrokes obtained from the **key** object, time-tagged with the current time, in ticks, obtained from the **transport**. The **coll** will then contain an indexed array of two-item lists, consisting of time (in ticks) and key. To read those events back in the right tempo, one might be temped to use a brute force method of running a **metro** as fast as possible in hopes of hitting all possible points in time. But this is rarely efficient or advisable, because running a **metro** at an interval of 1 tick means 960 bangs per second (assuming a tempo of 120 bpm), only a very few of which are actually useful. Instead, it’s better to use the time tags themselves to generate the events at the desired time, letting the Max scheduler take care of the timing for us, since that’s what it’s designed to do. Each time tag in the **coll** is used as a timepoint in the **timepoint** object, which triggers the key information at the right moment and then triggers the next output from the **coll**. The **transport** must be on for this to work, of course.

## Objects used

`textbutton` ×5, `t` ×4, `i` ×3, `key` ×3, `gate` ×2, `b` ×2, `unpack` ×2, `mtr` ×2, `0`, `timepoint`, `pack`, `counter`, `coll`, `transport`, `swap`, `loadmess`, `/`, `pipe`

*Patch contains 53 boxes, 66 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AdjustableTempo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/AdjustableTempo.PNG`
