---
type: jitter
name: "jit.shade"
summary: "Map-based crossfader"
signal: false
url: "https://docs.cycling74.com/reference/jit.shade/"
package: "Jitter"
see_also: ["jit.alphablend", "jit.op"]
---
# jit.shade

Map-based crossfader

## Description

[jit.shade](https://docs.cycling74.com/reference/jit.shade) performs a linear crossfade between corresponding cells in two input matrices at a rate determined by the values of the cells of a third "map" matrix. The crossfade rate is calculated in frames rather than units of time.

#### Discussion

Three fade modes are available.  mode 0  crossfades unidirectionally from start to finish, and sends a  done  message out the right outlet when the fade is complete. While  mode 1  and  mode 2  are more continuous fade processes, the do not provide any feedback upon completion of a crossfade.

Generally, a 1-plane  long  matrix is sent to inlet 3 as the map. If you send a 2-plane matrix, plane 2 of the matrix can be used to set initial values for the crossfade.

## Matrix Operator

matrix inputs:3, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |
| in3 | adapt | 0 | 0 | 1 | 2 | 1 | long |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### max[int]

Maximum rate (default = 255)

### min[int]

Minimum rate (default = 0)

### mode[int]

Crossfade mode (default = 0 (start to end))

0 = start to end crossfade: Fades from start to end without looping and sends a  done  message out the right outlet on completion.

1 = palindrome crossfade: Fades from start to end, then reverse direction.

2 = looped cellwise start to end crossfade: Once any cell has finished its fade, it begins again.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### reset

Zeroes the fade counter, causing the fade to start over from the beginning. The fade counter is actually managed in the second plane of matrix 3. If initialization values were provided in that plane, they are lost after a  reset  message is received.

## See Also

| Name | Description |
| --- | --- |
| [jit.alphablend](https://docs.cycling74.com/reference/jit.alphablend) | Blend two images with an alpha channel image |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
