---
type: jitter
name: "jit.scanwrap"
summary: "Resample by scanline wrapping"
signal: false
url: "https://docs.cycling74.com/reference/jit.scanwrap/"
package: "Jitter"
see_also: ["jit.scanoffset"]
---
# jit.scanwrap

Resample by scanline wrapping

## Description

The [jit.scanwrap](https://docs.cycling74.com/reference/jit.scanwrap) object rewraps an input matrix into an output matrix. Matrix output handling is specified by a mode attribute.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### mode[int]

Output mode (default = 0 (fill))

0 = fill: The object will not output a matrix until it has received enough data to fill it. If the input matrix overflows the output, the excess data is truncated.

1 = dump: The object will output one matrix regardless of the amount of data received. If the output matrix is not filled, the remaining cells are set to 0. If the input matrix overflows the output, the excess data is truncated.

2 = spew: The object will output as many matrices as required to void itself of all data. If the output matrix is not filled, it waits until it has received enough data before it is output. If the input matrix overflows the output, the excess data is sent to new matrices, which will be output as soon as they are filled.

3 = wrap: If the input underflows the output matrix, it is 'looped' until it fills it up. Excess data is truncated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### purge

Sends the output matrix, regardless of its fill state (Note: In fill mode, the output matrix is generally unavailable until it is full). If a matrix is purged, the message  purge 1  is sent out of the [jit.scanwrap](https://docs.cycling74.com/reference/jit.scanwrap) object's right outlet. If there is no matrix to purge, the message  purge 0  is sent.  purge  does not reset the object like the  reset  message).

### reset

Sets the input/output scan back to the beginning and clears the output matrix. (Note: In fill mode, the  reset  message will start filling the output matrix from the top, abandoning any partial fill data that had already accumulated.)

## See Also

| Name | Description |
| --- | --- |
| [jit.scanoffset](https://docs.cycling74.com/reference/jit.scanoffset) | Uses a 1-dimensional matrix to offset scanlines |
