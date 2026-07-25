---
type: jitter
name: "jit.matrix"
summary: "The Jitter Matrix!"
signal: false
url: "https://docs.cycling74.com/reference/jit.matrix/"
package: "Jitter"
see_also: ["jit.coerce", "jit.fill", "jit.matrixset", "jit.matrixinfo", "jit.peek~", "jit.poke~", "jit.spill", "jit.submatrix"]
---
# jit.matrix

The Jitter Matrix!

## Description

The [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object is a named matrix which may be used for data storage and retrieval, resampling, and matrix type and planecount conversion operations.

## Attributes

### adapt[int]

Matrix adaptation flag (default = 0 if matrix arguments are present, otherwise 1) When the flag is set, the [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object will adapt to the incoming matrix planecount, type, and dimensions.

### dim[32 ints]

The dimensions of matrix data (default = 1 1)

### dimstride[32 ints] read-only

The byte stride per dimension

### dstdimend[32 ints]

The destination dimension end position (default = all dim values minus 1)

### dstdimstart[32 ints]

The destination dimension start position (default = all 0)

### interp[int]

Matrix interpolation flag (default = 0) When the flag is set, the input matrix will be interpolated when copied to the internal matrix.

### name[symbol]

The name of the matrix (default = UID)

### planecount[int]

The number of planes in matrix data (default = 4)

### planemap[32 ints]

Maps input places to output planes (default = 0 1 2 3 ...)

### thru[int]

Thru mode flag (default = 1) When the flag is set, a matrix is output when another one is received.

### size[int] read-only

Total byte size of matrix

### srcdimend[32 ints]

The source dimension end position (default = all dim values minus 1)

### srcdimstart[32 ints]

The source dimension start position (default = all 0)

### usedstdim[int]

Destdim use flag (default = 0) When the flag is set, the destination dimension's attributes are used when copying an input matrix to an internal matrix.

### usesrcdim[int]

Srcdim use flag (default = 0) When the flag is set, the source dimension's attributes are used when copying an input matrix to an internal matrix.

### type[symbol]

The matrix data type (default =  char )

Possible values:

'char'
(
Char data
)
Char data (0-255)

'long'
(
Long data
)
Long data

'float32'
(
32-bit floating-point data
)
32-bit floating-point data

'float64'
(
64-bit floating-point data
)
64-bit floating-point data

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the currently stored matrix.

### int

Sets all cells to the value specified by  value(s)  and output the data. Position is specified of a list whose length is equal to the number of dimensions ( dimcount ).

Arguments:

- values
  [list]

### float

Sets all cells to the value specified by  value(s)  and output the data. Value is specified as a list whose length is equal to the number of dimensions ( dimcount ).

Arguments:

- values
  [list]

### list

Sets all cells to the value specified by  value(s)  and output the data. Position is specified of a list whose length is equal to the number of dimensions ( dimcount ).

Arguments:

- values
  [list]

### (drag)

Drag and drop a compatible media file onto the object to load it.

### clear

Sets all matrix values to zero.

### exportimage

Export the current frame as an image file with the name specified by the first argument. The second argument sets the file type (default = png). Available file types are  png ,  tiff , and  jpeg .
You can use the Max Preferences to [specify a default image resolution](https://docs.cycling74.com/userguide/preferences_and_settings#interface) for PNG images.

Arguments:

- filename
  [symbol]
- file-type
  [symbol]

### exportmovie

Exports a matrix as a movie. The  exportmovie  message takes an optional argument to specify a file name. If no filename is specified, a file dialog will open to let you choose a file.

See the [jit.record](https://docs.cycling74.com/reference/jit.record) object for information on the  write  arguments and their default values.

Arguments:

- filename
  [symbol]
- FPS
  [float]
- codec
  [symbol]
- quality
  [symbol]
- timescale
  [int]

### exprfill

Evaluates  *expression*  to fill the matrix. If a  *plane*  argument is provided, the expression is applied to a single plane. Otherwise, it is applied to all planes in the matrix. See [jit.expr](https://docs.cycling74.com/reference/jit.expr) for more information on expressions. Unlike the [jit.expr](https://docs.cycling74.com/reference/jit.expr) object, there is no support for providing multiple expressions to fill multiple planes at once with different expressions. Call this method multiple times once for each plane you wish to fill.

Arguments:

- plane
  [int]
- expression
  [symbol]

### fillplane

The word  fillplane , followed by an integer that specifies a plane number and a value, will fill the specified plane with the single value.

Arguments:

- plane
  [int]
- value
  [int]

### getcell

Sends the value(s) in the cell specified by  position  out the right outlet of the object as a list in the form  cell   *cell-position0* ...  *cell-positionN*   val   *plane0-value* ...  *planeN-value* .

Arguments:

- position
  [list]

### importmovie

Imports a movie into the matrix. If no filename is specified, a file dialog will open to let you choose a file. The  *time-offset*  argument may be used to set a time offset for the movie being imported (the default is 0).

Arguments:

- filename
  [symbol]
- time-offset
  [int]

### jit\_gl\_texture

Copies the texture specified by  *texture-name*  to the matrix.

Arguments:

- texture-name
  [symbol]

### op

The word  op , followed by the name of a [jit.op](https://docs.cycling74.com/reference/jit.op) object operator and a set of values, is equivalent to including a [jit.op](https://docs.cycling74.com/reference/jit.op) object with the specified operator set as an attribute and this [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object specified as the output matrix. The additional  *value*  arguments may either be a matrix name or a constant. If only one value argument is provided, this matrix is considered both the output and the left operand. For example, "op + foo bar" is equivalent to the operation thismatrix = foo + bar, and "op \* 0.5" is equivalent to the operation thismatrix = thismatrix \* 0.5.

### read

Reads Jitter binary data files (.jxf) into a matrix set. If no filename is specified, a file dialog will open to let you choose a file.

Arguments:

- filename
  [symbol]

### setall

Sets all cells to the value specified by  value(s) . Position is specified of a list whose length is equal to the number of dimensions ( dimcount ).

Arguments:

- values
  [list]

### setcell

Sets the cell specified by  position  to the value specified by  value . Position is specified of a list whose length is equal to the number of dimensions ( dimcount ). The optional arguments  plane   *plane-number*  can be used to specify a plane. If a plane is specified,  *value*  should be a single number, otherwise it should be a list of numbers of size  planecount - 1 .

Arguments:

- position
  [list]
- group
  (optional)
  plane
  [literal]

  plane-number
  [int]

  end group
- val
  [literal]
- values
  [list]

### setcell1d

The word  setcell1d , followed by a number specifying an  *x*  coordinate and a list of values, is similar to the  setcell  message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed.

### setcell2d

The word  setcell2d , followed by a pair of numbers specifying  *x*  and  *y*  coordinates and a list of values, is similar to the  setcell  message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed.

### setcell3d

The word  setcell3d , followed by three numbers specifying  *x* ,  *y* , and  *z*  coordinates and a list of values, is similar to the  setcell  message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (3) is fixed.

### setplane1d

The word  setplane1d , followed by a number specifying an  *x*  coordinate, a number specifying a plane, and a value, is similar to the  setcell  message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.

### setplane2d

The word  setplane2d , followed by a pair of numbers specifying  *x*  and  *y*  coordinates, a number specifying a plane, and a value, is similar to the  setcell  message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed, or use the "plane" token to specify which plane to set.

### setplane3d

The word  setplane3d , followed by three numbers specifying  *x* ,  *y* , and  *z*  coordinates, a number specifying a plane, and a value, is similar to the  setcell  message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.

### val

Sets all cells to the value specified by  value(s) . Position is specified of a list whose length is equal to the number of dimensions ( dimcount ) and outputs the data.

Arguments:

- values
  [list]

### write

Writes matrix set as a Jitter binary data file (.jxf). If no filename is specified, a file dialog will open to let you choose a file.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.coerce](https://docs.cycling74.com/reference/jit.coerce) | Coerce a matrix into different types/planecount |
| [jit.fill](https://docs.cycling74.com/reference/jit.fill) | Fill a matrix with a list |
| [jit.matrixset](https://docs.cycling74.com/reference/jit.matrixset) | A set of matrices for storage/resequencing |
| [jit.matrixinfo](https://docs.cycling74.com/reference/jit.matrixinfo) | Report matrix planecount, type, dimensions |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [jit.spill](https://docs.cycling74.com/reference/jit.spill) | Unroll a matrix into a list |
| [jit.submatrix](https://docs.cycling74.com/reference/jit.submatrix) | Reference a sub-region of a matrix |
