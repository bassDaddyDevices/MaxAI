---
type: jitter
name: "jit.matrixset"
summary: "A set of matrices for storage/resequencing"
signal: false
url: "https://docs.cycling74.com/reference/jit.matrixset/"
package: "Jitter"
see_also: ["jit.matrix"]
---
# jit.matrixset

A set of matrices for storage/resequencing

## Description

The [jit.matrixset](https://docs.cycling74.com/reference/jit.matrixset) object keeps a set of internal matrices which may be written to or read from. This may be useful for data storage and/or matrix resequencing.

## Arguments

None.

## Attributes

### dim[32 ints]

The dimensions of matrix data (default = 1 1)

### dstdimend[32 ints]

The destination dimension end position (default = all dim values minus 1)

### dstdimstart[32 ints]

The source dimension start position (default = all 0)

### index[int]

The which of the matrices an incoming matrix will be written to (default = 0)

### interp[int]

Interpolation flag (default = 0) When the flag is set, an input matrix is interpolated when copied to internal matrices.

### matrixcount[int]

The number of matrices in the matrix set (default = 1)

### planecount[int]

The number of planes in matrix data (default = 4)

### planemap[32 ints]

Maps input planes to output planes (default = 0 1 2 3 ...)

### thru[int]

Thru mode flag (default = 1) When the flag is set, a matrix is output when another one is received.

### type[symbol]

The type of matrix data (default =  char )

Possible values:

'char'

'long'

'float32'

'float64'

### srcdimend[32 ints]

The source dimension end position (default = all dim values minus 1)

### srcdimstart[32 ints]

The source dimension start position (default = all 0)

### usedstdim[int]

Destdim use flag (default = 0) When the flag is set, the destination dimension's attributes are used when copying an input matrix to an internal matrix.

### usesrcdim[int]

Srcdim use flag (default = 0) When the flag is set, the source dimension's attributes are used when copying an input matrix to an internal matrix.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends a matrix out the left outlet.

### clear

Sets all values to zero.

### exportmovie

Exports a matrix as a movie. The  exportmovie  message takes an optional argument to specify a file name. If no filename is specified, a file dialog will open to let you choose a file.

The default  *FPS*  is 30. frames per second

The default  *codec*  is  h264 . For a list of supported codecs check the [jit.record](https://docs.cycling74.com/reference/jit.record) codec attribute.

Arguments:

- filename
  [symbol]
- FPS
  [float]
- codec
  [symbol]

### importmovie

Imports a movie into the matrix set. If no filename is specified, a file dialog will open to let you choose a file. The  *time-offset*  and  *index-offset*  arguments may be used to set a time and index offset for the movie being imported (the default is 0 for both arguments). The  *number-of-frames*  argument specifies the number of frames to import (the default is set to the value specified by the  *matrixcount*  attribute). Note that the importmovie message will not resize the jit.matrixset.

Arguments:

- filename
  [symbol]
- time-offset
  [int]
- index-ffset
  [int]
- number-of-frames
  [int]

### read

Reads Jitter binary data files (.jxf) into a matrix set. If no filename is specified, a file dialog will open to let you choose a file.

Arguments:

- filename
  [symbol]

### write

Writes matrix set as a Jitter binary data file (.jxf). If no filename is specified, a file dialog will open to let you choose a file.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
