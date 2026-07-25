---
type: max
name: "makenote"
summary: "Generate a note-on/note-off pair"
signal: false
url: "https://docs.cycling74.com/reference/makenote/"
package: "Max"
see_also: ["flush", "midiout", "noteout", "nslider", "stripnote", "transport", "xnoteout"]
---
# makenote

Generate a note-on/note-off pair

## Description

Outputs a MIDI note-on message paired with a velocity value followed by a note-off message after a specified amount of time. This allows for generative MIDI output without having to manage note-off generation.

#### Discussion

This object uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax. The interval that the [makenote](https://docs.cycling74.com/reference/makenote) object uses to specify the time between not-on and note-off can be either fixed or tempo-relative (it must be a single-valued). An additional third argument can be used to specify a MIDI output channel (the [makenote](https://docs.cycling74.com/reference/makenote) object will then have four inputs and three outputs).

## Arguments

### velocity[number] optional

Sets an initial velocity value (int or float) to be paired with incoming pitch numbers. If there is no argument, the initial velocity is  0 .

### duration[number] optional

Sets an initial note duration (time before a note-off is sent out), in any of Max's time units. A simple int or float will set the duration in milliseconds. If the second argument is not present, the note-off follows the note-on immediately.

### channel[number] optional

Sets an initial MIDI channel number. If a third argument is used, the [makenote](https://docs.cycling74.com/reference/makenote) object will have an additional fourth inlet (which specifies MIDI channel number) and an additional third outlet (which specifies MIDI output channel).

## Attributes

### duration[Time Value]: 0 ms

The duration that [makenote](https://docs.cycling74.com/reference/makenote) waits before a note-off message is sent out.

### repeatmode[int]

Sets behavior when a note is retriggered. The modes are:

repeatmode 0 (default): There is no pre-specified behavior when when you repeat a pitch before the note-off for that pitch has been sent.

repeatmode 1: If a note is still playing when you retrigger it, the [makenote](https://docs.cycling74.com/reference/makenote) object will send a note-off (velocity 0) message to stop the first note and then send a new note-on message.

repeatmode 2: If a note is still playing when you retrigger it, the [makenote](https://docs.cycling74.com/reference/makenote) object will cancel the scheduled output of the first note - only the last played note will send note-off (velocity 0) message.

repeatmode 3: If a note is still playing when you retrigger it, the [makenote](https://docs.cycling74.com/reference/makenote) object will reschedule the note-off output of the first note without triggering a new note-on message.

repeatmode 4: If a note is still playing when you retrigger it, the [makenote](https://docs.cycling74.com/reference/makenote) object will ignore the retriggered note and leave the note-off time unaffected.

Possible values:

0 = 'Poly'

1 = 'Re-trigger'

2 = 'Stop Last'

3 = 'Update Duration'

4 = 'Ignore'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In first inlet: The number is treated as a pitch value for a MIDI note-on message. It is paired with a velocity value and the numbers are sent out the outlets. After a certain time, a note-off message (a note-on with a velocity of 0) is sent out for that pitch.

In second inlet: The number is stored as a velocity to be paired with pitch numbers received in the left inlet.

In third inlet: The number is stored as the duration that [makenote](https://docs.cycling74.com/reference/makenote) waits before a note-off message is sent out.

In fourth inlet: The number specifies a MIDI output channel. The fourth inlet will only be present if the [makenote](https://docs.cycling74.com/reference/makenote) object is initialized with three arguments.

Arguments:

- input
  [int]

### float

In first inlet: The number is treated as a pitch value for a MIDI note-on message. It is paired with a velocity value and the numbers are sent out the outlets. After a certain time, a note-off message (a note-on with a velocity of 0) is sent out for that pitch.

In second inlet: The number is stored as a velocity to be paired with pitch numbers received in the left inlet.

In third inlet: The number is stored as the duration that [makenote](https://docs.cycling74.com/reference/makenote) waits before a note-off message is sent out.

In fourth inlet: The number specifies a MIDI output channel. The fourth inlet will only be present if the [makenote](https://docs.cycling74.com/reference/makenote) object is initialized with three arguments.

Arguments:

- input
  [float]

### list

In left inlet: The second number is treated as the velocity and is sent out the right outlet. The first number is treated as the pitch and is sent out the left outlet. A corresponding note-off message is sent out later.

If the [makenote](https://docs.cycling74.com/reference/makenote) object is instantiated with three arguments, a four-item list can be used which contains an additional fourth element specifying the MIDI channel number, which is sent out the rightmost outlet of the object.

Arguments:

- input
  [list]

### anything

Performs the same function as  list .

Arguments:

- input
  [list]

### clear

Erases all notes currently held by [makenote](https://docs.cycling74.com/reference/makenote), without sending note-offs.

### clock

The word  clock , followed by the name of an existing  setclock  object, sets the [makenote](https://docs.cycling74.com/reference/makenote) object to be controlled by that  setclock  object rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [makenote](https://docs.cycling74.com/reference/makenote) object back to using Max’s regular millisecond clock.

Arguments:

- clock-name
  [symbol]

### stop

Causes [makenote](https://docs.cycling74.com/reference/makenote) to send out immediate note-offs for all pitches it currently holds.

## Output

### int

Out left outlet: The number received in the left inlet is sent out immediately, paired with a velocity value out the other outlet. After a certain duration, the same number is sent out paired with a velocity of  0 .

Out right outlet: The number in the middle inlet is sent out as a velocity value in conjunction with a pitch value out the left outlet. After a certain duration,  0  is sent out paired with the same pitch.

## See Also

| Name | Description |
| --- | --- |
| [flush](https://docs.cycling74.com/reference/flush) | Output MIDI note-offs for held notes |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [stripnote](https://docs.cycling74.com/reference/stripnote) | Filter out note-off messages |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
