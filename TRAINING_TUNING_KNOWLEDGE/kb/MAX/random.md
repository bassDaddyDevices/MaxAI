---
type: max
name: "random"
summary: "Generate a random number"
signal: false
url: "https://docs.cycling74.com/reference/random/"
package: "Max"
see_also: ["decide", "drunk", "urn"]
---
# random

Generate a random number

## Description

Outputs random numbers within the range between 0 and 1 less than the argument specified.

## Arguments

### range[int/float] optional

Sets an initial limit to the random output. If an  int , the output will always be between 0 and one less than this maximum limit. If a  float , the output will be between 0 and the maximum limit. If there is no argument, the limit is initially set to  1 , which causes [random](https://docs.cycling74.com/reference/random) to output 0 whenever it receives a  bang .

### seed[int] optional

A second argument is used to set a "seed" value for the random generator. If no argument is specified, the time value will be used to initialize the seed.

## Attributes

### classic[int]: 0

Enable/disable classic mode, which uses the legacy random number generator with very poor statistical properties. Default is 0 (disabled).

### cycle[atom\_long]: 0

When cycle is greater than zero, it determines a count of outputs before [random](https://docs.cycling74.com/reference/random) will reset its random number generator state to the current seed. The result is a repeating pattern whose contents is determined by the seed value. When cycle is 0, [random](https://docs.cycling74.com/reference/random) never resets its state.

### floatoutput[int]: 0

Enable/disable float output using the current range.

### range[2 atoms]: 0 1

The range can be any two numerical values, including negative values. If the range contains a floating-point value, floatoutput will be enabled, and the object will generate floating-point output.

### seed[atom\_long]: 0

The seed attribute sets the state of the random number generator. When seed is 0 (the default), [random](https://docs.cycling74.com/reference/random) uses the time elapsed since system startup as the seed. When seed is non-zero, the value is used to initialize ("seed") the random number generator, resulting in the same predictable but statistically random sequence. You can reset the random number generator state by changing seed or with the  reset  message.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out a randomly generated number between 0 and one less than its maximum limit.

### int

In right inlet: The number is stored as the maximum limit for the random output. The output will always be between 0 and one less than this maximum limit.

Arguments:

- maximum
  [int]

### float

In right inlet: The number is stored as the maximum limit for the random output. Additionally floatoutput will be enabled and the object will generate floating-point output

Arguments:

- maximum
  [float]

### list

In right inlet: The numbers are used to set the range of the object. The range can be any two numerical values, including negative values. If the range contains a floating-point value, floatoutput will be enabled, and the object will generate floating-point output.

Arguments:

- minimum
  [atom]
- maximum
  [atom]

### reset

With no arguments, the  reset  message resets the cycle counter (used when the cycle attribute is enabled) to zero. When an optional int argument is present, it becomes the new value of the cycle counter and "fast-forwards" from the beginning of the cycle so that the next output is at the specified position in the cycle.  reset  is useful immediately after changing the seed to ensure the cycle outputs values from the start to finish.

Arguments:

- cycle-index
  [int]

## Output

### int

When a  bang  is received in the left inlet, [random](https://docs.cycling74.com/reference/random) generates a random number between 0 and one less than its maximum limit.

## See Also

| Name | Description |
| --- | --- |
| [decide](https://docs.cycling74.com/reference/decide) | Choose randomly between 1 and 0 |
| [drunk](https://docs.cycling74.com/reference/drunk) | Output random numbers within a step range |
| [urn](https://docs.cycling74.com/reference/urn) | Generate random numbers without duplicates |
