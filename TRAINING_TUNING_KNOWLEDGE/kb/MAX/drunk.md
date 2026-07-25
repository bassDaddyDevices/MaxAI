---
type: max
name: "drunk"
summary: "Output random numbers within a step range"
signal: false
url: "https://docs.cycling74.com/reference/drunk/"
package: "Max"
see_also: ["decide", "random", "urn"]
---
# drunk

Output random numbers within a step range

## Description

Performs a "drunken" walk by outputting random numbers within a specified step range.

## Arguments

### maximum value[int/float] optional

Sets the maximum number produced. If this argument is not provided, the maximum value is set to  128 . In floatoutput mode, the default maximum value is  1. . By default, the minimum value produced is  0 , but this can be overridden with the range attribute.

If this argument is a floating-point value, floatoutput will be enabled, and the object will generate floating-point output.

### step size[int/float] optional

Sets an initial limit on the size of random steps taken; the absolute value of the step size will always be less than (in floatoutput mode, less than or equal to) the absolute value of this limit. If a negative value is specified as a step size, steps of size zero are never generated.

If this argument is not provided, the step size is set to  2  (movement up or down by no more than 1); in floatoutput mode, the default step size is  0.1

## Attributes

### cycle[atom\_long]: 0

When cycle is greater than zero, it determines a count of outputs before [drunk](https://docs.cycling74.com/reference/drunk) will reset its output to an initial value (set using the  setresetvalue  message) and its random number generator state to the current seed. The result is a repeating pattern whose contents is determined by the seed value. When cycle is 0, [drunk](https://docs.cycling74.com/reference/drunk) never resets its state.

### floatoutput[int]: 0

Enable/disable float output using the current range.

### range[2 atoms]: 0 128

The range can be any two numerical values, including negative values.

### seed[atom\_long]: 0

The seed attribute sets the state of the random number generator. When seed is 0 (the default), [drunk](https://docs.cycling74.com/reference/drunk) uses the time elapsed since system startup as the seed. When seed is non-zero, the value is used to initialize ("seed") the random number generator, resulting in the same predictable but statistically random sequence. You can reset the random number generator state by changing seed or with the  reset  message.

### stepsize[atom]: 2

The limit on the size of random steps taken; the absolute value of the step size will always be less than (in floatoutput mode, less than or equal to) the absolute value of this limit. If a negative value is specified as a step size, steps of size zero are never generated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes [drunk](https://docs.cycling74.com/reference/drunk) to take a step of random size up or down from its currently stored value. It updates the stored value and outputs it.

### int

In the left inlet: Replace the current value, send new value to the outlet.

In the middle inlet: Set the maximum value that can be output by the [drunk](https://docs.cycling74.com/reference/drunk) object. If the specified maximum is less than 0 it is set to  0 .

In the right inlet: Set the step size taken in response to a  bang  in the left inlet. The step (up or down) will always be less than (in floatoutput mode, less than or equal to) the absolute value of this number.

Arguments:

- input
  [int]

### float

In floatoutput mode, the functions are the same, but in the floating-point domain. When floatoutput is disabled, arriving values are converted to  int  during processing.

Arguments:

- input
  [float]

### list

TEXT\_HERE

### reset

With no arguments, the  reset  message resets the cycle counter to zero. (The cycle counter is used when the cycle attribute is non-zero.) When an optional int argument is present,  reset  assigns that value to the cycle counter and "fast-forwards" from the beginning of the cycle so that the next output value will be at the specified cycle position.  reset  is useful immediately after changing the seed or cycle to ensure the cycle starts or continues a consistent pattern.

Arguments:

- cycle-index
  [int]

### set

The word  set , followed by a number, sets the stored value to that number without triggering output. The stored value is initially set in the center of the total range (half of the maximum value).

Arguments:

- input
  [int/float]

### setresetvalue

With no arguments, the  setresetvalue  message assigns the most recent output value to be the value assigned when a cycle reset occurs. With an int argument sets the reset value to a specific number.

Arguments:

- stored-value
  [int]

## Output

### int

The number sent out the outlet is automatically limited between 0 and the specified maximum value, and differs from the previously stored number by less than (in floatoutput mode, less than or equal to) the maximum step size.

## See Also

| Name | Description |
| --- | --- |
| [decide](https://docs.cycling74.com/reference/decide) | Choose randomly between 1 and 0 |
| [random](https://docs.cycling74.com/reference/random) | Generate a random number |
| [urn](https://docs.cycling74.com/reference/urn) | Generate random numbers without duplicates |
