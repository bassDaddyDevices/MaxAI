---
type: msp
name: "zigzag~"
summary: "Linked list function editor"
signal: true
url: "https://docs.cycling74.com/reference/zigzag~/"
package: "MSP"
see_also: ["adsr~", "curve~", "kink~", "line~"]
---
# zigzag~

Linked list function editor

## Description

Use [zigzag~](https://docs.cycling74.com/reference/zigzag~) to generate multisegment linear ramps. This object is similar to line~, but retains information about the ramp after it has been output, and allows modification of the list values for the ramp.

#### Discussion

The [zigzag~](https://docs.cycling74.com/reference/zigzag~) object uses a linked list implementation rather than the [line~](https://docs.cycling74.com/reference/line~) object's stack-based implementation, which does not retain information after it has been output. In addition to simply remembering the current "line", the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object lets you modify the list by inserting, deleting, or appending points.

Each element in the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object's linked list has a value (y), and a transition time value (delta-x), which specifies the amount of time over which the transition from one value to another will occur. When [zigzag~](https://docs.cycling74.com/reference/zigzag~) contains a list, this list can be triggered (the starting and ending points can be set and changed), traversed forwards or backwards at different speeds, and looped. The current position in the list can be jumped to, and also held.

## Arguments

### initial-value[int or float] optional

Sets an initial value (y) for the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object.

## Attributes

### loopmode[int]

The word  loopmode , followed by 1, turns on looping.  loopmode 0  turns off looping. By default, looping is off.  loopmode 2  turns on looping in "pendulum" mode, in which the value and time pairs are traversed in an alternating forward and reverse direction. By default, looping is off

Possible values:

0 = 'No Loop'
(
looping off
)
1 = 'Forward'
(
forward looping on
)
2 = 'Palindrome'
(
palindrome looping
)

### maxpoints[int]

Specifies the number of user-defined points for ramps. The defualt value is 2048.

### mode[int]

mode  specifies the way that the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object responds to messages and signal values.

mode 0 (default): When the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object receives a  bang , it will jump to the start point (or end point if our direction is negative) and begin outputting values from there. The time value associated with this jump has its length defined by the  bangdelta  message. The default value for  bangdelta  is  0 . If a signal is connected to the left inlet of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object in this mode, the current index of the list is determined by the signal; any previously set  speed ,  loopmode ,  start , and  end  messages are ignored.

mode 1: behavior is exactly the same as in mode 0 in terms of the effect of a  bang . In mode 1, signal inputs are handled differently. If a signal is connected to the left inlet of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object in mode 1, the input signal functions as a trigger signal; when the slope of the input signal changes from non-negative to negative, the object will be re-triggered as though a  bang  were received.

mode 2: jump to the next index in the list (or the previous index, if the current direction is negative) and begin outputting values from there. The time value associated with this jump has its length defined by the  bangdelta  message. The default value for  bangdelta  is  0 . If a signal is connected to the left inlet of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object in mode 2, the input signal functions as a trigger signal; when the slope of the input signal changes from non-negative to negative, the object will be re-triggered as though a  bang  were received.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: The [zigzag~](https://docs.cycling74.com/reference/zigzag~) object responds to a  bang  message according to its mode of behavior, which is set using the  mode  message.

If the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object is set to mode 0 or mode 1, a  bang  message will cause the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object to go to the start point (or end point if the direction is negative) and begin outputting values from there.

If the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object is set to mode 2, a  bang  message will cause the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object to jump to the next index in the list (or the previous index, if the current direction is negative) and begin outputting values from there.

### int

In left inlet: Converted to float.

In right inlet: Specifies the rate at which the value and time pairs will be output. A value of 1.0 traverses the list forward at normal speed. A playback rate of -1 traverses the list backwards (i.e. in reverse). A value of .5 traverses the linked list at half the normal speed (effectively doubling the delay time values).

(In left inlet: Converted to float.)

Arguments:

- output-rate-coefficient
  [int]

### float

In left inlet: Each element in the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object's linked list is a pair that consists of a target value (y), followed by a second number that specifies a total amount of time in milliseconds (delta-x). In that amount of time, numbers are output regularly in a line from the current index value to the target value. The list  0 0 3.5 500 10 1000  describes a line which begins with a value of 0 at time 0, rises to a value of 3.5 a half second later, and rises again to a value of 10 in 1 second.

In right inlet: Specifies the rate at which the value and time pairs will be output. A value of 1.0 traverses the list forward at normal speed. A playback rate of -1 traverses the list backwards (i.e. in reverse). A value of .5 traverses the linked list at half the normal speed (effectively doubling the delay time values).

Arguments:

- output-rate-coefficient
  [number]

### list

Sets and triggers a function as (value) (ramp-time) pairs to define points in a ramp. Sending a  list  message will immediately trigger the ramp.

Arguments:

- index and event-pair
  [list]

### append

The word append, followed by a list, will add new (value) (ramp-time) pairs to the end of the current list. Sending an  append  message will immediately trigger a ramp only made of the new points.

Arguments:

- value
  [number]
- transition-time
  [number]

### bangdelta

In left inlet: The word  bangdelta , followed by a  float  or  int , specifies the time over which the transition between values occurs when the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object receives a  bang . The default is 0 (i.e., and immediate transition).

Arguments:

- transition-time
  [number]

### bound

In left inlet: The word  bound , followed by two numbers which specify start and end indices (where 0 is the first element), sets the start and end points of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object's linked list.

Arguments:

- start-index
  [int]
- end-index
  [int]

### delete

In left inlet: The word  delete , followed by an  int  which specifies a position (where 0 is the first element), will delete the value and time pair associated with that index from the list. A  list  can follow the  delete  message if you want to remove multiple event pairs from the list. The message  delete 0  will remove the current first value and time pair from the list; the second value and time pair (i.e. the value and time pair at index 1) will now become the first values in the list.

Arguments:

- index
  [int/list]

### dump

In left inlet: The word  dump  will cause a list consisting of all currently stored value and time pairs in the form

 index value delta-x

to be sent out the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object's 3rd outlet.

### end

In left inlet: The word  end , followed by an  int  which specifies a position (where 0 is the first element), sets the point at which the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object ceases its output when triggered by a  bang .

Arguments:

- end-index
  [int]

### insert

In left inlet: The word  insert , followed by an  int  which specifies a position (where 0 is the first element) and a list, will insert new event pair(s) before the index specified. The message  insert 0 5 500  will create a new first entry in the linked list (at the 0 index) with a value of 5 and a time of 500 milliseconds.

Arguments:

- index and event-pair
  [list]

### jump

In left inlet: The word  jump , followed by an  int  which specifies a position (where 0 is the first element), skips to that point in the linked list and begins outputting value and time pairs from that point. An optional int can be used to specify the time, in milliseconds, over which the transition to the next value will occur (the default value is  0 ).

Arguments:

- index and transition-time
  [list]

### jumpend

In left inlet: The word  jumpend  causes the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object to immediately jump forward to the last value (y)on the linked list.

Arguments:

- transition-time
  [number]

### jumpstart

In left inlet: The word  jumpstart  causes the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object to immediately jump to the first value (y)on the linked list and then output the currently selected list or selected portion of the list.

Arguments:

- transition-time
  [number]

### line

The word  line  followed by a list of breakpoints in line~ format (as output by the [function](https://docs.cycling74.com/reference/function) object) defines a ramp for [zigzag~](https://docs.cycling74.com/reference/zigzag~). The list should consist of alternating value, time pairs.

Arguments:

- breakpoints
  [list]

### next

In left inlet: The word  next  skips to the next value and time pair in the linked list. An optional  int  can be used to specify the time over which the transition to the next value will occur (the default value is  0 ).

Arguments:

- transition-time
  [number]

### prev

In left inlet: The word  prev  skips to the previous value and time pair in the linked list. An optional  int  can be used to specify the time over which the transition to the previous value will occur (the default value is  0 ).

Arguments:

- transition-time
  [number]

### print

In left inlet: The word  print  causes the current status and contents of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object to be printed out in the Max Console. The output consists of the current mode, loopmode, the start, end, and loop length of the current list, the pendulum state, and moving value of the object, followed by a listing of each index in the linked list, along with its y and delta-x values.

### ramptime

In left inlet: The word  ramptime , followed by a number, sets the ramp time, in milliseconds, at which the output signal will arrive at the target value.

Arguments:

- transition-time
  [number]

### set

Prepending the word  set  to user-defined value and  ramptime  messages allows for setting [zigzag~](https://docs.cycling74.com/reference/zigzag~) ramps without triggering playback.

Arguments:

- index
  [int]
- value
  [number]
- transition-time
  [number]

### setindex

In left inlet: The word  setindex , followed by an  int  which specifies a position (where 0 is the first element) and a pair of floats, sets the target value (y) and transition time amounts (delta-x) for the specified position in the list.

Arguments:

- index
  [int]
- value
  [number]
- transition-time
  [number]

### setline

The word  setline  followed by a list of breakpoints in line~ format (as output by the [function](https://docs.cycling74.com/reference/function) object) defines a ramp for [zigzag~](https://docs.cycling74.com/reference/zigzag~) without triggering it. In order to trigger the ramp, a bang needs to be sent to the first inlet. The list should consist of alternating value, time pairs.

Arguments:

- breakpoints
  [list]

### signal

In left inlet: The [zigzag~](https://docs.cycling74.com/reference/zigzag~) object responds to signal values according to its mode of behavior, which is set using the  mode  message.

If the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object is set to  mode 0 , the current index of the list is determined by the input signal value; any previously set  speed ,  loopmode ,  start , and  end  messages will be ignored.

If a signal is connected to the left inlet of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object in  mode 1 , the input signal functions as a trigger signal; when the slope of the input signal changes from non-negative to negative, the object will be re-triggered as though a  bang  were received.

If a signal is connected to the left inlet of the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object in  mode 2 , the input signal functions as a trigger signal; when the slope of the input signal changes from non-negative to negative, the object will be re-triggered as though a  bang  were received.

In right inlet: A signal value specifies the rate at which the value and time pairs will be output. A value of 1.0 traverses the list forward at normal speed. A playback rate of -1 traverses the list backwards (i.e. in reverse). A signal value of .5 traverses the linked list at half the normal speed (effectively doubling the delay time values). The value of the input signal is sampled once per input vector. Therefore, any periodic frequency modulation with a period which is greater than the current sample rate/(2\*vector\_size) will alias.

### skip

In left inlet: The word  skip , followed by a positive or negative number, will skip the specified number of indices in the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object's linked list. Positive number values skip forward, and negative values skip backward. An optional integer can be used to specify the time over which the transition to the next or previous value will occur (the default value is  0 ).

Arguments:

- number-of-skipped-indices and transition-time
  [list]

### speed

In left inlet: The word  speed , followed by a positive or negative floating-point number, specifies the rate at which the value and time pairs will be output. The message  speed 1.0  traverses the list forward at normal speed,  speed -1  traverses the list backwards,  speed .5  traverses the linked list at half the normal speed (effectively doubling the delay time values).

Arguments:

- output-rate
  [number]

### start

In left inlet: The word  start , followed by an  int  which specifies a position (where 0 is the first element), sets the point at which the [zigzag~](https://docs.cycling74.com/reference/zigzag~) object begins its output when triggered by a  bang .

Arguments:

- start-index
  [number]

### stop

Sending the  stop  message causes the ramp to stop at the current position.

## Output

### bang

Out right outlet: When looping, a  bang  message is sent out when the loop (re-trigger) point is reached. A  bang  is also sent out when [zigzag~](https://docs.cycling74.com/reference/zigzag~) has finished generating all of its ramps.

### list

Out 3rd outlet: In response to the dump message, a list consisting of all currently stored value and time pairs in the form

 index value (y) delta-x

is output.

### signal

Out 1st outlet: The current target value, or a ramp moving toward the target value according to the currently stored value and the target time.

Out 2nd outlet: The current index.

## See Also

| Name | Description |
| --- | --- |
| [adsr~](https://docs.cycling74.com/reference/adsr~) | ADSR envelope generator |
| [curve~](https://docs.cycling74.com/reference/curve~) | Exponential ramp generator |
| [kink~](https://docs.cycling74.com/reference/kink~) | Distort a sawtooth waveform |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
