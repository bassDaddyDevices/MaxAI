---
type: cookbook
name: "Communicate with many pattr objects from a central hub"
summary: "In large and complex patches that have many pattr objects, it might be useful to be able to communicate with all of them at one central location."
chapter: "Max"
keywords: ["pattr", "pattrhub", "transport"]
objects: ["!/", "loadbang", "makenote", "metro", "noteout", "pack", "pattr", "pattrhub", "prepend", "route", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo5.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo5_03_0.png"
---

# Communicate with many pattr objects from a central hub

In large and complex patches that have many **pattr** objects, it might be useful to be able to communicate with all of them at one central location. That is the purpose of the **pattrhub** object. With **pattrhub** you can alter the contents of any **pattr** just by using the name of the **pattr** followed by the data you want to put in it. You can also query the current contents of any **pattr** by preceding its name with the word "get" (as in *gettempo* if there is a **pattr *tempo*** object somewhere in the patch). You can query the contents of all the **pattr** objects in the patch with the message *getstate*. Whenever you query the values of **pattr** objects, the information comes out the right outlet of **pattrhub**, preceded by the name of the **pattr**(s) in question. Thus, you can use a **route** object to look for and parse the values of the various **pattr**s coming out of **pattrhub**.

In this example, we have made a program that performs simple rational polyrhythms. We specify a numerator and denominator for the ratio of one rhythm to another, and we divide those values into 1920 (the number of ticks in a whole note) to determine the correct number of ticks to use as the time intervals for the two **metro**s. We're using a named **transport** object, with the name "clock1", to keep it distinct from the global transport. The numerator, denominator, and beat tempo are all stored in **pattr**s so that we can set them in one part of the patch and use them in another part.

Whatever the values of the **pattr**s are when the patch is saved, those values will be saved with the patch and will be sent out when the patch is loaded. Using the *getstate* message to **pattrhub**, we can query the saved contents of each **pattr**, and can use that information to set the initial values of the UI objects. Notice that in this case, the **pattr**s are not explicitly bound to any UI objects, and the UI objects don't have any scripting names. We're just using the getting and setting capabilities of **pattrhub** to make the communication between the UI objects and the **pattr**s.

## Objects used

`pattr` ×4, `prepend` ×4, `pack` ×2, `makenote` ×2, `!/` ×2, `metro` ×2, `noteout`, `route`, `loadbang`, `pattrhub`, `transport`

*Patch contains 41 boxes, 38 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo5.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo5_03_0.png`
