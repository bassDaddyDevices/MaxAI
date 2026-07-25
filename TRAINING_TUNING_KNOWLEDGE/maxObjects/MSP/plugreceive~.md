---
type: msp
name: "plugreceive~"
summary: "Receive audio from another plug-in"
signal: true
url: "https://docs.cycling74.com/reference/plugreceive~/"
package: "MSP"
see_also: ["plugsend~"]
---
# plugreceive~

Receive audio from another plug-in

## Description

**The use of the [plugsend~](https://docs.cycling74.com/reference/plugsend~) and [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) objects to pass audio between Max for Live devices is not supported.**
The [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) and [plugsend~](https://docs.cycling74.com/reference/plugsend~) objects were used to send audio signals from one pluggo plug-in to another. They were used in the implementation of the PluggoBus feature of many of the plug-ins included with pluggo.

## Arguments

### object-name[symbol] optional

Gives the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) object a name used for connecting with one or more [plugsend~](https://docs.cycling74.com/reference/plugsend~) objects.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### set

The word  set , followed by a symbol naming a [plugsend~](https://docs.cycling74.com/reference/plugsend~) object, connects the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) object to the specified [plugsend~](https://docs.cycling74.com/reference/plugsend~) object(s), and the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) object's audio output becomes the input to the [plugsend~](https://docs.cycling74.com/reference/plugsend~). If the symbol doesn't name a [plugsend~](https://docs.cycling74.com/reference/plugsend~) object, the audio output becomes zero.

Arguments:

- object-name
  [symbol]

### signal

The input to the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) object comes from a [plugsend~](https://docs.cycling74.com/reference/plugsend~) object to which it is currently connected. Initially, this will be a [plugsend~](https://docs.cycling74.com/reference/plugsend~) having the same name as the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) object's argument.

## Output

### signal

The audio signal input to the [plugsend~](https://docs.cycling74.com/reference/plugsend~) objects connected to this object. If no [plugsend~](https://docs.cycling74.com/reference/plugsend~) objects are connected, the audio output is zero.

There may be a delay of one processing (I/O) vector size of the host mixer between the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) output and the inputs to the plug-in which the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) is located. This occurs when a [plugsend~](https://docs.cycling74.com/reference/plugsend~) occurs later in the processing chain than the [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) to which it is sending audio.

## See Also

| Name | Description |
| --- | --- |
| [plugsend~](https://docs.cycling74.com/reference/plugsend~) | Send audio to another plug-in |
