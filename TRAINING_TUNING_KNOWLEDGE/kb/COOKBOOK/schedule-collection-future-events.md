---
type: cookbook
name: "Schedule a collection of future events"
summary: "In Max there are many ways to schedule an event to occur at a certain time in the future, using delay, pipe, or timepoint, for example."
chapter: "Max"
keywords: ["schedule", "score", "qlist", "timepoint", "delay", "pipe"]
objects: ["coll", "delay", "pipe", "qlist", "sel", "t", "timepoint", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/qlistandtimepointlist_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/qlistandtimepointlist_0.png"
---

# Schedule a collection of future events

In Max there are many ways to schedule an event to occur at a certain time in the future, using **delay**, **pipe**, or **timepoint**, for example. What if you want to schedule a whole collection of triggers or messages to occur at different specific points in time? Here are a few approaches.

In the first method, we store messages in order in a **coll**, and in each message we include a “delta time”—the delay before the next event should occur. That delay time is used to wait before triggering a *next* message to the **coll**. In this example the delta time is the only thing in the message, but you could actually use any message as long as it has a delta time in it, and use that delta time to schedule the subsequent *next* message.

The second method uses the **qlist** object, which has an automatic playback mode that is triggered by a *bang* message. For each item in the **qlist** that begins with a number, that number will be treated as a delay time for the rest of the message when in automatic playback mode. When **qlist** receives a *bang*, it sends out, in order, each message that begins with a number, using that number as the number of milliseconds to delay from the preceding message that was sent out.

Unlike the **delay** object, which can delay only a *bang*, and only one *bang* at a time, the **pipe** object can delay multiple messages. So, if you want to, you can send **pipe** a whole lot of messages at once, each tagged with a delay time at the end. In that sort of usage, each delay time would in effect become a “start time” relative to the moment that the messages were all sent in. Note that **pipe** has to be initialized with an argument for each item it will be asked to delay, so this method is practical only if each message you want to delay will be in the same format. In this example, we use **pipe** in its simplest form, delaying single integers.

If you want to sequence a trigger to occur at a specific moment in a musical timeline of bars, beats, and units (or in raw ticks, 1/480ths of a quarter note), you can use the **timepoint** object, controlled by **transport**. Each **timepoint** object can hold only one time point at a time, but you can store an ordered collection of desired time points in a **coll**, and then keep loading a new time point from the **coll** into the **timepoint** object each time **timepoint** sends out a trigger. Each output from **timepoint** is just a *bang*. Although it’s not demonstrated in this example, you could store any messages you want in the **coll**, with each one time-tagged with its time point in bars-beats-units as shown here, and each time a message comes out of the **coll** you could put the message in a **message** object and put the time point portion of it in the **timepoint**. Then, when the **timepoint** sends its output, it could trigger the **message** and also trigger a *next* message to the **coll**.

Each of these four methods plays the same rhythm. In the case of the **delay** and **qlist** examples, times are “delta time”, the interval between messages. In the case of the **pipe** and **timepoint** examples, times are “start time” relative to a single starting point in time. Which method you use depends on your preference and which is more suitable to your particular purpose.

## Objects used

`coll` ×3, `pipe`, `sel`, `timepoint`, `transport`, `t`, `qlist`, `delay`

*Patch contains 29 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/qlistandtimepointlist_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/qlistandtimepointlist_0.png`
