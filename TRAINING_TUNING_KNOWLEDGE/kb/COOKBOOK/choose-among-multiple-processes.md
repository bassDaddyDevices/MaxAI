---
type: cookbook
name: "Choose from among multiple processes"
summary: "For this example to work properly you'll first need to download two other patches."
chapter: "Max"
keywords: ["patcher", "key", "gate", "subpatch", "abstraction"]
objects: ["gate", "key", "partofamotive", "select", "semitonetrill"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/dothings.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dothings.png"
---

# Choose from among multiple processes

For this example to work properly you'll first need to download two other patches. One is [semitonetrill.maxpat](../patches/semitonetrill.maxpat), which is explained in the example called "[Random semitone trills](https://random-semitone-trills)", and the other is [partofamotive.maxpat](../patches/partofamotive.maxpat), which is explained in the example titled "[Motivic 'improviser'](motivic-improviser.md)".

When you write a Max patch that enacts a musical behavior, it's a good idea to think about how you'll want to use that patch in a larger context that might include several behaviors. Often it's a good idea to encapsulate an algorithm so that it can be used inside another patch, either as a subpatch in a **patcher** object or as a separate file that can be used as an abstraction (a subpatch that you include in a main patch by making an object with that filename). In this patch, we use two saved abstractions, each of which does a particular musical task. The abstraction called **semitonetrill** plays a semitone trill of variable length at a randomly chosen pitch level. The abstraction called **partofamotive** plays a variable portion of a stored melodic phrase. Because we knew we were going to use those inside this patch, we designed them both to have the same communication protocol: a *bang* in the inlet of the abstraction starts the process, and when the process is done, it sends a *bang* out its outlet to indicate completion. That means we can trigger each one at any time, and can know when it has completed its task (possibly using that information to start something else).

In this example we use keystrokes of the letters 'a' and 'b' to trigger one process or the other (or both simultaneously). We use keystrokes of the letters 'A' and 'B' to trigger each process to play repeatedly in a loop. We use **gate** objects to determine whether the *bang* at the end of the process will be allowed to loop back and trigger the process to start again. If you double-click on the **patcher *"keyboard control"*** object to see its contents, you'll see that a **key** object is used to get the keystroke information, and a **select** object is used to detect if one of the keys we're looking for has been pressed. If it's a capital letter 'A' or 'B', we also trigger the number *1* to be sent to the **toggle** in the main patch to allow looping; if it's a small letter 'a' or 'b', we trigger the number *0* to turn looping off, so that the process runs only once. As you can see from this example, the **gate** object can be very useful in this sort of situation, to allow or disallow certain messages to pass through. In this way, you can have many possible activities at the ready, and trigger only the ones you want, and you can alter their behavior based on the state of an object such as **gate**.

## Objects used

`gate` ×2, `select`, `key`, `partofamotive`, `semitonetrill`

*Patch contains 29 boxes, 25 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/dothings.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dothings.png`
