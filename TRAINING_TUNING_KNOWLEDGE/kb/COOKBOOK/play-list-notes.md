---
type: cookbook
name: "Play a list of notes"
summary: "The coll object stores an indexed collection of messages."
chapter: "Max"
keywords: ["MIDI", "score", "coll", "pipe"]
objects: ["b", "coll", "counter", "noteout", "pipe"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/notelistplayer_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/notelistplayer_0.png"
---

# Play a list of notes

The **coll** object stores an indexed collection of messages. You can trigger those messages to be sent out, just by sending **coll** the index of the desired message. One way that this can be useful is that you can make an entire musical score in the format of a collection of note messages, each of which contains whatever information you consider vital for describing a note. That’s similar to the way that languages like **csound** and **cmusic** read a score file to play notes.

This patch demonstrates that idea. The format for describing a MIDI note in this patch is: *pitch velocity channel duration delaytime* (time to wait before playing). You compose a collection of such note messages (either by hand or algorithmically), and then you simply read through the collection, using each note message to trigger the subsequent message (which gets delayed the specified amount of time before it’s played, and before it triggers the next note).

If you double-click on the **coll** object, you’ll see a very short collection of note messages:  
1, 64 120 1 3500 0;  
2, 68 96 2 3000 500;  
3, 71 112 3 2500 500;  
4, 76 127 4 2000 500;

When you click on the **button**, the **counter** is set to start at 1 and the first number is sent to **coll**. The **coll** receives that number and sends out the note message associated with the number 1. The **pipe** object delays the first four numbers in the message by the amount of time specified in the fifth number (which, in this case, is 0 milliseconds). When that time has elapsed, it does three things. 1) It sends the pitch and the channel number, along with the duration information, to another **pipe** object which delays pitch and channel (and a note-off velocity of 0) by the duration of the note. In effect, this schedules the MIDI note-off message to be sent out a certain amount of time in the future. (Note that the second inlet of that **pipe** never receives anything, so the velocity value of that **pipe** will always be 0, for note-off.) 2) It sends pitch velocity and channel to a **noteout** object to start the note (which will get turned off later by the note-off that was scheduled in step 1). 3) It sends a *bang* to the **counter** to trigger the next note message from the **coll**. When the **coll** runs out of notes to play, it won’t send anything, and the process will stop.

## Objects used

`pipe` ×2, `counter`, `coll`, `noteout`, `b`

*Patch contains 19 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/notelistplayer_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/notelistplayer_0.png`
