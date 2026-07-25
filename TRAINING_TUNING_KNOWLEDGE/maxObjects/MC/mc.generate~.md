---
type: mc
name: "mc.generate~"
summary: "Generate Values for a Range of Channels"
signal: true
url: "https://docs.cycling74.com/reference/mc.generate~/"
package: "MC"
---
# mc.generate~

Generate Values for a Range of Channels

## Description

The [mc.generate~](https://docs.cycling74.com/reference/mc.generate~) object allows signal-rate updating of MC Wrapper features such as  deviate ,  spread , and  harmonic  as a trigger signal or parameter inputs change. One wrapper message is assigned as an operator.

## Arguments

### initial-parameter-1[float] optional

Initial value for parameter 1

### initial-parameter-2[float] optional

Initial value for parameter 2

### initial-parameter-3[float] optional

Initial value for parameter 3

## Attributes

### chans[int]

The chans attribute sets the number of channels in the output multi-channel signal. If the chans attribute is changed while the audio is on, the number of channels will change when the audio is restarted.

### op[symbol]

Use op to select the operator used to generate values. Possible values are  deviate ,  increment ,  spread ,  spreadinclusive ,  spreadexclusive ,  spreadincludesecond ,  spreadincludefirst ,  harmonic ,  subharmonic ,  exponential ,  scaledexponential , and  decide . For information on these operators, see the [MC Wrapper Messages](https://docs.cycling74.com/documentation/mc_messages_to_wrapper.maxvig.xml) guide.

Possible values:

'decide'

'deviate'

'ease.in\_back'

'ease.in\_bounce'

'ease.in\_circular'

'ease.in\_cubic'

'ease.in\_elastic'

'ease.in\_exponential'

'ease.in\_out\_back'

'ease.in\_out\_bounce'

'ease.in\_out\_circular'

'ease.in\_out\_cubic'

'ease.in\_out\_elastic'

'ease.in\_out\_exponential'

'ease.in\_out\_quadratic'

'ease.in\_out\_quartic'

'ease.in\_out\_quintic'

'ease.in\_out\_sine'

'ease.in\_quadratic'

'ease.in\_quartic'

'ease.in\_quintic'

'ease.in\_sine'

'ease.linear'

'ease.out\_back'

'ease.out\_bounce'

'ease.out\_circular'

'ease.out\_cubic'

'ease.out\_elastic'

'ease.out\_quadratic'

'ease.out\_quartic'

'ease.out\_quintic'

'ease.out\_sine'

'exponential'

'harmonic'

'increment'

'randomrange'

'scaledexponential'

'smoothstep'

'spread'

'spreadexclusive'

'spreadincludefirst'

'spreadincludesecond'

'spreadinclusive'

'subharmonic'

### p1[float]

Sets the value of the first operator parameter

### p2[float]

Sets the value of the second operator parameter

### p3[float]

Sets the value of the third operator parameter

### ramptime[float]

If the ramptime attribute is zero, the values of new operator calculations are output immediately and will be discontinuous with previous values. A non-zero ramptime specifies the number of milliseconds for the output signals to ramp to the newly calculated values. The new values are effectively delayed by the ramp time.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to float

### float

A number in the second inlet sets value of the first parameter. A number in the third inlet sets the value of the second parameter. A number in the right inlet sets the third parameter.

### signal

A signal in the left inlet triggers a calculation of the current operator. Signals in the other three inlets set parameter values.
