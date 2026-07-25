---
type: max
name: "urn"
summary: "Generate random numbers without duplicates"
signal: false
url: "https://docs.cycling74.com/reference/urn/"
package: "Max"
see_also: ["decide", "deferlow", "drunk", "random"]
---
# urn

Generate random numbers without duplicates

## Description

Outputs random numbers and keeps track of each number that has been generated. When all numbers up to the maximum (set via an argument or the right inlet) have been output, a  bang  is send out the right outlet.

## Arguments

### limit[int] optional

The number of possible values for the random number generator. If no argument is typed in, there will be only  1  possible number. The maximum limit is 4096.

### seed[int] optional

A second argument is used to set a "seed" value for the random generator. If no argument is specified, the time value will be used to initialize the seed.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out a previously unchosen random number from 0 to one less than the specified maximum limit.

### int

In right inlet: Clears the list of already chosen numbers, and specifies the number of possible values for the random number generator. The random numbers will range from 0 to one less than this maximum limit. The maximum limit is 4096.

Arguments:

- limit
  [int]

### (inlet1)

Clears the list of already chosen numbers, and specifies the number of possible values for the random number generator. The random numbers will range from 0 to one less than this maximum limit. The maximum limit is 4096.

Arguments:

- limit
  [int]

### clear

In left inlet: Clears the list of already chosen numbers.

### seed

In left inlet: The word  seed , followed by a number, provides a "seed" value for the random generator, which causes a specific (reproducible) sequence of pseudo-random numbers to occur. The number  0  uses the time elapsed since system startup (an unpredictable value) as the seed, ensuring an unpredictable sequence of numbers. This unpredictable seed is used by default when the [urn](https://docs.cycling74.com/reference/urn) object is created. However, once all numbers have been chosen, the sequence will repeat. Therefore, in order to achieve a non-repeating sequence of numbers, you will need to send the [urn](https://docs.cycling74.com/reference/urn) object the  seed 0  message each time you send it the  clear  message.

Arguments:

- seed
  [int]

## Output

### bang

Out right outlet: When all numbers in the current range have been generated, [urn](https://docs.cycling74.com/reference/urn) sends a  bang  out the right outlet instead of a number out the left outlet.

### int

Out left outlet: If there are numbers within the current range that have not been sent out since the last  clear  message was received, [urn](https://docs.cycling74.com/reference/urn) generates a random number between 0 and one less than the maximum.

## See Also

| Name | Description |
| --- | --- |
| [decide](https://docs.cycling74.com/reference/decide) | Choose randomly between 1 and 0 |
| [deferlow](https://docs.cycling74.com/reference/deferlow) | Defer the execution of a message (always) |
| [drunk](https://docs.cycling74.com/reference/drunk) | Output random numbers within a step range |
| [random](https://docs.cycling74.com/reference/random) | Generate a random number |
