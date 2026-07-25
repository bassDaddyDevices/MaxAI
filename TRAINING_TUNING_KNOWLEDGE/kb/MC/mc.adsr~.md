---
type: mc
name: "mc.adsr~"
summary: "ADSR envelope generator (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.adsr~/"
package: "MC"
see_also: ["function", "line~", "techno~", "transport", "zigzag~"]
---
# mc.adsr~

ADSR envelope generator (multichannel)

## Description

The [adsr~](https://docs.cycling74.com/reference/adsr~) object is an Attack-Decay-Sustain-Release signal controllable by signals. In some situations, a combination of the [function](https://docs.cycling74.com/reference/function) and [line~](https://docs.cycling74.com/reference/line~) objects may be a useful alternative.

#### Discussion

Any non-zero value in the trigger inlet will trigger an envelope with that amplitude. Like an [adsr~](https://docs.cycling74.com/reference/adsr~) triggered by an input float, a zero value represents "note-off" and will begin the release stage. unlike the event-trigger model, a signal-triggered [adsr~](https://docs.cycling74.com/reference/adsr~) must receive a zero before it will retrigger.

The [adsr~](https://docs.cycling74.com/reference/adsr~) object uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax; envelope times can be specified in either fixed or tempo-relative formats.

## Arguments

### attack[float] optional

The initial attack time

### decay[float] optional

The initial decay time

### sustain[float] optional

The initial sustain level

### release[float] optional

The initial release time

## Attributes

### attack[Time Value]: 0 ms

Sets the attack of the ADSR-envelope in milliseconds.

### decay[Time Value]: 0 ms

Sets the decay of the ADSR-envelope in milliseconds.

### legato[int]

Given as input, the word  legato , followed by a 0 or a non-zero number, disables or enables legato mode. If legato mode is enabled, the envelope will not drop to zero in the event of a retrigger while the envelope is active - instead, the envelope ramps to the new amplitude over the attack period.

### maxsustain[float]

Given as input, the word  maxsustain , followed by a float, sets the maximum amount of time that the envelope will remain in the sustain stage. A negative number sets no maximum; the envelope will remain forever in the sustain stage until a note-off is received. To create a simple three-stage sustainless envelope (an ADR), you can use the message maxsustain 0.0.

### release[Time Value]: 0 ms

Sets the release of the ADSR-envelope in milliseconds.

### retrigger[float]

Given as input, the word  retrigger , followed by a float, sets the amount of time taken to ramp down to zero in the event of a retrigger while the envelope is active (the default is 5 milliseconds). This ramping prevents clicking.

### sustain[float]

Sets the sustain of the ADSR-envelope, as a factor of the amplitude. For example, a value of 0.5 means the sustain level will be half of the amplitude height.

### triggermode[int]

The triggermode attributes determines whether the envelope waits for a zero to complete the release phase or plays to the end once triggered.

Possible values:

0 = 'ADSR'
(
Normal ADSR triggering
)
In ADSR mode, the envelope starts when a non-zero signal or float is received and begins the release phase when a zero is reeived.

1 = 'Play to End'
(
Play to End
)
In Play to End mode, the envelope starts and plays the attack, decay and release segments, ignoring further input until the envelope completes.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float

Arguments:

- trigger/ADSR-parameters
  [int]

### float

In left inlet: A non-zero number triggers an envelope with the given amplitude. The envelope will sustain until a zero is input to trigger the release stage, or until another non-zero int retriggers the envelope.

In second inlet: sets the attack time in milliseconds.

In third inlet: sets the decay time in milliseconds.

In fourth inlet: sets the envelope's sustain level, as a factor of the amplitude. For example, a value of 2 means the sustain level will be twice the value of the amplitude height.

In fifth inlet: sets the envelope's release time, in milliseconds.

Arguments:

- trigger/ADSR-parameters
  [float]

### list

A list of four numbers will set the attack, decay, sustain and release values.

Arguments:

- attack
  [float]
- decay
  [float]
- sustain
  [float]
- release
  [float]

### anything

In left inlet: Performs the same function as  list .

Any other inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- attack
  [float]
- decay
  [float]
- sustain
  [float]
- release
  [float]

### signal

In left inlet: A non-zero value triggers an envelope with that value as its amplitude. After the envelope starts, a zero signal value will begin the release phase of the envelope. If triggermode is enabled the envelope is completed fully even if the signal is zero.

In second inlet: sets the attack time in milliseconds.

In third inlet: sets the decay time in milliseconds.

In fourth inlet: sets the envelope's sustain level, as a factor of the amplitude. For example, a value of 0.5 means the sustain level will be half of the amplitude.

In right inlet: sets the release time in milliseconds.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### message

The right outlet sends  mute  messages suitable for managing internal [poly~](https://docs.cycling74.com/reference/poly~) instance muting with the [thispoly~](https://docs.cycling74.com/reference/thispoly~) object.

### message

The fourth outlet responds to query messages for the various attributes (i.e.  getattack ).

### signal

Left outlet: the envelope.

Middle outlet: signals the beginning of an envelope by sending  1  when in the attack, decay, or sustain stages and  0  otherwise (release, retrigger, or inactive). You can use this outlet in conjunction with the [sah~](https://docs.cycling74.com/reference/sah~) object to synchronize pitch (or other information) with the beginning of an envelope with sample accuracy.

## See Also

| Name | Description |
| --- | --- |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [zigzag~](https://docs.cycling74.com/reference/zigzag~) | Linked list function editor |
