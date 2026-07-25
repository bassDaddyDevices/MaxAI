---
type: max
name: "udpsend"
summary: "Send messages over a network"
signal: false
url: "https://docs.cycling74.com/reference/udpsend/"
package: "Max"
see_also: ["udpreceive"]
---
# udpsend

Send messages over a network

## Description

Transmits messages over a network using the User Datagram Protocol (UDP).

## Arguments

### host[symbol] optional

Specifies the host destination to which messages will be sent over a network. Host destinations can be specified either by name (e.g., localhost) or by IP address (e.g., 127.0.0.1).

### port[int] optional

Specifies the remote port that the [udpsend](https://docs.cycling74.com/reference/udpsend) object will use when sending messages.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the  bang  message over the network using UDP.

### int

Sends an  int  message over the network using UDP.

Arguments:

- message
  [int]

### float

Sends a  float  message over the network using UDP.

Arguments:

- message
  [float]

### list

Sends a  list  message over the network using UDP.

Arguments:

- message
  [list]

### anything

Sends the given message over the network using UDP.

Arguments:

- message
  [list]

### FullPacket

The [udpsend](https://docs.cycling74.com/reference/udpsend) object and its counterpart the [udpreceive](https://docs.cycling74.com/reference/udpreceive) object provide support for third-party Max objects that work with the Open Sound Control (OSC) protocol developed by the Center for New Music and Audio Technologies (CNMAT) at the University of California, Berkeley. The  FullPacket  message toggles support for the 'FullPacket' message used by the CNMAT Open Sound Control externals or the Max [udpreceive](https://docs.cycling74.com/reference/udpreceive) object--when set, the [udpsend](https://docs.cycling74.com/reference/udpsend) object will send UDP buffers in the form of OSC 'FullPacket' messages.

Arguments:

- behavior
  [int]
- number
  [int]

### host

The word  host , followed by a symbol, specifies the host destination to which messages will be sent. Host destinations can be specified either by name (e.g., localhost) or by IP address (e.g., 127.0.0.1).

Arguments:

- host
  [symbol]

### maxpacketsize

The word  maxpacketsize , followed by an integer, sets the size, in bytes, of the largest UDP packet that you can send (default=5096). Since this value is related to the largest Max message you can possibly send, you may need to increase this value if you are sending very long Max messages.

Arguments:

- maximum
  [int]

### maxqueuesize

The word  maxqueuesize , followed by an integer, sets the maximum number of incoming messages that can be in the queue at any given time (default=512). The work queue will grow as needed until this maximum limit is reached. In high-traffic or high-speed situations, you may need to increase the maximum queue size to avoid dropped messages.

Arguments:

- maximum
  [int]

### osc\_packet

TEXT\_HERE

### port

The word  port , followed by a number, specifies the remote port that the [udpsend](https://docs.cycling74.com/reference/udpsend) object will use to send outgoing messages.

Arguments:

- port
  [int]

### rawbytes

TEXT\_HERE

## Output

### (UDP)

There are no outlets. Max messages received by the [udpsend](https://docs.cycling74.com/reference/udpsend) object are serialized and sent over the network as OSC-compatible UDP packets.

## See Also

| Name | Description |
| --- | --- |
| [udpreceive](https://docs.cycling74.com/reference/udpreceive) | Receive messages over a network |
