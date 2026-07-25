---
type: mc
name: "mc.count~"
summary: "Count samples elapsed  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.count~/"
package: "MC"
see_also: ["index~", "mstosamps~", "sampstoms~", "+=~", "counter"]
---
# mc.count~

Count samples elapsed (multichannel)

## Description

Use the [count~](https://docs.cycling74.com/reference/count~) object count samples elapsed and thus drive processes tightly synchronized to the sample rate. It outputs a signal increasing by 1 for each sample elapsed. It can be set to loop, and can be used to drive objects such as [index~](https://docs.cycling74.com/reference/index~) with sample accuracy.

## Arguments

### initial-value[int]samples optional

Counter initial value

### count-limit[int]samples optional

Set a count limit for a looping counter, or 0 for no count limit. Note that the limit value is never reached.

### enable[int] optional

Specify whether the [count~](https://docs.cycling74.com/reference/count~) object is off (0) or on (1) initially.

### autoreset-state[int] optional

When enabled, the internal counter is reset to the initial value whenever audio is turned on (see the  autoreset  message).

## Attributes

### autoreset[int]

Reset the counter to the initial value when audio turns on

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reset to initial and begin counting

### int

Set initial value, reset, and begin counting

Arguments:

- initial-value
  [int]

### (inlet1)

Set limit value. A value of 0 eliminates the counter limit.

Arguments:

- count-limit
  [int]

### float

Left inlet: Set initial value without reset

Right inlet: Set limit value without reset

Arguments:

- initial-value/count-limit
  [float]

### list

Set initial, limit, enable and autoreset state

Arguments:

- initial-value
  [int]
- count-limit
  [int]
- enable
  [int]
- autoreset-state
  [int]

### min

Set initial value without reset

Arguments:

- initial-count
  [int]

### set

Set initial value without reset

Arguments:

- initial-count
  [int]

### signal

Enable counting with non-zero signal

### stop

Reset to initial value

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

When the audio is first turned on, [count~](https://docs.cycling74.com/reference/count~) always sends out its current initial value. When a  bang  or  int  is received, the count begins increasing from the current initial value.

## See Also

| Name | Description |
| --- | --- |
| [index~](https://docs.cycling74.com/reference/index~) | Read from a buffer~ with no interpolation |
| [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) | Convert milliseconds to samples |
| [sampstoms~](https://docs.cycling74.com/reference/sampstoms~) | Convert time from samples to milliseconds |
| [+=~](https://docs.cycling74.com/reference/plusequals~) | Signal accumulator |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
