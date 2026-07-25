---
type: max
name: "filein"
summary: "Read and access a file of binary data"
signal: false
url: "https://docs.cycling74.com/reference/filein/"
package: "Max"
see_also: ["text"]
---
# filein

Read and access a file of binary data

## Description

[filein](https://docs.cycling74.com/reference/filein) reads a file of binary data and outputs the data at various points in the file given the appropriate input.

## Arguments

### filename[symbol] optional

Specifies a filename to be read into the [filein](https://docs.cycling74.com/reference/filein) object automatically when the patch is loaded.

### spool[symbol] optional

A second argument of the word  spool  will cause the file to be accessed from disk rather than read into memory.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Specifies a byte offset in a binary file, and outputs the data stored at that point in the file.

Arguments:

- offset
  [int]

### (inlet1)

In middle inlet: The 16-bit word contained at that byte offset in the file is sent out the left outlet as an unsigned (short) integer.

Arguments:

- offset
  [int]

### (inlet2)

In right inlet: The 32-bit word contained at that byte offset within the file is sent out the left outlet as an unsigned (long) integer.

Arguments:

- byte-offset
  [int]

### fclose

Closes the file being read, making [filein](https://docs.cycling74.com/reference/filein) no longer respond to  int  or  list  messages.

### read

Displays a standard file dialog to select a file to be read into memory. If the word  read  is followed by a filename found in Max's search path, that file will be automatically read into memory.

Arguments:

- filename
  [symbol]

### spool

Displays a standard file dialog to select a file, which will be accessed from disk whenever an  int  is received. If the word  spool  is followed by a filename found in Max's search path, that file will be automatically pointed to for future access. This method of accessing a file occupies less RAM, but does not output data immediately at interrupt level in response to an  int  message.

Arguments:

- filename
  [symbol]

## Output

### bang

Out middle outlet: When a number greater than or equal to the number of bytes in the file is received in an inlet, a  bang  is sent out signifying that the end of the file (EOF) has been reached.

Out right outlet: Signifies that a  read  or  spool  operation has been completed. This  bang  indicates that the file has been accessed successfully and that [filein](https://docs.cycling74.com/reference/filein) is ready to receive  int  messages.

### int

Out left outlet: An unsigned integer representing the 8, 16, or 32 bits stored in the file at the location specified by the input  int .

## See Also

| Name | Description |
| --- | --- |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |
