---
type: msp
name: "snowfall~"
summary: "Phasor-Driven Particle"
signal: true
url: "https://docs.cycling74.com/reference/snowfall~/"
package: "MSP"
---
# snowfall~

Phasor-Driven Particle

## Description

The [snowfall~](https://docs.cycling74.com/reference/snowfall~) object controls a multi-dimensional particle as one or more audio ramps whose lifetime is triggered and controlled by an input phasor ramp from 0 to 1. The object will typically be used within a larger system of quasi-independent particles using the MC Wrapper as [mc.snowfall~](https://docs.cycling74.com/reference/mc.snowfall~).

## Arguments

### dimenions[int] optional

Sets the number of dimensions (1 - 4) which determines the number of signal outputs. The default value is 1.

## Attributes

### boundarymode[int]

The boundarymode attribute controls what happens when the particle output value reaches the current minimum or maximum. It is global for all dimensions.

Possible values:

0 = 'bounce'
(
Bounce Mode
)
Causes the particle to reverse its current direction.

1 = 'end'
(
End Mode
)
Causes the particle to cease outputting; the signal output will become zero.

2 = 'wrap'
(
Wrap Mode
)
Causes the particle to move to the opposite boundary. If the particle reaches the current maximum value, its value jumps to the minimum. If the particle reaches the current minimum value, its value jumps to the maximum.

3 = 'clip'
(
Clip Mode
)
The particle's value remains at the value of the boundary (maximum or minimum).

### dimensions[int]

Sets the number of dimensions (1 - 4) which determines the number of signal outputs. The default value is 1. The dimensions attribute cannot be changed after the object is created. It can be set via an argument or typed-in attribute.

### direction[4 floats]

direction contains up to four values, one for each dimension.

When a particle starts, the direction attribute determines the velocity of movement. The value is expressed in units per second. For example, when direction is set to 5 means, the output value will increase by 5 over one second. If the direction attribute is negative, the output value is likely to decrease over time. If the direction attribute is positive, the output value is likely to increase over time.

### directiondev[4 floats]

directiondev contains up to four values, one for each dimension.

Sets a random deviation around the value of direction used in setting the particle velocity and direction.

### endmode[int]

Sets the behavior when the particle ends, either as a result of hitting a max or min boundary or when the input signal resets or goes to zero.

Possible values:

0 = 'End Value'
(
Set to end value
)
When endmode is set to End Value, the output is set to the current value of the endvalue attribute when the particle ends.

1 = 'Current Value'
(
Remain at current value
)
When endmode is set to Current Value, the output remains at its current value when the particle ends.

### endvalue[4 floats]

endvalue contains up to four values, one for each dimension.

Sets the value to output when a particle's life ends.

### energyramp[4 floats]

energyramp contains up to four values, one for each dimension.

The energyramp multiplies the incoming 0 - 1 ramp signal value as part of the particle calculation. If you do not want the particle to move faster as the input ramp value increases, set the energyramp to zero.

### initial[4 floats]

initial contains up to four values, one for each dimension.

Sets a starting output value for the particle.

### initialdev[4 floats]

initialdev contains up to four values, one for each dimension.

Sets a random deviation around the initial value used in choosing the starting output value.

### interval[float]

Set the time interval (in milliseconds) between new particle trajectory calculations.

### intervaldev[float]

Sets a random deviation around the value of interval used in choosing the update interval.

### max[4 floats]

max contains up to four values, one for each dimension.

Set's the particle's maximum boundary value. Once the particle reaches this value, its behavior is determined by the current setting of the boundarymode attribute.

### min[4 floats]

min contains up to four values, one for each dimension.

Set's the particle's minimum boundary value. Once the particle reaches this value, its behavior is determined by the current setting of the boundarymode attribute.

### scalemax[4 floats]

scalemin contains up to four values, one for each dimension.

Sets a scale factor for the particle's output value. The particle's value will always range between the scaling minimum and the scaling maximum.

### scalemin[4 floats]

scalemax contains up to four values, one for each dimension.

Sets a scale factor for the particle's output value. The particle's value will always be bettern the scaling minimum and the scaling maximum.

### squish[4 floats]

squish contains up to four values, one for each dimension.

When the boundarymode attribute is set to Bounce, the squish attribute multiplies the force of the particle's direction reversal.

### startmode[int]

Start Mode

Possible values:

0 = 'Initial Value'

1 = 'Current Value'

### wanderprob[4 floats]

wanderprob contains up to four values, one for each dimension.

Sets the probability that at any particular update, the direction will reverse. Note that as the interval becomes smaller, the effect of the wanderprob increases.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The start of a phasor ramp causes the particle to start its output signal ramps. Typically the particle output will end when the input ramp resets to zero.
