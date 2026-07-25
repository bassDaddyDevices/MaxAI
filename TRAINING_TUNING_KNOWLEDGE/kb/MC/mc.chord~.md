---
type: mc
name: "mc.chord~"
summary: "Store and Recall Signal Values Associated with an Index"
signal: true
url: "https://docs.cycling74.com/reference/mc.chord~/"
package: "MC"
see_also: ["coll", "mc.op~", "mc.snowphasor~"]
---
# mc.chord~

Store and Recall Signal Values Associated with an Index

## Description

The [mc.chord~](https://docs.cycling74.com/reference/mc.chord~) object is something like a version of the Max [coll](https://docs.cycling74.com/reference/coll) object that generates audio signals. You can store lists (which you can think of as  *chords* ) of numbers associated with a unique index, then recall your lists with messages or signals. When recalled, list values are assigned to channels in a multi-channel signal according to one of several allocation modes.

## Arguments

### channels[int] optional

An  int  supplied as an argument sets the initial output channel count.

## Attributes

### allocmode[int]

Determine how list values are allocated to channels

Possible values:

0 = 'Lowest'
(
Start at first channel
)
WHen allocmode is set to Lowest (0), list items are output starting with the first item allocated to the first output channel.

1 = 'Highest'
(
Start at last channel
)
WHen allocmode is set to Highest (1), list items are output starting with the first item allocated to the last output channel, the second item to the second-to-last channel, etc.

2 = 'Cyclic'
(
Assign to least recently used channels
)
When allocmode is set to Cyclic (2), list items are assigned to least recently used channels in ascending order.

3 = 'Random'
(
Assign randomly
)
When allocmode is set to Random (3), list items are assigned to randomly chosen channels.

### busymapname[symbol]

Alias:
bzname

Sets the name of a busy map (within an [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) or [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) object)to use in determining channel allocation. When there is an active busy map (usebusymap is enabled), items will be assigned to channels accoding to the current allocmode but only non-busy channels will be used. The value  none  resets the busy map to the default busy map for the patcher.

### chans[int]

Sets the number of channels in the two [mc.chord~](https://docs.cycling74.com/reference/mc.chord~) multi-channel outputs. If the audio is on, the change will take place the next time the audio is restarted.

### embed[int]

When embed is enabled, list and index data currently stored inside [mc.chord~](https://docs.cycling74.com/reference/mc.chord~) will be saved in its patcher and recalled when the patcher is reopened.

### extendmode[int]

Sets how non-existent indices are matched or ignored

Possible values:

0 = 'Nearest'
(
Match Nearest
)
When an  int  is received that does not match an existing index, the list associated with the closest index will be output.

1 = 'Zero'
(
Output zero
)
When an  int  is received that does not match an existing index, zero signals will be output.

2 = 'Ignore'
(
Do nothing
)
When an  int  is received that does not match an existing index, no change in the output occurs.

### inputmode[int]

Determines how a signal value change is mapped to an output

Possible values:

0 = 'Lookup'
(
Treat signal value as index
)
When inputmode is set to Lookup (0), the signal value is converted to an  int  by truncation. When the  int  value changes, the value is used to match a stored list.

1 = 'Increment Index'
(
Signal changes output next
)
When inputmode is set to Increment Index (1), any change in the input signal according to the current value of triggermode causes the next stored list to be output in a cyclic fashion.

### offmode[int]

Determines handling of output channels with inactive values

Possible values:

0 = 'Zero'
(
Zero inactive outputs
)
When offmode is set to Zero (0), inactive output channels are set to zero.

1 = 'Hold'

When offmode is set to Hold (1), inactive output channels retain their previous value. You can determine which output channels are active by using the corresponding channel's signal value within the multi-channel signal output from the second outlet of [mc.chord~](https://docs.cycling74.com/reference/mc.chord~).

### triggermode[int]

Determines a signal change for increment index inputmode

Possible values:

0 = 'Zero to Non-Zero'
(
Trigger changes on zero to non-zero transitions
)
When triggermode is set to Zero to Non-Zero (0), signal changes for incrementing the index of the output (when inputmode is set to Increment Index) are defined as the previous sample being zero and the current sample being non-zero.

1 = 'Change'
(
Any signal change
)
When triggermode is set to Change (1), signal changes for incrementing the index of the output (when inputmode is set to Increment Index) are defined as any difference between the value of the previous and current samples in the input signal.

### usebusymap[int]

Alias:
bz

When usebusymap is enabled, [mc.chord~](https://docs.cycling74.com/reference/mc.chord~) will only allocate output values to non-busy channels of the current busy map.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  outputs the next stored list as a multi-channel signal out the left outlet; repeated  bang  messages will cycle through all stored lists.

### int

An  int  outputs the list associated with the number as a multi-channel signal out the left outlet. If no list was stored at this number, zero signals are output.

### float

Converted to int

### list

list  stores the items starting at the second value at an index specified by the first value. Example:  5 30 40 50  will store the list  30 40 50  at index 5.

### clear

The  clear  message clears all lists stored in the object. To delete an individual list using its associated index, use  delete .

### delete

The word  delete  followed by an index deletes a list of values associated with that index.

### dictionary

When [mc.chord~](https://docs.cycling74.com/reference/mc.chord~) receives a  dictionary  in the proper format, it will replace all stored lists with those in the dictionary. Data must be in the form of an array of dictionaries associated with the key  data . Each dictionary has the key  index  with the index to associate with the list, followed by a list of values associated with the key  values .

Arguments:

- name
  [symbol]

### signal

When inputmode is set to Lookup (0), the signal value is truncated to an integer. When this integer value changes, [mc.chord~](https://docs.cycling74.com/reference/mc.chord~) checks whether it matches an index for a stored list; if so, it outputs the associated list as a multi-channel signal.

When inputmode is set to Increment Index (1), any change in the value of the input signal will cause the next stored list to be output in a cyclic fashion.

### store

The word  store  followed by a list argument, stores the items in the list starting at the second value at an index specified by the first value. Example:  store 5 30 40 50  will store the list  30 40 50  at index 5.

Arguments:

- values
  [list]

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [mc.op~](https://docs.cycling74.com/reference/mc.op~) | Apply arithmetic operators to a multichannel signal |
| [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) | Control a Population of Phasors |
