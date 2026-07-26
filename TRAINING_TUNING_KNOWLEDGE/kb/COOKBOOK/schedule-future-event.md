---
type: cookbook
name: "Schedule a future event"
summary: "Timing is very important in music."
chapter: "Max"
keywords: ["delay", "schedule"]
objects: ["dac~", "delay", "live.gain~", "loadmess", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/schedulefutureevent.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/schedulefutureevent.png"
---

# Schedule a future event

Timing is very important in music. The fundamental way to ensure precise timing of events is to use a scheduler. A schedule is a list of time-tagged events to be executed at specific times in the future. That schedule must be consulted constantly at regular intervals (as often as possible, e.g., every millisecond) to see if any item on the list has a time tag that is less than or equal to the current time; if so, that event should be enacted.

Max has a master scheduler constantly running behind the scenes, and has various objects that allow you to post events on the schedule. The simplest of all of those is the **delay** object. When **delay** receives a *bang* in its left inlet, it schedules that *bang* to be sent out its outlet after a delay of a certain number of milliseconds, which has been specified in its right inlet. (Alternatively, if **delay** receives an *int* or a *float* in its left inlet, it uses that number to set its delay time, overwriting whatever number was previously set as the delay time, and schedules a *bang* to be sent out after that number of milliseconds has elapsed.)

The **delay** object can schedule only one *bang* at a time. If another *bang*, *int*, or *float* is received in its left inlet before the previously-scheduled *bang* has been sent out, the previously-scheduled *bang* will be pre-empted and the new *bang* will be scheduled instead. The message *stop* in the left inlet cancels any currently-scheduled *bang*. If the delay time in the right inlet is changed while a *bang* is scheduled, that doesn't change the timing of the existing scheduled *bang*; the new delay time only affects subsequently-scheduled *bang*s.

In this example, we use a bass drum sound and a snare drum sound as two stand-ins for the idea of "an event", but in fact an event can be any Max message, or combination of messages, even turning on or off other entire processes. The delay time might be only a few milliseconds, to make two things happen in rapid precisely-timed succession, or it could be a much longer time (though still expressed in terms of milliseconds) such as several seconds, minutes, or even hours.

Although it's not demonstrated in this example, it's also possible to specify the delay time in [tempo-relative time units](https://docs.cycling74.com/max7/vignettes/maxtime_syntax), such as *4n* for a quarter note, based on the current tempo of the Max [transport](https://docs.cycling74.com/max7/maxobject/transport), but in that case **delay** will only work when the transport is on.

The Max **delay** object is comparable to the setTimeout() method in JavaScript. When using JavaScript within a Max **js** object, the setTimeout() method is not available; the nearest equivalent is the schedule() method of [the Task() object](https://docs.cycling74.com/max7/vignettes/jstaskobject), but that will run in a low-priority thread of Max, not in the high-priority scheduler as Max's **delay** object does.

## Objects used

`sfplay~` ×2, `loadmess`, `dac~`, `live.gain~`, `delay`

*Patch contains 13 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/schedulefutureevent.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/schedulefutureevent.png`
