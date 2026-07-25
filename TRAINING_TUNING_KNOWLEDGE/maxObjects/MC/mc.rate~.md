---
type: mc
name: "mc.rate~"
summary: "Time-scale the output of a phasor~  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.rate~/"
package: "MC"
see_also: ["phasor~", "sync~", "techno~"]
---
# mc.rate~

Time-scale the output of a phasor~ (multichannel)

## Description

The [rate~](https://docs.cycling74.com/reference/rate~) object accepts an input signal from a [phasor~](https://docs.cycling74.com/reference/phasor~) and time scales it by a multiplier received as a float in its right inlet. Numbers less than 1 create several ramps per phase cycle. Numbers greater than 1 create fewer ramps. This can be useful for implementing a [phasor~](https://docs.cycling74.com/reference/phasor~)-synchronized system in MSP.

## Arguments

### multiplier[float] optional

The multiplier value used to scale the output signal.

### sync-mode-flag[int] optional

Sets the sync mode (see the  sync  message).

## Attributes

### sync[int]

Sets the sync mode of the [rate~](https://docs.cycling74.com/reference/rate~) object. The sync mode determines whether or not the [rate~](https://docs.cycling74.com/reference/rate~)"in" will stay in phase with the input signal, and the method used for synchronization. When the output of the [rate~](https://docs.cycling74.com/reference/rate~) object is "in phase," the input and output signals align precisely at the least common multiple of their periods (i.e., they pass through zero and begin a new cycle at precisely the same time). If the signals are in phase, and a new multiplier value is received, the [rate~](https://docs.cycling74.com/reference/rate~) object changes the frequency of its output ramp accordingly. However, the change in multiplier values means that the two signals may be out of phase. The [rate~](https://docs.cycling74.com/reference/rate~) object handles this situation in one of three different ways, depending on the sync mode

Possible values:

0 = 'cycle'
(
Set the cycle mode for sync
)
The arguments  @sync 0  or  @sync cycle  set the cycle mode of the [rate~](https://docs.cycling74.com/reference/rate~) object. In cycle mode, the [rate~](https://docs.cycling74.com/reference/rate~) object does not change the phase of its output until the end of the current cycle. When the input ramp reaches its peak and starts over from zero, the [rate~](https://docs.cycling74.com/reference/rate~) object immediately restarts the output ramp, causing a discontinuity in the output signal, and immediate phase synchronization.

1 = 'lock'
(
Set the lock mode for sync
)
The arguments  @sync 1  or  @sync lock  set the lock mode of the [rate~](https://docs.cycling74.com/reference/rate~) object. In sync lock mode, the [rate~](https://docs.cycling74.com/reference/rate~) object performs synchronization whenever a new multiplier is received. The [rate~](https://docs.cycling74.com/reference/rate~) object immediately calculates the proper ramp position which corresponds to being "in phase" with the new multiplier value, and jumps to that position.

2 = 'off'
(
Disable the sync mode
)
The arguments  @sync 2  or  @sync off  disables the sync mode of the [rate~](https://docs.cycling74.com/reference/rate~) object (the default mode). In this mode [rate~](https://docs.cycling74.com/reference/rate~) never responds to phase differences; when a new multiplier is received, the [rate~](https://docs.cycling74.com/reference/rate~) object adjusts the speed of its output ramps and they continue without interruption. Since this mode never introduces a discontinuous jump in the ramp signal, it may be useful if phase is unimportant.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Sets the phase value for the [rate~](https://docs.cycling74.com/reference/rate~) object's signal output.

In right inlet: The signal multiplier value used to scale the [phasor~](https://docs.cycling74.com/reference/phasor~) signal input. Integer values greater than 1 create fewer ramps. This can be useful for synchronizing multiple processes to a single reference [phasor~](https://docs.cycling74.com/reference/phasor~) object, preserving their ratio relationships.

Arguments:

- phase/multiplier
  [int]

### float

In left inlet: Sets the phase value for the [rate~](https://docs.cycling74.com/reference/rate~) object's signal output.

In right inlet: The signal multiplier value used to scale the [phasor~](https://docs.cycling74.com/reference/phasor~) signal input. Float values less than 1.0 create several ramps per phase cycle. Numbers greater than 1.0 create fewer ramps. This can be useful for synchronizing multiple processes to a single reference [phasor~](https://docs.cycling74.com/reference/phasor~) object, preserving their ratio relationships.

Arguments:

- phase/multiplier
  [float]

### goto

In left inlet: The word  goto , followed by a float, causes the [rate~](https://docs.cycling74.com/reference/rate~) object to jump immediately to the specified value. An optional second argument may be used to specify the time at which to jump to the value (e.g.,  goto 1.0 .5  will output a value of 1.0 at the halfway point of the [phasor~](https://docs.cycling74.com/reference/phasor~) object's input signal ramp).

Arguments:

- jump-to-value
  [float]
- time-of-action
  [float]

### oneshot

The message  oneshot 1  will turn on "oneshot"-mode whereby [rate~](https://docs.cycling74.com/reference/rate~) outputs only one cycle of a ramp. The message  oneshot 0  will turn "oneshot"-mode off whereby [rate~](https://docs.cycling74.com/reference/rate~) can cycle through ramps continuously when instructed to do so (i.e. by the  sync cycle  message).

Arguments:

- loop-flag (0 or nonzero)
  [int]

### reset

In left inlet: The word  reset  will lock the output to the input on its next reset. It is equivalent to the message  goto 0. 0 .

### signal

In left inlet: An input signal from a [phasor~](https://docs.cycling74.com/reference/phasor~) object.

In right inlet: The [rate~](https://docs.cycling74.com/reference/rate~) object time scales the input signal from a [phasor~](https://docs.cycling74.com/reference/phasor~) by a multiplier value. The multiplier value can be specified as an argument or received as a float to the [rate~](https://docs.cycling74.com/reference/rate~) object's right inlet.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The synchronized signal is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [sync~](https://docs.cycling74.com/reference/sync~) | Synchronize MSP with an external source |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
