---
type: reference
name: "Multichannel Group Messages"
summary: "Multichannel Group Messages — boilerplate shared by many objects"
---
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

### generate

The  generate  message runs the function whose name is stored in the op attribute. Arguments passed to  generate  will be given to the function that is called. Example: if op is set to  deviate ,  generate 50 440  is the same as sending the message  deviate 50 440 .

Arguments:

- low-value
  [float]
- message-name
  [symbol]
- high-value
  [float]

### ease.linear

The MC wrapper provides access to the easing functions found in the Ease Package. These are accessed with message names consisting of  ease.  concatenated with the easing function name. For example, to use the  *in\_out\_circular*  function, send the message  ease.in\_out\_circular .

The  ease  messages generate an non-linear and inclusive range of values across the space of channels. When you use two number arguments, the first value will be the low end of the range and the second will be the high end of the range. For  in\_  and  in\_out\_  functions, this means the low end value will be set for the first channel and the high end will be set for the last channel. For  out\_  function variants, the high end will be set for the first channel and the low end will be set for the last channel.

When the  ease  messages are supplied with three numerical arguments, the first two specify the range as in the two-argument case, but the third argument, which will be constrained between 0 and 1, defines a mid point. Between the first channel and the channel closest to the mid point, the entire range of the function is applied. Between the mid point and the last channel, the range of the function is applied with the values reversed, creating a mirror image. The mirror image is exact when the third argument is 0.5, otherwise it will be biased toward 0 or 1. With a mid point of 1, the result is the same as if the third argument was not supplied at all. With a mid point of 0, the result is the same as if it was entirely reversed. In other words, it's as if the  out\_  version of the function were used instead of the  in\_  version that was originally specified -- or vice versa.

Available messages are:  ease.linear ,  ease.in\_back ,  ease.in\_out\_back ,  ease.out\_back ,  ease.in\_bounce ,  ease.in\_out\_bounce ,  ease.out\_bounce ,  ease.in\_circular ,  ease.in\_out\_circular ,  ease.out\_circular ,  ease.in\_cubic ,  ease.in\_out\_cubic ,  ease.out\_cubic ,  ease.in\_elastic ,  ease.in\_out\_elastic ,  ease.out\_elastic ,  ease.in\_exponential ,  ease.in\_out\_exponential ,  ease.out\_exponential ,  ease.in\_quadratic ,  ease.in\_out\_quadratic ,  ease.out\_quadratic ,  ease.in\_quartic ,  ease.in\_out\_quartic ,  ease.out\_quartic ,  ease.in\_quintic ,  ease.in\_out\_quintic ,  ease.out\_quintic ,  ease.in\_sine ,  ease.in\_out\_sine , and  ease.out\_sine . Refer to the Ease Package documentation for details on these functions and demonstrations of their behavior.

If no message name is provided, a  float  message is used by default.

Arguments:

- low-value
  [float]
- message-name
  [symbol]
- high-value
  [float]
- mid-point
  [float]

### smoothstep

The  smoothstep  function works analogously to the  ease  messages to generate an inclusive non-linear range of values, but uses the  *smoothstep*  function to generate a non-linear ramp. Refer to the documentation of the  ease  messages for more information.

If no message name is provided, a  float  message is used by default.

Arguments:

- low-value
  [float]
- message-name
  [symbol]
- high-value
  [float]
- mid-point
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

### applymessages

The word  applymessages , followed by one or more numbers and/or symbols, sends individual messages
successively to instances in the MC wrapper, starting with the first instance. For example, the message
 applymessages 0 bang  will send the '0' message to the first instance, and the 'bang' message to
the second instance. If there are more instances than arguments to  applymessages ,
the extra instances are unaffected.

Arguments:

- messages
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
