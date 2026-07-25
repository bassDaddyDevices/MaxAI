---
type: mc
name: "mc.assign"
summary: "Assign Messages to MC Objects"
signal: false
url: "https://docs.cycling74.com/reference/mc.assign/"
package: "MC"
see_also: ["MC Event Objects", "Processing Events from MC Objects", "mc.target", "mc.makelist", "mc.route"]
---
# mc.assign

Assign Messages to MC Objects

## Description

The [mc.assign](https://docs.cycling74.com/reference/mc.assign) object assigns MC channels to incoming messages (numbers, lists, and symbols) according to patterns of channels and delays you define.

#### Discussion

The [mc.assign](https://docs.cycling74.com/reference/mc.assign) object has a pattern attribute that defines how an incoming message is passed on to a connected MC object in the form of  setvalue  messages. The pattern uses a small set of symbols to describe how it behaves in response to an incoming message. The [mc.assign](https://docs.cycling74.com/reference/mc.assign) object's mode attribute determines how incoming messages are handled by the pattern.

When the mode is set to Step, incoming messages advance through the pattern one step at a time. When the mode mode is set to Normal, [mc.assign](https://docs.cycling74.com/reference/mc.assign) plays through the entire pattern for each incoming message. When the mode is set to Listiter,  list  messages are broken up into individual numbers. For example, an incoming list message  50 60 70  with a pattern of  2 3  would produce three messages:  setvalue 2 50 ,  setvalue 3 60 , and  setvalue 2 70 .
Here is a description of the behavior of each of the available pattern elements:

- *number*  (int) in a pattern always sends the message to the specified channel. If the pattern was  2 3 4  an incoming message would generate  setvalue  messages to channels 2, 3, and 4.
- The  **|**  (vertical bar) symbol starts and ends a "chord" which sends an incoming message to multiple channels. For example, to send the incoming message to channels 2 and 3 simultaneously, the pattern would be  | 2 3 | . This simultaneous behavior will happen in all settings of the mode attribute.
- An  **x**  in a pattern skips the message and does not produce any output.
- An  **\***  (asterisk) in a pattern chooses the channel randomly. It can also choose to skip a message. The probability that  **\***  will output an incoming message is set by the density attribute. If the density is set to 0.9, a  **\***  in a pattern will output the message an average of 90% of the time (and skip the message 10% of the time). The  **\***  element does not repeat until all channels have been chosen. In other words it behaves like the Max [urn](https://docs.cycling74.com/reference/urn) object. (Compare with the  **$**  described below.)
- **+**  (plus sign) in a pattern chooses the channel randomly without repeating along the lines of  **\***  but unlike  **\*** ,  **+**  never skips a message.
- **$**  (dollar sign) in a pattern chooses the channel randomly. It can also choose to skip a message. The probability that  **$**  will output an incoming message is set by the density attribute. If the density is set to 0.1, a  **$**  in a pattern will output the message an average of 10% of the time (and skip the message 90% of the time). Unlike the  **\***  element,  **$**  may repeat values. In other words it behaves like the Max [random](https://docs.cycling74.com/reference/random) object.
- **#**  (pound sign) in a pattern chooses the channel randomly like the  **$**  element, but unlike  **$** ,  **#**  never skips a message.
- The  **^**  (circumflex) in a pattern cycles through channels in ascending order. For example, if an [mc.assign](https://docs.cycling74.com/reference/mc.assign) object with 4 channels contained the pattern  ^ 1 , it would output incoming messages on channels 1, 1, 2, 1, 3, 1, 4, 1 before repeating.

## Arguments

None.

## Attributes

### chans[int]

The chans attribute determines the maximum value that the random or cyclic pattern elements will generate. However, chans will not constrain literal numbers contained in a pattern.

### delays[atom]

The delays attribute sets a repeating pattern of delay times used when iterating through a chord in a pattern. For example, if delays is set to  100 200  and there is a four-item chord in a pattern (such as  | 1 2 3 4 | ), an incoming messages will output on channel 1 immediately, then output on channel 2 100ms later, then output on channel 3 200ms after that, then finally output on channel 4 100ms after that (because the delay pattern repeats). To clear the delays attribute and output all messages in a chord simulataneously, send the message  delays  with no arguments or the word  none .

### density[float]

Determines the probability of playing an event when a pattern element is a  **\***  or  **$** . When density is set to 0.9, there is a 90% chance an incoming message will be sent out and 10% chance it will be skipped.

### mode[int]

The mode attribute determines how incoming messages are handled by the current pattern and delays.

Possible values:

0 = 'Normal'
(
Play Complete Patterns
)
Each incoming message progresses through the complete pattern.

1 = 'Step'
(
Step Through Patterns
)
Each incoming message uses one element of the current pattern, advancing to the next message to be used on the next incoming message.

2 = 'Listiter'
(
Iterate Through Incoming Lists
)
Each incoming message progresses through the complete pattern. Groups of pattern elements (within vertical bars) are broken into individual numbers; the pattern advances, outputting one list element at a time until the both end of the list and the end of the pattern are reached. If the pattern is shorter than the list, it will repeat from the beginning. If the list is shorter than the pattern it will repeat from the beginning.

### pattern[atom]

Determines a cyclical pattern of channel assignments. The pattern attribute consists of channel numbers or symbolic elements that generate cyclical or random channel values (see discussion above for details). The [mc.assign](https://docs.cycling74.com/reference/mc.assign) object always has a non-empty pattern attribute; the default pattern is  1 2 3 4 5 6 . To clear the pattern, set the pattern attribute to  none  or send the message  pattern  with no arguments.

### pos[int]

The pos attribute is the current position within the pattern. Changes to the position will mostly be ignored if a pattern is currently generating output messages.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message is repeated to the left outlet of [mc.assign](https://docs.cycling74.com/reference/mc.assign) preceded by the word  setvalue  and the channel number determined by the current pattern.

### int

A number is repeated to the left outlet of [mc.assign](https://docs.cycling74.com/reference/mc.assign) preceded by the word  setvalue  and the channel number determined by the current pattern.

### float

A number is repeated to the left outlet of [mc.assign](https://docs.cycling74.com/reference/mc.assign) preceded by the word  setvalue  and the channel number determined by the current pattern.

### list

A list is repeated to the left outlet of [mc.assign](https://docs.cycling74.com/reference/mc.assign) preceded by the word  setvalue  and the channel number determined by the current pattern.

### anything

A message is repeated to the left outlet of [mc.assign](https://docs.cycling74.com/reference/mc.assign) preceded by the word  setvalue  and the channel number determined by the current pattern.

## See Also

| Name | Description |
| --- | --- |
| [MC Event Objects](https://docs.cycling74.com/userguide/mc/mc_events_newobjects) | MC Event Objects |
| [Processing Events from MC Objects](https://docs.cycling74.com/userguide/mc/mc_events_newfunctions) | Processing Events from MC Objects |
| [mc.target](https://docs.cycling74.com/reference/mc.target) | Format messages to control MC objects |
| [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) | Create a list from non-signal output of MC objects |
| [mc.route](https://docs.cycling74.com/reference/mc.route) | Direct output of messages based on an index received |
