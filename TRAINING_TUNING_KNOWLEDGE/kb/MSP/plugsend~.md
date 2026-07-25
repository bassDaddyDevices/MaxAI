---
type: msp
name: "plugsend~"
summary: "Send audio to another plug-in"
signal: true
url: "https://docs.cycling74.com/reference/plugsend~/"
package: "MSP"
see_also: ["plugreceive~"]
---
# plugsend~

Send audio to another plug-in

## Description

**The use of the [plugsend~](https://docs.cycling74.com/reference/plugsend~) and [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) objects to pass audio between Max for Live devices is not supported.**
The [plugsend~](https://docs.cycling74.com/reference/plugsend~) and [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) objects are used to send audio signals from one pluggo plug-in to another. They are used in the implementation of the PluggoBus feature of many of the plug-ins included with pluggo.

## Arguments

### object-name[symbol] optional

Gives the [plugsend~](https://docs.cycling74.com/reference/plugsend~) object a name used for connecting with other [plugsend~](https://docs.cycling74.com/reference/plugsend~) and [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) objects.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The input to the [plugsend~](https://docs.cycling74.com/reference/plugsend~) object is mixed with other [plugsend~](https://docs.cycling74.com/reference/plugsend~) objects, which can be in the same plug-in or a different plug-in, and is then sent out the signal outlets of any connected [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) objects.

## See Also

| Name | Description |
| --- | --- |
| [plugreceive~](https://docs.cycling74.com/reference/plugreceive~) | Receive audio from another plug-in |
