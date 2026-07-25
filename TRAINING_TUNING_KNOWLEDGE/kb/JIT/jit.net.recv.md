---
type: jitter
name: "jit.net.recv"
summary: "Receive matrices from a  jit.net.send object via TCP/IP"
signal: false
url: "https://docs.cycling74.com/reference/jit.net.recv/"
package: "Jitter"
see_also: ["jit.broadcast", "jit.net.send", "jit.qt.broadcast"]
---
# jit.net.recv

Receive matrices from a [jit.net.send](https://docs.cycling74.com/reference/jit.net.send) object via TCP/IP

## Description

Use [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv) to output matrices and messages sent over a network connection by [jit.net.send](https://docs.cycling74.com/reference/jit.net.send).

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### connected[int]

Whether or not the object is currently connected to a [jit.net.send](https://docs.cycling74.com/reference/jit.net.send) client.

### ip[symbol]

The IP address to monitor for incoming connections (default = ANY)

### port[int]

The port to monitor for incoming connections (default = 7474)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### getmatrix

Retrieves the next incoming matrix. This message is only useful when used in conjunction with Javascript, Java, and C.

### getmessage

Retrieves the next incoming message. This message is only useful when used in conjunction with Javascript, Java, and C.

## See Also

| Name | Description |
| --- | --- |
| [jit.broadcast](https://docs.cycling74.com/reference/jit.broadcast) |  |
| [jit.net.send](https://docs.cycling74.com/reference/jit.net.send) | Send matrices to a jit.net.recv object via TCP/IP |
| [jit.qt.broadcast](https://docs.cycling74.com/reference/jit.qt.broadcast) |  |
