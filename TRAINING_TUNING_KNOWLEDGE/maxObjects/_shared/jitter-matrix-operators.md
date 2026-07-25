---
type: reference
name: "More about Matrix Operators"
summary: "More about Matrix Operators — boilerplate shared by many objects"
---
### More about Matrix Operators

### The Jitter MOP

Since the matrix is Jitter's focus, it is not surprising that the majority of Jitter objects fall in this category of Matrix Operators. Every Matrix operator has some number of matrix inputs and some number of matrix outputs. Matrix inputs are referred to by the names "in", "in2", "in3", etc., from left to right, and matrix outputs are referred to by the names "out", "out2", "out3", etc., from left to right--i.e. the names are appended by the input/output number except for the first (leftmost) input and first (leftmost) output which are simply named "in" and "out". We will refer to the input or output name names as the "I/O-name".

Matrix inputs and outputs typically each have their own matrices internally where information is kept. This is necessary because Jitter is an asynchronous framework (i.e. all the matrices don't arrive at all inputs at the same time). Various aspects of matrix inputs and outputs can be set using the command [I/O-name] combined with one of the following suffixes: "\_dim" which will set the dimensions of the specified I/O matrix, "\_type" which will set the type of the specified matrix, "\_planecount" which will set the plane of the specified matrix, or "\_name" which will set the name of the specified matrix. There is one special case which does not have an internal matrix and this is the first input "in". This is the case since this special input actually triggers the calculation of the matrix operator, so it doesn't need to be cached until a calulation takes place, unlike the other inputs. Therefore there is no mechanism to set the dim, planecount, type, or name of "in".

Matrix operators accept what we'll refer to as "matrix args"--i.e.  [planecount (int)] [  *type*  (symbol)] [dim (int list)] . if these arguments are present, the  adapt  attribute will be turned off, otherwise it will be turned on. If adapt mode is turned on, each time a matrix is received in the first input, there will also be the equivalent of setting the  dim ,  planecount , and  type  attributes to that of the input matrix. If the other inputs and outputs are linked to these attributes, this will affect their linked attributes as well. See the "MOP" table to determine which inputs and outputs will be linked to which attributes when adapt mode is turned on. For the leftmost input this is not applicable, and hence all columns are labelled "n/a".

The [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object is a named matrix which may be used to matrix data storage and retrieval, resampling, and matrix type and planecount conversion operations.

### MOP Arguments

### planecount[int] optional

Explicitly sets the number of planes for the output and any righthand inputs. If this is absent, the Matrix Operator will typically adapt to the lefthand incoming matrix attributes, except for special case operators.

### type[symbol] optional

Explicitly sets the type of the matrix for the output and any righthand inputs. If this is absent, the Matrix Operator will typically adapt to the lefthand incoming matrix attributes, except for special case operators.

### dimensions[list] optional

Explicitly sets the dimensions of the matrix for the output and any righthand inputs. If this is absent, the Matrix Operator will typically adapt to the lefthand incoming matrix attributes, except for special case operators.

### MOP Attributes

### adapt[int]

Matrix adaptation flag (default = 0 if matrix arguments are present, otherwise 1) When the flag is set, the [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object will adapt to the incoming matrix planecount, type, and dimensions.

### [in/out]\_dim[32 ints]

The matrix data dimensions (default = 1 1)

### [in/out]\_name[symbol]

The input or output name of the matrix (default = UID)

### [in/out]\_planecount[int]

The number of planes in matrix input our output data. Except in special cases, this value is equal to the  planecount .

### [in/out]\_type[symbol]

The input or output matrix data type. Except in special cases, this value is equal to  type .

### outputmode[int]

Output mode (default = 1 (calculate and output matrix))

0 = No output (no calculation)

1 = Calculate and output the matrix

2 = Pass input (no calculation)

3 = Pass output (no calculation)

### type[int]

The matrix data type (default =  char
Supported data types are  char ,  long ,  float32 , or  float64 .

### MOP Messages

### bang

Equivalent to the  outputmatrix  message.

### clear

Sets all cell values in a matrix to zero.

### exportattrs

Exports an object's current attributes values in XML format. If no filename is specified, a file dialog will open to let you choose a file.

Arguments:

- filename
  [symbol]

### getattributes

Sends a sequence of lists out the object's right outlet describing the object's attributes, one line per attribute. Each line listing takes the form  attribute   *attribute-name*   get   *get-value*   set   *foo*  set-value  data-type(s)   *number-of-values* .

### getstate

Sends a sequence of lists describing the object's state out the object's right outlet, one line per attribute. Each line listing line takes the form  attribute-name   *attribute-value1*   *attribute-value2* ...  *attribute-valueN* .

### importattrs

Imports attributes specified in XML format to set the object's attributes. If no filename is specified, a file dialog will open to let you choose a file.

Arguments:

- filename
  [symbol]

### jit\_matrix

Handles input for the named matrix. If this messages is received in the left inlet, output is typically triggered. If this message is received in any other inlet, the data is typically cached until the  jit\_matrix  message is received in the left inlet.

Arguments:

- matrix-name
  [symbol]

### outputmatrix

Sends the matrix out the left outlet.

### summary

Sends a sequence of lists describing the object and it attributes and messages out the rightmost outlet of the object.
The first output line takes the form  summary objectname   *object-name* .
The second and third lines describe the number of inlets and outlets for the object in the form  summary (matrixinputcount/matrixoutletcount)   *number-of-(inlets/outlets)* .
The fourth line describes the matrixoutput in the form  summary matrixoutput   *descriptor*   planelink   *planelink-value*   typelink   *typelink-value*   dimlink   *dimlink-value*   types   *data-type(s)* .
Each attribute for the object is then listed, one attribute per line. Each line listing takes the form  summary attribute   *attribute-name attribute-value1 attribute-value2 ... attribute-valueN* .
