---
type: mc
name: "mc.sash~"
summary: "Sample and Hold with Memory (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.sash~/"
package: "MC"
see_also: ["gate~", "phasor~", "sah~", "subdiv~", "thresh~"]
---
# mc.sash~

Sample and Hold with Memory (multichannel)

## Description

The [sash~](https://docs.cycling74.com/reference/sash~) object performs sample-and-hold operations on an input signal but unlike the [sah~](https://docs.cycling74.com/reference/sah~) includes a buffer (the extra "s" in [sash~](https://docs.cycling74.com/reference/sash~) is for "storage") that can holds samples of the input. Sample capture and sample output are triggered independently of each other, and [sash~](https://docs.cycling74.com/reference/sash~) includes a variety of methods for selecting the output sample from the memory buffer.

## Arguments

None.

## Attributes

### advancelevel[float]

Sets the level of the signal connected to the right inlet that will cause the next value in the memory buffer to be used. The next index into the buffer is chosen according to the dir attribute.

### dir[int]

Determines how the next memory buffer index is chosen when the advance trigger signal exceeds the advance level.

Possible values:

0 = 'Forward'
(
Increment forward
)
1 = 'Reverse'
(
Increment backward
)
2 = 'Random'
(
Choose index randomly with replacement
)
3 = 'Urn'
(
Choose index randomly without replacement
)

### maxsize[int]

Sets the maximum possible value of the size attribute. The default is 1000 samples. Note that maxsize can only be changed as a typed-in argument.

### mode[int]

Determines the interpretation of the advance trigger signal

Possible values:

0 = 'Level'
(
Signal exceeds a threshold level
)
1 = 'Index'
(
Integer value of the advance trigger signal
)
2 = 'Subdivision'
(
Phasor subdivision of the advance trigger signal
)
When the mode attribute is set to Subdivision, the index into the memory buffer is determined by dividing 1 into the current value of the size attribute. For example, if the size is 2, advance trigger signal values below 0.5 will play the first memory buffer sample (index 0), and advance trigger signal values above 0.5 will play the second memory buffer sample (index 1).

### samplelevel[float]

Sets the level of the signal connected to the middle inlet that will cause the next value in the left inlet to be sampled and recorded into the memory buffer.

### size[int]

Sets the current size of the memory buffer used for recording and output. The size must be greater than 0 and less than or equal to the maxsize attribute.

### Multichannel Group Attributes

### chans[int]

The chans attribute sets the number of channels and instances in the MC wrapper object. To define a fixed number of channels regardless of what is connected to the object, set chans via a typed-in argument, for example typing  mc.cycle~ @chans 100  would create 100 instances of a [cycle~](https://docs.cycling74.com/reference/cycle~) object inside the MC wrapper. If chans is 0, the wrapper object will auto-adapt to the number of channels in its input multichannel signals (using the maximum of all connected signals). If an object does not have any multichannel signals connected to its inlets, the chans attribute will need to have a non-zero value if you want more than one instance.

If chans is changed while the audio is on, the number of instances will not change until audio is restarted. However, if chans is reduced while the audio is on, any extra channels will no longer process audio and will output a zero signal.

### initialvalues[list]

The initialvalues attribute only applies to object creation time so it must be set via a typed-in argument. initialvalues sets the first (and only the first) initial argument for successive instances in the MC wrapper. For example, typing  mc.cycle~ @chans 4 @initialvalues 50 60 70 80  would assign an initial frequency to the [cycle~](https://docs.cycling74.com/reference/cycle~) instances inside the wrapper. The first instance would be assigned a frequency of 50, the second a frequency of 60, the third 70, and the fourth 80. Note that initialvalues does not determine the actual instance count; this can be done using the chans attribute. If there are more instances than elements for the initialvalues attribute, those instances are instantiated with the default value.

To set a default value of an argument for all instances, type it as an argument before any typed-in attributes. For example, modifying our example above:  mc.cycle~ 100 @chans 10 @initialvalues 50 60 70 80 . In this example, the first four instances are set as before, but the next six are created with a frequency argument of 100.

To change instance values or attributes after the wrapper object has been created, use the  setvalue ,  applyvalues , or  replicatevalues  messages.

### values[list]

You can use values as an alternate name for the initialvalues attribute.

### replicate[int]

When replicate is enabled, input single-channel or multichannel signals containing fewer channels than the number instances in the MC wrapper object are repeated to fill all input channels. For example, when replicate is enabled and you connect a two-channel multichannel signal to the input of an MC wrapper object with four instances, channel 1 of the input will be repeated to channel 3, and channel 2 of the input will be repeated to channel 4. If replicate were disabled, channels 3 and 4 of the input would be set to zero.

### target[int]

The target attribute sets an index for targeting specific wrapper instances. Subsequent messages are directed to an individual instance instead of all instances. It is strongly recommended you use the more reliable  setvalue  message instead of the target attribute. The voice index of  setvalue  will override the current setting of target. When target is 0, incoming messages are sent to all instances. When target is -1, incoming messages do nothing. Note that target only affects messages, not setting attribute values.

### usebusymap[int]

When usebusymap is enabled, the MC wrapper controls whether individual instances process audio using a  *busy map*  maintained by either an [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) or [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) object. When a channel in the busy map is marked as "free" or "released" no audio processing occurs by any instance on the channel corresponding to the voice index. When usebusymap is disabled, instances in the MC wrapper process audio at all times. This will also be true if usebusymap is enabled and there is no local or named busy map available. (See the busymapname attribute for a description of local and named busy maps). For brevity the name bz can also be used.

### zero[int]

When the zero attribute is enabled, channels in the MC wrapper due to the use of a busy map output zero signals. To save a small amount of CPU at the risk of loud and unpleasant noises due to uncleared signal data, you can disable zero. In this case, disabled channels in the MC wrapper do nothing to their output channels. If usebusymap is disabled or there is no active local or named busy map available, the setting of the zero attribute has no effect.

Conveniently, when usebusymap is enabled in [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) object, disabled channels are not mixed to the output. When unused signals from wrapped objects with zero disabled feed into [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~), they will be ignored, reducing the risk of unpleasantness getting past the mix output.

### busymapname[symbol]

When the usebusymap attribute is enabled, an MC wrapper object uses the local busy map of any [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) or [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) in the same patcher by default. To use a named global busy map instead, set the busymapname attribute to the desired name. For brevity the name @bzname can also be used.

### voiceprob[float]

The voiceprob attribute is used when employing the $ or \* arguments to the  setvalue  message. It determines the probability that the  setvalue  message will be sent. For example, if voiceprob is 0.9, there is a 90% chance the setvalue message will be sent to a randomly chosen voice.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to float

### float

A float in the middle inlet sets the sample trigger level. A float in the right set the level for advancing to the next output value from the memory buffer.

### list

A list of values is assigned to the memory buffer. This is useful when there is no signal connected to the sample trigger (middle) inlet. The size of the list can not be larger than the buffer size (maxsize attribute), and the new output size is set to the number of items in the list.

### signal

A signal in the left inlet is sampled, triggered by the value of the signal in the middle inlet. The signal connected to the right inlet triggers [sash~](https://docs.cycling74.com/reference/sash~) to advance to the next output sample from the memory buffer. This happens when sample exceeds the the advancelevel when the mode is set to Advance. When the mode is set to Index, the output sample changes when the integer value of the input changes. When the mode is set to Subdivision, the output sample changes when the input value, divided by the current size, reaches the next divisor.

### Multichannel Group Messages

### deviate

Generate a random value for each channel around a center value. An optional number after the center value specifies the upper range size so it can be different from the lower range size.

Example:  deviate 100 cutoff 1000  will generate random values for the cutoff attribute of the objects in the wrapper centered around 1000 Hz (between 900 and 1100 Hz).  deviate 100 1000 200  sends  float  messages to the objects in the wrapper with random values between 900 and 1200.

If no message name is provided, a  float  message is used by default.

Arguments:

- range
  [float]
- message-name
  [symbol]
- center-value
  [float]
- upper-range
  [float]

### exponential

The  exponential  message generates an exponential series. The first argument is  *N*  and the second
(optional) argument is  *K*  in the following expression:

 *K \* exp(-1 \* N \* channel)*  where channel starts at 0 for the first channel.

If the second argument is not present the default value is 1. Example:  exponential 1 10  would generate, for four channels, values of 10, 3.678, 1.353, and 0.498.  exponential -1 2  would generate 2, 5.437, 14.78, and 40.17.

If no message name is provided, a  float  message is used by default.

Arguments:

- exponent
  [float]
- message-name
  [symbol]
- multiplier
  [float]

### scaledexponential

The  scaledexponential  message generates an exponential series with the exponent scaled by the total number of channels. The first argument is  *N*  and the second (optional) argument is  *K*  in the following expression:

 *K \* exp(-1 \* N \* (channel / num\_channels)*  where channel starts at 0 for the first channel.

If the second argument is not present the default value is 1. Example:  exponential -1 2  would generate, for six channels, values of 2, 2.363, 2.791, 3.297, 3.895, 4.602.  scaledexponential -1 2  for four channels would generate 2, 2.568, 3.297, 4.324.  scaledexponential  provides a way to keep the range of the exponential series roughly the same independent of the number of channels.

If no message name is provided, a  float  message is used by default.

Arguments:

- exponent
  [float]
- message-name
  [symbol]
- base
  [float]

### increment

The  increment  message generates a range of increasing values for each channel. The range starts at the second argument and increments each channel's value by the first argument. If no message name is provided then a  float  message is used by default.

Example:  increment 5 2  for four channels would generate 2, 7, 12, and 17.

If no message name is provided, a  float  message is used by default.

Arguments:

- increment-amount
  [float]
- message-name
  [symbol]
- start-value
  [float]

### harmonic

The  harmonic  message generates a harmonic series using the second argument as the fundamental
frequency ( *F* ) and the first argument as a multiplier ( *N* ) in the following expression:

 *F \* (1 + N \* channel)*  where channel starts at 0 for the first channel.

Example:  harmonic 1 440  for five channels would generate 440, 880, 1320, 1760, and 2200.  harmonic 0.5 440  for
four channels would generate 440, 660, 880, and 1100.

If no message name is provided, a  float  message is used by default.

Arguments:

- multiplier
  [float]
- message-name
  [symbol]
- fundamental
  [float]

### subharmonic

The  subharmonic  message generates a subharmonic series using the second argument as the fundamental
frequency ( *F* ) and the first argument as a multiplier ( *N* ) in the following expression:

 *F / (1 + N \* channel)*  where channel starts at 0 for the first channel.

Example:  subharmonic 1 440  for five channels would generate 440, 220, 146.7, and 110.

If no message name is provided, a  float  message is used by default.

Arguments:

- multiplier
  [float]
- message-name
  [symbol]
- fundamental
  [float]

### spread

The  spread  message generates a range of values distributed to each channel.
The first boundary value is included in the range outputs, but the second boundary value is not (see  spreadinclusive ,  spreadexclusive , and  spreadincludesecond  for other options).

Example:  spread 0 10  for four channels would generate 0, 2.5, 5, and 7.5.

If no message name is provided, a  float  message is used by default.

By default the generated values are linearly distributed. If the optional exponent argument is present and greater than 0, the generated values are exponentially distributed.

Arguments:

- boundary-value
  [float]
- message-name
  [symbol]
- other-boundary-value
  [float]
- exponent
  [float]

### spreadinclusive

The  spreadinclusive  message generates a range of values distributed to each channel.
Both the first and second boundary values are included in the range outputs.

Example:  spreadinclusive 0 10  for four channels would generate 0, 3.33, 6.66, and 10.

If no message name is provided, a  float  message is used by default.

By default the generated values are linearly distributed. If the optional exponent argument is present and greater than 0, the generated values are exponentially distributed.

Arguments:

- boundary-value
  [float]
- message-name
  [symbol]
- other-boundary-value
  [float]
- exponent
  [float]

### spreadexclusive

The  spreadexclusive  message generates a range of values distributed to each channel.
Neither the first and second boundary values are included in the range outputs.

Example:  spreadexclusive 0 10  for four channels would generate 2, 4, 6, and 8.

If no message name is provided, a  float  message is used by default.

By default the generated values are linearly distributed. If the optional exponent argument is present and greater than 0, the generated values are exponentially distributed.

Arguments:

- boundary-value
  [float]
- message-name
  [symbol]
- other-boundary-value
  [float]
- exponent
  [float]

### spreadincludefirst

The  spreadincludefirst  message generates a range of values distributed to each channel. It is the same as the  spread  message. The first boundary value is included in the range outputs, but the second boundary value is not.

Example:  spreadincludefirst 0 10  for four channels would generate 0, 2.5, 5, and 7.5.

If no message name is provided, a  float  message is used by default.

By default the generated values are linearly distributed. If the optional exponent argument is present and greater than 0, the generated values are exponentially distributed.

Arguments:

- boundary-value
  [float]
- message-name
  [symbol]
- other-boundary-value
  [float]
- exponent
  [float]

### spreadincludesecond

The  spreadincludesecond  message generates a range of values distributed to each channel. The first boundary value is not included in the range outputs, but the second boundary value is included.

Example:  spreadincludesecond 0 10  for four channels would generate 2.5, 5, 7.5, and 10.

If no message name is provided, a  float  message is used by default.

By default the generated values are linearly distributed. If the optional exponent argument is present and greater than 0, the generated values are exponentially distributed.

Arguments:

- boundary-value
  [float]
- message-name
  [symbol]
- other-boundary-value
  [float]
- exponent
  [float]

### decide

The  decide  message generates a uniformly distributed random value between 0 and 1 for each channel; if the value is less than the probability value set by the first argument, the second argument is assigned to the channel. If the random value is greater than the probability value, 0 is asigned to the channel. (If a second argument is not present, 1 is used by default.)

Example:  decide 0 10  for four channels would generate 0, 0, 0, 0 because the probability of generating a 1 is zero.  decide 0.5 10  could generate 10, 0, 0, 10 if the randomly generated values exceeded 0.5 for the first and fourth channels.

If no message name is provided, a  float  message is used by default.

Arguments:

- probability
  [float]
- message-name
  [symbol]
- value
  [float]

### randomrange

The  randomrange  message generates a uniformly distributed random range of values for all channels between the first argument and the second argument.

If no message name is provided, a  float  message is used by default.

Arguments:

- low-value
  [float]
- message-name
  [symbol]
- high-value
  [float]

### setvalue

The word  setvalue , followed by both a channel index (starting at 1) and any message that can be sent to the wrapped object, sends the message to an individual instance within the MC wrapper.  setvalue 0 , followed by a message, sends the message to all instances. The  setvalue  message can be used in any inlet.

Instead of a number, the  setvalue  message can also take a symbol indicating that the target channel index should be randomly chosen:

- setvalue \*  will choose a channel randomly but avoid duplicate choices until all channels have been chosen (similar to the Max [urn](https://docs.cycling74.com/reference/urn) object). Before chosing a channel,  \*  will also decide whether to send the message according to the current value of the voiceprob attribute. If voiceprob is 0.1, there is a 10% chance of sending the message. If voiceprob is 0.9, there is a 90% chance of sending the message.
- setvalue +  will choose a channel randomly but avoid duplicate choices until all channels have been chosen (similar to the Max [urn](https://docs.cycling74.com/reference/urn) object). Unlike  \*  it will always send the message.
- setvalue $  will choose a channel randomly (similar to the Max [random](https://docs.cycling74.com/reference/random) object). Before chosing a channel,  $  will also decide whether to send the message according to the current value of the voiceprob attribute. If voiceprob is 0.1, there is a 10% chance of sending the message. If voiceprob is 0.9, there is a 90% chance of sending the message.
- setvalue #  will choose a channel randomly (similar to the Max [random](https://docs.cycling74.com/reference/random) object). Unlike  $  it will always send the message.

Arguments:

- channel
  [int]
- message
  [symbol]
- message arguments
  [list]

### setvaluerange

The word  setvaluerange , followed by a low and high channel index (starting at 1) and any message that can be sent to the wrapped object, sends the message to the specified range of channels.

Example:  setvaluerange 1 4 50 , sends the message 50 to channels 1 - 4. If the second argument is -1, the message is sent to all subsequent channels. For example,  setvaluerange 2 -1 50  sends the message 50 to all channels between 2 and the current number of voices.

Note: the random channel selection feature using  \* ,  + ,  $ , and  #  does not work with the  setvaluerange  message.

Arguments:

- low channel
  [int]
- high channel
  [int]
- message
  [symbol]
- message arguments
  [list]

### applyvalues

The word  applyvalues , followed by an optional message name and one or more
message arguments, sends individual values in the arguments successively to instances
in the MC wrapper, starting with the first instance. For example, the message
 applyvalues 4 5 6  will send 4 to the first instance, 5 to the second instance,
and 6 to the third instance. If there are more instances than arguments to  applyvalues ,
the extra instances are unaffected.

Arguments:

- message-name
  [symbol]
- values
  [list]

### replicatevalues

The word  replicatevalues , followed by an optional message name and one or more message
arguments, sends individual values in the arguments successively to instances in the MC wrapper,
starting with the first instance. Unlike  applyvalues , the  replicatevalues  message
continues sending values to successive instances, restarting with the first element, if it runs
out of arguments to send. For example,  replicatevalues 4 5  to an MC wrapper object with
three instances will send 4 to the first instance, 5 to the second instance, and 4 to the third
instance.

Arguments:

- message-name
  [symbol]
- values
  [list]

### applynvalues

Whereas  applyvalues  can only set one value, the message  applynvalues  permits sending
a message or setting an attribute with multiple values to instances in the MC wrapper, starting with
the first instance. This is helpful for messages that require multiple values, such as the list
message to [wave~](https://docs.cycling74.com/reference/wave~) to set start/end points. The message syntax is [applynvalues N value1,
value2 etc.] where N is the number of values to set for each instance. For example, the message
 applynvalues 2 500 600 900 1000  will send 500 600 to the first instance and 900 1000 to
the second instance. If there are more instances than specified in  applynvalues ,
the extra instances are unaffected.

Arguments:

- message
  [int]
- values
  [list]

### replicatenvalues

Whereas  replicatevalues  can only set one value, the message  replicatenvalues  permits sending
a message or setting an attribute with multiple values to instances in the MC wrapper, starting with
the first instance. This is helpful for messages that require multiple values, such as the list
message to [wave~](https://docs.cycling74.com/reference/wave~) to set start/end points. The message syntax is [replicatenvalues N value1,
value2 etc.] where N is the number of values to set for each instance. Unlike  applynvalues ,
the  replicatenvalues  message continues sending values to successive instances, restarting with
the first group, if it runs out of arguments to send. For example,  replicatenvalues 2 500 600 900 1000
to an MC wrapper object with three instances will send 500 600 to the first instance, 900 1000 to the
second instance, and 500 600 to the third instance.

Arguments:

- message
  [int]
- values
  [list]

## See Also

| Name | Description |
| --- | --- |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [sah~](https://docs.cycling74.com/reference/sah~) | Sample and hold a signal |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [thresh~](https://docs.cycling74.com/reference/thresh~) | Detect signal above a set level |
