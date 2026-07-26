---
type: cookbook
name: "Storing and recalling multiple pattr values"
summary: "In order for this example to work properly, you should first download the file called twocloudspresets.json and save it with that name somewhere in the Max file search path."
chapter: "Max"
keywords: ["pattr", "pattrforward", "pattrstorage", "preset"]
objects: ["!/", "+", "makenote", "metro", "noteout", "pack", "pattr", "pattrforward", "pattrstorage", "pgmout", "random", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo6.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo6_03.png"
---

# Storing and recalling multiple pattr values

[In order for this example to work properly, you should first download the file called [twocloudspresets.json](http://music.arts.uci.edu/dobrian/maxcookbook/file/twocloudspresetsjson#overlay-context=storing-and-recalling-multiple-pattr-values) and save it with that name somewhere in the Max file search path.]

The **pattrstorage** object allows you to store and recall the states of any and all **pattr** objects in the patch or its subpatches. Each set of states is stored in a numbered "preset", and **pattrstorage** can store as many presets as you'd like. The presets can then all be saved in a separate file, in JSON format, and can be loaded in when the patch is loaded. Thus, we can recall any of a number of states for the entire patch at any time. An additional, and very powerful, feature of **pattrstorage** is that it can interpolate between two different states.

For this demonstration, I made a subpatch called "twoclouds" that generates two streams of MIDI notes. (They're really just two motorhythmic melodies of randomly-chosen pitches. I call them "clouds" because when the melodies are very fast the random behavior is reminiscent of the random movement of particles in a compressed gas.) The parameters that can be controlled are the rate of the notes (notes per second), the loudness (MIDI velocity), the timbre (MIDI program number), and pitch register, which is specified by height (the lowest pitch that can be chosen) and range (how far above the minimum the pitch might be). There is also a **pattr** bound to the on/off toggle switch, so that the process can be turned on and off remotely. Note that the UI objects attached to the **pattr**s do not have scripting names, but they are bound to the **pattr** by the patch cord coming from the **pattr**'s middle inlet. This allows you to see the value of each **pattr**, and also to modify the contents of each **pattr** by changing the UI object.

We can store the current state of all the patch's **pattr** objects in **pattrstorage** by sending **pattrstorage** a *store* message specifying the preset number where we want it to keep the data. In the main patch, we use a **pack** object to construct the *store* message. This allows you to choose a preset number, and then click on a button to trigger the *store* message. (The fact that you have to explicitly click on the button after having specified the preset number in order for anything to be stored helps prevent accidentally overwriting previously-stored presets. If you were simply to use a **number box** attached to a **message box** saying *store $1*, every single number from the **number box** would cause a preset to be stored.) To recall a preset, all you have to do is provide **pattrstorage** the number (int or float) of the preset you want to recall.

The preset file "twocloudspresets.json" contains five presets. Use the **number box** labeled "recall preset #" to choose a preset from 1 to 5. You should see the UI objects in the subpatch change accordingly, showing the values that have been recalled for each **pattr**. If you don't see that, perhaps the preset file was not loaded properly into the**pattrstorage**. (When the patch is first loaded, **pattrstorage** uses its own name to look for a .json file of the same name, but if it can't find such a file, it will contain no presets.) You can read in a preset file by sending **pattrstorage** a *read* message. You can also create new presets, if you'd like, by using the UI objects in the subpatch to change the **pattr** values the way you want them, then storing that data in a **pattrstorage** preset (presumably in presets 6 and higher). You can then write the presets to a new file with the *write* message, or directly to the same file with a *writeagain* message.

One of the most interesting aspects of **pattrstorage** is its ability to calculate **pattr** data that is somewhere in between two presets, using a process of interpolation between the values in two presets. You can specify an interpolation between two adjacent preset numbers just by using a *float* value with a fractional part. For example, to get data that is right between the values of presets 1 and 2, you could send **pattrstorage** the number *1.5*. Try using the *float* **number box** labeled "interpolate between adjacent presets" to try this out.

If you want to interpolate between non-adjacently numbered presets, the syntax is a bit more complicated. The message should start with the word *recall* followed by one preset number (let's think of it as preset A) and then another preset number (we'll think of that as preset B) and then a value from 0. to 1. specifying the location between preset A and preset B. A value of *0* is preset A, *1* is preset B, and intermediate values are some degree of the way from A to B. In this patch, you can specify the two presets between which you want to interpolate, and you can then drag on the **number box** labeled "interpolation between preset A and preset B", from 0. to 1., to trigger well-formed *recall* messages to **pattrstorage**.

You can see the current value of each **pattr** by double-clicking on the **pattrstorage** object, which opens a "Client Objects" window. Try that. If you want to, you can even double-click on the data values in the client window to type in new values. You can see that you also have a choice of what type of interpolation you want between presets for each **pattr**. (See the reference page for a description of the different types of interpolation.) Since interpolating between different MIDI program numbers would mean hearing the timbre of every intermediate program number, interpolation doesn't make much sense for those **pattr**s, so we have set the interpolation for those items to "none". In the leftmost column of the client window, you can also enable and disable the effect of the **pattrstorage** object on each **pattr**. Notice that we have disabled **pattrstorage**'s control of the **pattr *onoff*** object in the "twoclouds" subpatch, because we don't want that to be affected by preset changes. We'll control that separately by another means.

In the main patch, you see yet another useful object, **pattrforward**. By sending **pattrforward** the word *send* followed by the name of a **pattr**, you can set the destination for that **pattrforward** object. Then any subsequent messages to **pattrforward** will be forwarded to the named destination. So in our case, each time we click on the **message box**es saying *0* or *1*, the message will be forwarded to the **pattr *onoff*** object in the "twoclouds" subpatch. This shows yet another way to communicate remotely between main patch and subpatch.

Try out a few of the presets, try interpolating between presets, and if you'd like, try creating, storing, and recalling new presets of your own making.

## Objects used

`pattr` ×11, `+` ×4, `pack` ×2, `pgmout` ×2, `noteout` ×2, `makenote` ×2, `random` ×2, `metro` ×2, `!/` ×2, `t`, `pattrstorage`, `pattrforward`

*Patch contains 66 boxes, 58 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pattrdemo6.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pattrDemo6_03.png`
