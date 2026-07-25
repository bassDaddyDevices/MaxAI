---
type: max
name: "decide"
summary: "Choose randomly between 1 and 0"
signal: false
url: "https://docs.cycling74.com/reference/decide/"
package: "Max"
see_also: ["drunk", "random", "toggle", "urn"]
---
# decide

Choose randomly between 1 and 0

## Description

Outputs random  1  and  0  messages. The output sequence depends on the seed value to determine the sequence of values.

## Arguments

### seed[int] optional

Sets a "seed" value to cause a specific (reproducible) sequence of pseudo-random  0  and  1  outputs to occur. If there is no argument, the time elapsed since system startup (an unpredictable value) is used as the seed, ensuring an unpredictable sequence for output.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes a randomly chosen output of  1  or  0 .

### int

In left inlet: Same as  bang .

Arguments:

- input
  [int]

### (inlet1)

In right inlet: A given "seed" number causes a specific (reproducible) sequence of pseudo-random  0  and  1  outputs to occur. The number  0  uses the time elapsed since system startup (an unpredictable value) as the seed, ensuring an unpredictable sequence of  0  and  1  outputs.

Arguments:

- seed
  [int]

## Output

### int

1  or a  0 , chosen at random. With certain seed values, the output may seem at first to follow a "non-random" pattern, but over the course of many iterations the sequence becomes unpredictable and the balance between  1  and  0  becomes even.

## See Also

| Name | Description |
| --- | --- |
| [drunk](https://docs.cycling74.com/reference/drunk) | Output random numbers within a step range |
| [random](https://docs.cycling74.com/reference/random) | Generate a random number |
| [toggle](https://docs.cycling74.com/reference/toggle) | Switch between off and on (0 and 1) |
| [urn](https://docs.cycling74.com/reference/urn) | Generate random numbers without duplicates |
