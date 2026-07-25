---
type: jitter
name: "mc.jit.peek~"
summary: "Read matrix data as an audio signal  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.jit.peek~/"
package: "Jitter"
see_also: ["jit.poke~", "peek~", "poke~", "jit.buffer~"]
---
# mc.jit.peek~

Read matrix data as an audio signal (multichannel)

## Description

[jit.peek~](https://docs.cycling74.com/reference/jit.peek~) reads the value of one plane of a matrix cell at the position specified by the  signal  inputs. This value is output as a  signal . The object arguments are  *[matrix\_name]*   *[dim\_inputcount]*   *[plane]* .

## Arguments

### matrix\_name[] optional

The named matrix to access (default = none)

### dim\_inputcount[] optional

The number of dimensions in the matrix (default = 2)

### plane[] optional

The plane in a cell whose value is output (default = 0)

## Attributes

### interp[int]

Interpolation flag (default = 0)

### matrix\_name[symbol]

The named matrix to access (default = none)

### normalize[int]

Normalizated input coordinates flag (default = 0)

### plane[int]

The plane in a cell whose value is output (default = 0)

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

All inlets: Signal values arriving in these inlets specify the dimensional location of the data to be stored for the plane specified. A signal inlet is provided for each dimension specified by the dim\_inputcount argument (i.e.,  jit.peek~ bigcube 3  has 3 inlets -- one for each of the 3 dimensions of the matrix).

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
| [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) | Access an MSP buffer~ in matrix form |
