---
type: cookbook
name: "Automated countermelody improviser"
summary: "This patch provides an example of simple interactive improvising program that plays a melody influenced by the notes played by a live performer."
chapter: "Max"
keywords: ["table", "flush", "coll", "line", "algorithmic composition"]
objects: ["%", "*", "-", "change", "coll", "delay", "expr", "flush", "kslider", "line", "notein", "noteout", "pack", "prepend", "select", "stripnote", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pursuit.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pursuit.png"
---

# Automated countermelody improviser

This patch provides an example of simple interactive improvising program that plays a melody influenced by the notes played by a live performer. Based on the most recently received MIDI note, the program chooses a scale to use for its melody, and moves melodically in a straight line toward the pitch and velocity most recently received. The program has only one use of randomness, to make a probabilistic decision. It has a small musical knowledgebase of three scales, and a set of probabilities determining which scale is more appropriate for use at any time.

When a MIDI note comes into the program via the **notein** object, we use a **stripnote** object to suppress the note-off messages, so we're only paying attention to the note-ons. The velocity is used to affect how quickly the program will move from its own most recently played note to the note it has most recently received. Some math in an **expr** object is used to convert the note-on velocity value into a ramp time value for the **line** objects. The pitch value is first used to determine what scale the program should use for its melody, then it is used to determine a destination point for its own melody that is near the received note.

Here's how the note choices are made. There are three **table** objects containing three different musical scales. I call them scales, but one might equally well call them chords. They're based on six-note pitch class sets, each one having a particular harmonic implication. The names of the table objects indicate the chord type, using jazz terminology, Bbm13, Ebm9b13, and F+7b9#9. Thus, the program is biased toward the key of Bb minor. The upper **coll** object contains probabilities for choosing each of the three scales. (Double-click on the **coll** object to see its contents.) Using a **%** object we derive the pitch class of the incoming MIDI note, using the **sel** object we filter out the notes D and E (since those don't seem to imply any particular one of the three possible scales, we just ignore them and continue using whatever scale we have been using), then use the pitch class to select a set of probabilities. Those probabilities are temporarily stored in a small **table**.

The **table** object has a feature that allows it to act as a probability table. When **table** receives a *bang*, it treats its values as relative probabilities, and based on those probabilities it chooses to send out an index number (not the value itself). Thus, index numbers containing higher values tend to be sent out more often, with a likelihood proportional to the value it contains. We use that feature of **table**, along with the probabilities received from the first **coll**, to determine which index to send out––0, 1, or 2. That index is used to choose a message from the second **coll**, which tells another **table** object which scale table it should refer to. As soon as that's done, a destination value is calculated and sent to a **line** object, which begins reading through the table, playing notes of the chosen scale.

Each velocity value the program plays triggers a *bang* to the **flush** object to turn off the previously played note. It also uses the **delay** object to prepare a final *bang* to be sent if no new note is played for ten seconds. The contents of the **coll** and **table** objects are all embedded in the patch (that is, their *embed* attribute is set to 1, so they will "Save Data with Patcher"). Since the **table** objects will also use that name to try to find a file to read in, you might want to include these three files just to avoid unwanted "can't find file" error messages: [Bbm13chord.txt](http://music.arts.uci.edu/dobrian/Music215/S13/MaxPatches/Bbm13chord.txt), [Ebmb13chord.txt](http://music.arts.uci.edu/dobrian/Music215/S13/MaxPatches/Ebmb13chord.txt), and [F+7b9s9chord.txt](http://music.arts.uci.edu/dobrian/Music215/S13/MaxPatches/F+7b9s9chord.txt).

## Objects used

`table` ×5, `t` ×2, `line` ×2, `pack` ×2, `coll` ×2, `kslider`, `noteout`, `expr`, `delay`, `flush`, `prepend`, `select`, `%`, `change`, `*`, `-`, `stripnote`, `notein`

*Patch contains 29 boxes, 34 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pursuit.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pursuit.png`
