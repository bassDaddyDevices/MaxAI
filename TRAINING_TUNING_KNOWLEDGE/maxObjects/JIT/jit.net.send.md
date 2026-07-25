---
type: jitter
name: "jit.net.send"
summary: "Send matrices to a  jit.net.recv object via TCP/IP"
signal: false
url: "https://docs.cycling74.com/reference/jit.net.send/"
package: "Jitter"
see_also: ["jit.broadcast", "jit.net.recv", "jit.qt.broadcast"]
---
# jit.net.send

Send matrices to a [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv) object via TCP/IP

## Description

Use [jit.net.send](https://docs.cycling74.com/reference/jit.net.send) to send matrices and messages over a network connection to an instance of [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv).

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### connected[int]

Whether or not the object is currently connected to a [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv) server.

### host[symbol]

The domain name to form a connection with (default = localhost)

### ip[symbol]

The IP address to form a connection with (default = 127.0.0.1, the local loopback)

### latency[float]

An estimate of the time between a matrix being input to the [jit.net.send](https://docs.cycling74.com/reference/jit.net.send) object and being output from the corresponding [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv).

### nagle[int]

Toggles the use of Nagle's algorithm flag (default is 0/off). Improves network efficiency for small packet sizes, though at the possible expense of latency.

### port[int]

The port to use when creating the connection (default = 7474)

### report[int]

Toggles the report connected flag (default is 1/on). When enabled, the [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv) object will report connection information out the dumpout outlet.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Any number sent in the object's right inlet is output by the middle outlet of the connected [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv).

### float

Any number sent in the object's right inlet is output by the middle outlet of the connected [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv).

### list

Any message sent in the object's right inlet is output by the middle outlet of the connected [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv).

### anything

Any message sent in the object's right inlet is output by the middle outlet of the connected [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv).

Arguments:

- matrix-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.broadcast](https://docs.cycling74.com/reference/jit.broadcast) |  |
| [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv) | Receive matrices from a jit.net.send object via TCP/IP |
| [jit.qt.broadcast](https://docs.cycling74.com/reference/jit.qt.broadcast) |  |
