---
type: jitter
name: "jit.gradient.ui"
summary: "GUI for creating 1-dimensional gradient matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.gradient.ui/"
package: "Jitter Tools"
see_also: ["jit.gradient", "jit.mgraphics"]
---
# jit.gradient.ui

GUI for creating 1-dimensional gradient matrices

## Description

The [jit.gradient.ui](https://docs.cycling74.com/reference/jit.gradient.ui) object provides a handy GUI for creating and manipulating 4-plane 1-dimensional gradient matrices. Functionality is similar to the [jit.gradient](https://docs.cycling74.com/reference/jit.gradient) object.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### alpha\_last

The word  alpha\_last , followed by a zero or 1, sets which plane in the matrix contains the alpha values (default = 0). When  alpha\_last  is disabled (set to 0). the output format is ARGB. When  alpha\_last  is enabled (set to 1). the output format is RGBA.

### bang

A  bang  message will cause the object to send the current gradient matrix out the object's outlet.

### clear

The word  clear  will clear all colors from the matrix except for the first (index 0).

### move\_pointer

The word  move\_pointer , followed by an integer which specifies the pointer index and a floating-point number in the range 0. - 1.0 will position the pointer index along the range of the gradient.

### output\_matrix\_dim

The word  output\_matrix\_dim , followed by an integer, specifies the dimension (size) of the gradient matrix. The size is related to the gradient resolution of the output matrix; a smaller size will result in a gradient with fewer shades.

### pointer\_color

The word  pointer\_color , followed by an integer which specifies the pointer index and four floating-point numbers in the range 0. - 1.0 sets the color for a pointer index along the range of the gradient.

## See Also

| Name | Description |
| --- | --- |
| [jit.gradient](https://docs.cycling74.com/reference/jit.gradient) | Generate Chebyshev gradients |
| [jit.mgraphics](https://docs.cycling74.com/reference/jit.mgraphics) | 2D Vector Graphics |
