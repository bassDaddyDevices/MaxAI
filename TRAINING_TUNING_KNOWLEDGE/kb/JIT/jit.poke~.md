---
type: jitter
name: "jit.poke~"
summary: "Write an audio signal into a matrix"
signal: true
url: "https://docs.cycling74.com/reference/jit.poke~/"
package: "Jitter"
see_also: ["jit.peek~", "peek~", "poke~", "jit.buffer~"]
---
# jit.poke~

Write an audio signal into a matrix

## Description

[jit.poke~](https://docs.cycling74.com/reference/jit.poke~) writes the value specified by the leftmost signal input into one plane of a matrix cell at the position specified by the  signal  inputs (following the leftmost input). The object arguments are  *[matrix\_name]*   *[dim\_inputcount]*   *[plane]* .

## Arguments

### matrix\_name[] optional

The name of the matrix to access (default = none)

### dim\_inputcount[] optional

The number of dimensions in the matrix (default = 2)

### plane[] optional

The plane in a cell whose value is replaced by leftmost input (default = 0)

## Attributes

### matrix\_name[symbol]

The name of the matrix to access (default = none)

### normalize[int]

Normalized input coordinates flag (default = 0)

### plane[int]

The plane in a cell whose value is replaced by leftmost input (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: Signal values arriving in this inlet will be stored at the dimensional locations specified by the signal inputs to the remaining inlets of the [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) object. The number of dimensional inlets will vary, depending on the value of the  [dim\_inputcount]  argument.

In other inlets: Signal values arriving in this inlet specify the dimensional location of the data to be stored for the plane specified. A signal inlet is provided for each dimension specified by the  [dim\_inputcount]  attribute (i.e.,  jit.poke~ bigcube 3  has 4 inlets -- one for input data, and one for each of the 3 dimensions of the matrix).

## See Also

| Name | Description |
| --- | --- |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
| [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) | Access an MSP buffer~ in matrix form |
