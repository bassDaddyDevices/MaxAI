---
type: msp
name: "pong~"
summary: "Variable range signal folding"
signal: true
url: "https://docs.cycling74.com/reference/pong~/"
package: "MSP"
see_also: ["phasewrap~"]
---
# pong~

Variable range signal folding

## Description

Use the [pong~](https://docs.cycling74.com/reference/pong~) object to clip, fold, or wrap its input within the range of a low value and a high value.

#### Discussion

The optional arguments are <mode> <lo val> <hi val>.  mode 0  is fold,  mode 1  is wrap, and  mode 2  is clip. The default mode is fold. The default range is zero to one. If <hi val> is greater than <lo val>, their behavior is swapped. All inlets accept both signals and floats. The  mode  message may be used to switch between fold, wrap, and clip modes. It is useful for performing modulo arithmetic, as well as foldover or wraparound distortion.

## Arguments

### folding-mode[int] optional

An optional argument is used to set the mode of the [pong~](https://docs.cycling74.com/reference/pong~). A 0 sets signal folding (the default), a 1 sets signal wrapping, and a 2 sets signal clipping (see the  mode  message).

### low-value[float] optional

When used with the optional mode argument, the low range value for the [pong~](https://docs.cycling74.com/reference/pong~) object can be specified by a float argument. If only one argument is given following the mode argument (e.g.,  pong~ 0 .1 ), it specifies the low range value of the [pong~](https://docs.cycling74.com/reference/pong~) object above which folding occurs, and the high range value is set to 1.0 (the default).

### high-value[float] optional

When used with the optional mode argument, the high range value for the [pong~](https://docs.cycling74.com/reference/pong~) object can be specified by a float argument.

## Attributes

### mode[symbol]

Behaviour of limiting when input exceeds range.

Possible values:

'fold'

'wrap'

'clip'

### range[2 floats]

The range within which to keep values. Values outside of this range will be subject to a limiting algorithm chosen by the mode attribute.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: All incoming signal, int, or float values which exceed the high or low value ranges specified by arguments to the [pong~](https://docs.cycling74.com/reference/pong~) object are either folded back into this range, wrapped, or clipped according to the mode of the [pong~](https://docs.cycling74.com/reference/pong~) object.

In center or right inlet: The [pong~](https://docs.cycling74.com/reference/pong~) object accepts low and high range values for the range outside of which folding occurs. The center inlet specifies the low value range below which folding occurs, and the right inlet specifies the high range limit.

If the current low range value is greater than the high range value, their behavior is swapped.

Arguments:

- input
  [int]

### float

In left inlet: All incoming signal, int, or float values which exceed the high or low value ranges specified by arguments to the [pong~](https://docs.cycling74.com/reference/pong~) object are either folded back into this range, wrapped, or clipped according to the mode of the [pong~](https://docs.cycling74.com/reference/pong~) object.

In center or right inlet: The [pong~](https://docs.cycling74.com/reference/pong~) object accepts low and high range values for the range outside of which folding occurs. The center inlet specifies the low value range below which folding occurs, and the right inlet specifies the high range limit.

If the current low range value is greater than the high range value, their behavior is swapped.

Arguments:

- input
  [float]

### signal

In left inlet: All incoming signal, int, or float values which exceed the high or low value ranges specified by arguments to the [pong~](https://docs.cycling74.com/reference/pong~) object are either folded back into this range, wrapped, or clipped according to the mode of the [pong~](https://docs.cycling74.com/reference/pong~) object.

In center or right inlet: The [pong~](https://docs.cycling74.com/reference/pong~) object accepts low and high range values for the range outside of which folding occurs. The center inlet specifies the low value range below which folding occurs, and the right inlet specifies the high range limit.

If the current low range value is greater than the high range value, their behavior is swapped.

## Output

### signal

The folded signal or float value.

## See Also

| Name | Description |
| --- | --- |
| [phasewrap~](https://docs.cycling74.com/reference/phasewrap~) | Wrap a signal between π and -π |
