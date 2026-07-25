---
type: jitter
name: "jit.uldl"
summary: "Internet upload/download"
signal: false
url: "https://docs.cycling74.com/reference/jit.uldl/"
package: "Jitter"
see_also: ["jit.qt.movie", "jit.textfile"]
---
# jit.uldl

Internet upload/download

## Description

The [jit.uldl](https://docs.cycling74.com/reference/jit.uldl) object provides asynchronous file upload and download. Download is possible from  **http://** ,  **https://** ,  **ftp://** , and  **file:///**  URLs. Upload is only possible to  **ftp://**  URLs.

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### defaultdir[symbol]

The default download directory (default = default path)

### convert[int]

When the flag is set (the default), the [jit.uldl](https://docs.cycling74.com/reference/jit.uldl) object will convert the line breaks in downloaded data (DOS or Unix-style) to Macintosh-style line breaks.

### dir\_list[int]

List remote directories flag (FTP-only, default = 0)

When the flag is set, the [jit.uldl](https://docs.cycling74.com/reference/jit.uldl) object will attempt to list the contents of a remote directory, if the URL specifies one. This feature is only available for FTP URLs.

WINDOWS USERS: This functionality is not currently available.

### dirlist[int]

List remote directories flag (FTP-only, default = 0)

Duplicates the functionality of the dir\_list attribute.

### passive[int]

When the flag is set (the default) FTP connections will be made using passive mode.

### password[symbol]

The password, if required

### percent[int]

Upload/download percent report flag (default = 0)

When the flag is set, the periodic indications of a download operation's progress (as a floating point number between 0 and 1) are reported from the right outlet.

### report[int]

The upload/download status report flag (default = 0)

When the flag is set, periodic status data is sent out the right outlet during data transfer operations.

### url\_dl[symbol]

The download URL (default = [none])

### url\_ul[symbol]

The upload URL (default = [none])

### urldl[symbol]

The download URL (default = [none])

### urlul[symbol]

The upload URL (default = [none])

### username[symbol]

The username, if needed for upload and download (default = [none])

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### abort

Aborts a download or upload operation in progress.

### download

Begins a download operation from the URL specified in the argument. Any data is downloaded to the default path or the directory specified by the defaultdir attribute. If no argument is given, download begins from the URL specified by the url\_dl attribute. If the argument  *matrix*  is given, data will be downloaded to a Jitter matrix, and output via the [jit.uldl](https://docs.cycling74.com/reference/jit.uldl) object's left (matrix) outlet.

Arguments:

- URL
  [symbol]

### upload

Begins an upload operation from the local file specified by the first argument, to the URL specified in the second argument. If no second argument is given, upload is to the URL specified by the url\_ul attribute.

Arguments:

- local-file
  [symbol]
- URL
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.qt.movie](https://docs.cycling74.com/reference/jit.qt.movie) | Play or edit a movie |
| [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) | Read and write a matrix as an ASCII text file |
