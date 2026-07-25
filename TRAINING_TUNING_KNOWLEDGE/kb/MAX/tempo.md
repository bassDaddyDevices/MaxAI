---
type: max
name: "tempo"
summary: "Output numbers at a metronomic tempo"
signal: false
url: "https://docs.cycling74.com/reference/tempo/"
package: "Max"
see_also: ["clocker", "metro", "setclock"]
---
# tempo

Output numbers at a metronomic tempo

## Description

Produces metronomic output controllable in beats per minute, and with specifiable whole-note divisions.

## Arguments

### tempo[int or float] optional

The first argument sets an initial tempo, from 5 to 300 beats per minute. If there is no argument, the initial tempo is 120 beats per minute. The second argument is the beat multiplier and is set to  1  by default. The third argument sets an initial rhythmic value of the output, from a whole note ( 1 ) to a 64th note triplet ( 96 ). If the argument is not present, the initial value is  16 .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Starts the [tempo](https://docs.cycling74.com/reference/tempo) object's metronome process, or restarts it if [tempo](https://docs.cycling74.com/reference/tempo) is already on.

### int

Converted to  float .

Arguments:

- input
  [int]

### float

In left inlet: If the number is not 0, it has the same effect as bang. If the number is 0, it has the same effect as stop.

In 2nd inlet: The number is stored as the tempo, in beats per minute (quarter notes per minute).

In 3rd inlet: The number is a beat multiplier, which can lengthen the amount of time taken for one beat. It slows the tempo down by a factor. For example, a multiplier of  2  will make [tempo](https://docs.cycling74.com/reference/tempo) send out its output half as fast.

In right inlet: The number is the rhythmic value sent out by [tempo](https://docs.cycling74.com/reference/tempo), specified as a fraction of a whole note. For example, the number 8 causes [tempo](https://docs.cycling74.com/reference/tempo) to output eighth notes, relative to the specified (quarter note) tempo. The numbers sent out the outlet cycle continuously between 0 and the number 1 less than the rhythmic value. The divisions of a whole note must be between 1 and 96.

Arguments:

- input
  [float]

### clock

The word  clock , followed by the name of an existing  setclock  object, sets the [tempo](https://docs.cycling74.com/reference/tempo) object to be controlled by that  setclock  object rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [tempo](https://docs.cycling74.com/reference/tempo) object back to using Max’s regular millisecond clock.

Arguments:

- name
  [symbol]

### stop

In left inlet: Stops [tempo](https://docs.cycling74.com/reference/tempo).

### tempo

In left inlet: The word  tempo , followed by a float, sets the current tempo to the number.

Arguments:

- tempo
  [list]

## Output

### int

When [tempo](https://docs.cycling74.com/reference/tempo) is started it outputs numbers in a continuous cycle from 0 to the number 1 less than the specified rhythmic value. The speed at which the numbers are sent out is determined by the tempo (quarter note beats per minute) and the rhythmic value of the output (fraction of a whole note).

## See Also

| Name | Description |
| --- | --- |
| [clocker](https://docs.cycling74.com/reference/clocker) | Report elapsed time, at regular intervals |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [setclock](https://docs.cycling74.com/reference/setclock) | Create and control an alternative clock |
