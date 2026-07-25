---
type: mc
name: "mc.stutter~"
summary: "Signal capture buffer for granular playback  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.stutter~/"
package: "MC"
see_also: ["buffer~", "phasor~", "record~"]
---
# mc.stutter~

Signal capture buffer for granular playback (multichannel)

## Description

The [stutter~](https://docs.cycling74.com/reference/stutter~) object keeps a history of its signal input (left inlet). Upon receiving an int (left inlet), it copies that number of the most recently received samples to another playback buffer. This buffer may be cycled through by its phase, 0-1 (right inlet). On receiving a  bang  (left inlet) or a trigger signal (middle inlet), the last integer number of samples are copied to the playback buffer.

## Arguments

### max-buffer-length[int]samples optional

The maximum buffer length, in samples. This determines the memory size of the record buffer. Parts of the record buffer are copied to the playback buffer when the object is triggered.

### initial-buffer-size[int]samples optional

The initial buffer size, in samples, to copy from the record to the playback buffer upon receiving a trigger.

### trigger-polarity[int] optional

The polarity to use for accepting a trigger signal in the middle inlet. If the argument is greater than 0, [stutter~](https://docs.cycling74.com/reference/stutter~) accepts a positive trigger; otherwise [stutter~](https://docs.cycling74.com/reference/stutter~) accepts a negative trigger.

### number-of-copied-samples[int]samples optional

The number of samples which are copied from the record buffer to the playback buffer each iteration of the perform loop (the signal vector size). A larger value will decrease the [stutter~](https://docs.cycling74.com/reference/stutter~) object's memory requirements and increase the CPU requirements.

### number-of-outputs[int] optional

An optional fifth argument allows you to specify multiple independent signal outputs the [stutter~](https://docs.cycling74.com/reference/stutter~) object will use when playing back from the playback buffer. The default is 1, and the maximum is 30. The number of phase signal inputs to the [stutter~](https://docs.cycling74.com/reference/stutter~) object is also determined by this argument.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: A  bang  causes the last buffer of recorded samples to be copied to the playback buffer. You can use a  bang  instead of or in conjunction with the middle inlet trigger signal.

### int

In left inlet: Specifies the size (in samples) of the playback buffer. This can be any number up to the maximum memory determined by the first argument to [stutter~](https://docs.cycling74.com/reference/stutter~).

Arguments:

- playback-buffer-size
  [int]

### ampvar

The word  ampvar , followed by a float, specifies a random amplitude variation in the output signal(s). The default is 0 (no variation).

Arguments:

- random-amplitude-variation
  [float]

### clear

Clears the object's sample memory.

### dropout

The word  dropout , followed by a float, determines the percentage chance of a playback signal dropping out (i.e. 'gapping' or not playing). The default is 0 (no gapping).

Arguments:

- drop-out-chance
  [float]

### maxsize

The word  maxsize , followed by a number, sets the maximum buffer size, in samples.

Arguments:

- max-buffer-size
  [int]

### polarity

The word  polarity , followed by a zero or one, changes the trigger polarity of [stutter~](https://docs.cycling74.com/reference/stutter~) to negative or positive, respectively.

Arguments:

- trigger-polarity
  [int]

### print

The word  print  will cause the object to print a detailed listing of all of its parameter settings within the Max Console.

### repeat

The word  repeat , followed by a float, determines the percentage change of the record buffer not being copied to the playback buffer so that the previous playback buffer is repeated. The default is 0 (no repeat).

Arguments:

- repeat-chance
  [float]

### setbuf

The word  setbuf , followed by arguments for a buffer name, a sample offset, and a channel, copies the specified samples to the named [buffer~](https://docs.cycling74.com/reference/buffer~) object. Note: [stutter~](https://docs.cycling74.com/reference/stutter~) always uses its internal buffer as the playback buffer; the copied samples can be sent to a named [buffer~](https://docs.cycling74.com/reference/buffer~) object for use in some other way, if desired. The time required to move the specified amount of memory to the buffer is n/m, there n is the number of samples being copied and m is the fourth argument to the [stutter~](https://docs.cycling74.com/reference/stutter~) object.

Arguments:

- buffer-name
  [symbol]
- sample-offset
  [int]
- channel-number
  [int]

### signal

In left inlet: Signals coming into the left inlet are stored in a record buffer, where they can be copied into a playback buffer and used as a playback source.

In middle inlet: Accepts a trigger signal, which can be specified to be positive or negative. When the signal changes polarity in the correct direction, samples recorded from the left inlet are copied to the playback buffer.

In right and successive inlets: A phase signal input in the range of 0-1 for each inlet controls the output speed of the playback buffer for that inlet. The number of phase inlets in a [stutter~](https://docs.cycling74.com/reference/stutter~) object is set using the fifth argument; the default is a single inlet. Specifying multiple phase inlets allows you to specify multiple playback points in the sampled buffer.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

All outlets: The [stutter~](https://docs.cycling74.com/reference/stutter~) object's outlets produce a signal from the playback buffer, the location and speed of which is determined by the phase input for that playback outlet. The number of outlets is determined by the fifth argument to the [stutter~](https://docs.cycling74.com/reference/stutter~) object.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [record~](https://docs.cycling74.com/reference/record~) | Record sound into a buffer |
