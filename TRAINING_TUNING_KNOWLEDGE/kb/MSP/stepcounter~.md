---
type: msp
name: "stepcounter~"
summary: "Count signal jumps in a sequence"
signal: true
url: "https://docs.cycling74.com/reference/stepcounter~/"
package: "MSP"
see_also: ["stepdiv~", "stepfun~", "phasor~", "subdiv~", "click~", "stepcounter"]
---
# stepcounter~

Count signal jumps in a sequence

## Description

The [stepcounter~](https://docs.cycling74.com/reference/stepcounter~) object uses signal jumps -- impulses and/or phasor resets -- to advance through a sequence of count values. The signal outputs of [stepcounter~](https://docs.cycling74.com/reference/stepcounter~) can be used to generate a sequence of durations from a regular signal input pulse, such as is provided by the [phasor~](https://docs.cycling74.com/reference/phasor~) object.

## Arguments

None.

## Attributes

### direction[int]: 0

The direction attribute permits customizing how the input signal is analyzed for advancing the count.

Possible values:

0 = 'Both'
(
Advance the count for both positive and negative jumps
)
1 = 'Up'
(
Advance the count only for positive jumps
)
Setting direction to Up is useful when expecting phasors with negative frequency

2 = 'Down'
(
Advance the count only for negative jumps
)
Setting direction to Down is useful when expecting phasors with positive frequency

### seq[atom]

A list of one or more integer values representing a sequence of counter values. For example  2 1 3  will count to 2, then 1, then 3. The current maximum sequence size is 1024.

### startmode[int]: 1

When startmode is set to 1, [stepcounter~](https://docs.cycling74.com/reference/stepcounter~) outputs an impulse at the moment the first signal jump is detected in its inlet after starting or receiving the  reset  message. When startmode is 0, [stepcounter~](https://docs.cycling74.com/reference/stepcounter~) waits until the first count value has been reached.

### syncupdate[int]: 0

The syncupdate attribute determines how changes in the sequence (via changing the seq attribute) happen when audio is on.

Possible values:

0 = 'Off'
(
Sequence updates immediately
)
1 = 'After Step'
(
Sequence updates after the counter advances to the next step
)
2 = 'After Sequence'
(
Sequence updates after the current sequence completes
)

### thresh[float]: 0.75

Sets the difference between successive samples that will advance the count. The default is 0.75.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### reset

The  reset  message will reset the current count and step values to zero.

### signal

To drive the counter, conncet a signal that will jump in value such as from the [click~](https://docs.cycling74.com/reference/click~) or [phasor~](https://docs.cycling74.com/reference/phasor~) objects.

## See Also

| Name | Description |
| --- | --- |
| [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) | Generate Phasors for Each Step of a Function |
| [stepfun~](https://docs.cycling74.com/reference/stepfun~) | Generate a Function Sequenced by Input Phasors |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [click~](https://docs.cycling74.com/reference/click~) | Create an impulse |
| [stepcounter](https://docs.cycling74.com/reference/stepcounter) | Count messages in a sequence |
