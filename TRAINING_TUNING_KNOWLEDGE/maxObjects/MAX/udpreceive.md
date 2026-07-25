---
type: max
name: "udpreceive"
summary: "Receive messages over a network"
signal: false
url: "https://docs.cycling74.com/reference/udpreceive/"
package: "Max"
see_also: ["udpsend"]
---
# udpreceive

Receive messages over a network

## Description

Receives messages transmitted over a network using the User Datagram Protocol (UDP).

## Arguments

### port[int] optional

Specifies the local port that the [udpreceive](https://docs.cycling74.com/reference/udpreceive) object will use to listen for incoming messages.

### full-packet[symbol] optional

The [udpreceive](https://docs.cycling74.com/reference/udpreceive) object and its counterpart the [udpsend](https://docs.cycling74.com/reference/udpsend) object provide support for third-party Max objects that work with the Open Sound Control (OSC) protocol developed by the Center for New Music and Audio Technologies (CNMAT) at the University of California, Berkeley. An optional symbol argument (it can be any symbol) specifies that the [udpreceive](https://docs.cycling74.com/reference/udpreceive) object should pass on UDP buffers as OSC 'FullPacket' messages instead of decoding them and outputting them as Max messages.

## Attributes

### defer[int]: 0

When enabled, messages are sent out on the low-priority queue instead of the scheduler thread. Especially in Max for Live, this can reduce the chances of audio glitches and dropouts.

### outputformat[symbol]: message

Output Format

Possible values:

'message'

'osc\_packet'

'fullpacket'

'rawbytes'

### quiet[int]

When enabled, status notifications to the Max Console are suppressed.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### maxqueuesize

The word  maxqueuesize , followed by an integer, sets the maximum number of incoming messages that can be in the queue at any given time (default=512). The work queue will grow as needed until this maximum limit is reached. In high-traffic or high-speed situations, you may need to increase the maximum queue size to avoid dropped messages.

Arguments:

- maximum
  [int]

### port

The word  port , followed by a number, sets the local port that the [udpreceive](https://docs.cycling74.com/reference/udpreceive) object will use to listen for incoming messages.

Arguments:

- port
  [int]

## Output

### anything

All OSC-compatible UDP messages received at the port number of the host computer (designated by argument or the  port  message) are sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [udpsend](https://docs.cycling74.com/reference/udpsend) | Send messages over a network |
