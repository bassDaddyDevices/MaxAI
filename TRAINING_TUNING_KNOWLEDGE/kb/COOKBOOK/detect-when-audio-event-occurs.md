---
type: cookbook
name: "Detect when an audio event occurs"
summary: "To detect when an audio event (such as a musical note) occurs, one straightforward method is to test whether the peak amplitude of the audio signal surpasses an"
chapter: "MSP"
keywords: ["event detection", "threshold", "Peakamp~", "onebang", "patcherargs"]
objects: [">=", "dbtoa", "delay", "onebang", "patcherargs", "peakamp~", "sel", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectevent.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detectevent.png"
---

# Detect when an audio event occurs

To detect when an audio event (such as a musical note) occurs, one straightforward method is to test whether the peak amplitude of the audio signal surpasses an established threshold that's slightly above the level of the ambient noise floor. The **peakamp~** object periodically reports the greatest absolute value of amplitude that has occurred during the specified time interval. For quick response, that interval should usually be every 10 to 30 milliseconds. With a **>** object (or **>=**), you can test whether that amplitude has surpassed the threshold you established. If so, the test will result in a "true" report of 1. Then you should ignore all subsequent 1 values until you get a 0 value indicating that the signal has dropped below the threshold. You can ignore the repeated 1 values with a **change** object, or, as in this example, convert the *1* into a *bang* with **sel 1** and then suppress the repeated bangs with the **onebang** object.

Some sounds may fluctuate significantly in amplitude within a note or phrase, such as a flute note with periodic tremolo. If those fluctuations cross the threshold, it could result in false reports of a new event. In order to avoid incorrectly interpreting such fluctuations as a new event, this patch provides an additional wait time after the signal dips below the threshold before it once again allows the report of a new event. In this patch, as long as the signal is above the threshold, and the "off time" is equal to or greater than the reporting interval, the **delay** object will be continually retriggered and won't send out the off (0) message. Only when the signal stays below the threshold for a time greater than the "off time" will the **delay**object send out its delayed bang to report the event has ended.

The three important parameters in this patch—the testing interval, the amplitude threshold, and the off time—can be specified as arguments to this object in the parent patch. If no arguments are provided, the **patcherargs** object provides default values for those parameters.

## Objects used

`t` ×2, `delay`, `sel`, `dbtoa`, `unpack`, `patcherargs`, `>=`, `peakamp~`, `onebang`

*Patch contains 23 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectevent.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detectevent.png`
