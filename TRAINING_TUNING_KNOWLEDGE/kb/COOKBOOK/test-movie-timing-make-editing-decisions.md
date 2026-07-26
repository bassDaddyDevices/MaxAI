---
type: cookbook
name: "Test movie timing to make editing decisions"
summary: "You can use the gettime message to ask jit.qt.movie for a report of its video's current time location (in QuickTime time units)."
chapter: "Max"
keywords: ["transport", "jit.qt.movie", "random"]
objects: ["+", "/", "change", "jit.pwindow", "jit.qt.movie", "metro", "random", "route", "sel", "select", "t", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mobileformdecisions.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mobileformdecisions_0.PNG"
---

# Test movie timing to make editing decisions

You can use the *gettime* message to ask **jit.qt.movie** for a report of its video's current time location (in [QuickTime time units](https://docs.cycling74.com/max7/tutorials/jitterchapter99_appendixa)). The report comes out of the right outlet of **jit.qt.movie** as the word *time* followed by the current time. If you send the *gettime* message at regular reliable intervals of time, you can use the resulting time number to test for a particular time (or range of times), and thus can take a particular action in your program at the desired time in a movie.

This can be useful for realtime editing of the movie itself, using the current time location to decide to leap to another location in the movie. In this case, we're assuming that we already know the "[timescale](movie-attributes.md)" of the movie, and that we're synchronizing it with some music with a tempo of 75 beats per minute. So with a little arithmetic, we can figure out the relationship between milliseconds, QuickTime time units, and metric units of the music. In this example, we query (ask for and get) the movie's time every 25 milliseconds, which is every 1/40 of a second, which is 15 QuickTime time units at the timescale of 600, which is every 128th note in the music. And we can calculate that there are 480 time units per beat, and thus 1920 time units in a 4/4 measure of music. We do an integer division by 1920 to convert time units into measures, and thus can detect the downbeat of each measure.

In this example, when we get to the downbeat of measure 17 (i.e., after 16 measures have elapsed), we make a probabilistic decision. Should we go ahead, or should we jump back to a previous place in the movie? The example shows one model for weighted decision making; this model is useful if you have a really small set of choices and really simple probabilities. Here, three choices each have a 1/6 probability of occurring, and a fourth choice (to proceed ahead) has a 3/6 probability of occurring because 3 of the 6 possible random numbers do nothing.

## Objects used

`sel` ×2, `transport`, `random`, `+`, `jit.pwindow`, `t`, `select`, `change`, `/`, `metro`, `route`, `jit.qt.movie`

*Patch contains 36 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mobileformdecisions.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mobileformdecisions_0.PNG`
