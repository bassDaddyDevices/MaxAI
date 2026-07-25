---
type: mc
name: "mc.makelist"
summary: "Create a list from non-signal output of MC objects"
signal: false
url: "https://docs.cycling74.com/reference/mc.makelist/"
package: "MC"
see_also: ["Processing Events from MC Objects", "MC Event Objects", "Polyphony Using mc.poly~", "mc.route", "mc.target"]
---
# mc.makelist

Create a list from non-signal output of MC objects

## Description

The [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) object creates a list of values whose size is determined by the highest voice number it receives in its right inlet or specified by the value of its voices attribute.

## Arguments

None.

## Attributes

### fixed[int]

When the fixed attribute is enabled and the voices attribute is non-zero, all list output will be the size set by the value of the voices attribute. If fixed is not enabled, output lists are determined by the values received before the list is triggered as well as the triggering details of the mode attribute.

If the fixed attribute is enabled and the voices attribute is non-zero, any voice number received in the right inlet will cause subsequent input in the middle inlet to be ignored until a new voice number in range is received.

### mode[symbol]

The  mode  attribute determines how [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) outputs its list in response to incoming values.

Possible values:

'passive'
(
passive mode
)
Lists are output only when any message is received at the left inlet. The  passive  mode is useful when you want to decouple list output from incoming values.

'pak'
(
passive mode
)
Any value arriving at the middle inlet will trigger an output (default value of the mode attribute).

'buddy'
(
buddy mode
)
The  buddy  mode (named for the [buddy](https://docs.cycling74.com/reference/buddy) object) outputs a list when at least one value for each list position has been received since the last output. In order to work properly in  buddy  mode, [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) needs an initial value for its voices attribute so it knows how many voices to keep track of.

'auto'
(
auto mode
)
The  auto  mode outputs a list immediately after a voice number received in the right inlet repeats for the first time after the last list output. This mode is useful when the list size might change over time.

'hitrig'
(
hitrig mode
)
The  hitrig  mode outputs a list immediately after a value for the highest voice number (as determined by the value of voices attribute) is received.

### voices[int]

Alias:
chans

The voices attribute sets the maximum voice number [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) will monitor. If the fixed attribute is enabled and the voices attribute is non-zero, the value of voices determines the size of the output list. Values not received are set to zero in the output list.

If the mode attribute is set to  hitrig , the voices attribute sets the voice index that will always trigger list output. (This is true whether or not fixed is enabled.)

If the fixed attribute is enabled and the voices attribute is non-zero, any voice number received in the right inlet will cause subsequent input in the middle inlet to be ignored until a new voice number in range is received.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Left inlet triggers output.

### int

Left inlet triggers output, middle inlet sets value of list at current voice number position, right inlet sets voice number for next value received in the middle inlet.

Arguments:

- value
  [int]

### float

Left inlet triggers output, middle inlet sets value of list at current voice number position, right inlet sets voice number for next value received in the middle inlet.

Arguments:

- value
  [float]

### list

Left inlet triggers output, middle inlet sets value of list at current voice number position using the first element in the input list, right inlet sets voice number for next value received in the middle inlet using the first element in the input list.

Arguments:

- value
  [list]

### anything

Left inlet triggers output, middle inlet sets value of list at current voice number position using the first element in the input list, right inlet sets voice number for next value received in the middle inlet using the first element in the input list.

Arguments:

- value
  [list]

### clear

Sending the clear message to the left inlet clears all values stored in the object's voices.

### voice

When sent to the middle or ight inlets, the word  voice , followed by a number, sets the position in the list where the next value received in the middle inlet will be stored.

Arguments:

- index
  [int]

## See Also

| Name | Description |
| --- | --- |
| [Processing Events from MC Objects](https://docs.cycling74.com/userguide/mc/mc_events_newfunctions) | Processing Events from MC Objects |
| [MC Event Objects](https://docs.cycling74.com/userguide/mc/mc_events_newobjects) | MC Event Objects |
| [Polyphony Using mc.poly~](https://docs.cycling74.com/userguide/mc/mc_poly_newfeatures) | Polyphony Using mc.poly~ |
| [mc.route](https://docs.cycling74.com/reference/mc.route) | Direct output of messages based on an index received |
| [mc.target](https://docs.cycling74.com/reference/mc.target) | Format messages to control MC objects |
