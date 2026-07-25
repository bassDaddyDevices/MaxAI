---
type: jitter
name: "jit.openexr"
summary: "Read or write an OpenEXR image."
signal: false
url: "https://docs.cycling74.com/reference/jit.openexr/"
package: "Jitter"
see_also: ["jit.matrix", "jit.bfg"]
---
# jit.openexr

Read or write an OpenEXR image.

## Description

Converts an OpenEXR image to and from a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object for an arbitrary number of planes or color components.

#### Discussion

OpenEXR is a high dynamic-range (HDR) image file format developed by Industrial Light and Magic for use in computer imaging applications.

The [jit.openexr](https://docs.cycling74.com/reference/jit.openexr) object supports 16-bit unsigned integer as well as 16-bit (aka "half") and 32-bit floating-point color component values. Half values have 1 sign bit, 5 exponent bits, and 10 mantissa bits. For linear images, this format provides 1024 (210) values per color component per f-stop, and 30 f-stops (25 - 2), with an additional 10 f-stops with reduced precision at the low end (denormals). The half format supports denormalized numbers, positive and negative infinities, and NaNs. It is identical to the half data type in NVIDIA's Cg graphics language.

When converted to or from a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object, half values get promoted to 32 bit floating-point values (float32), 16-bit integer values get converted to 8-bit unsigned char, 64 bit floating-point values get converted to 32 bit, and 32 bit integer values get converted to 16 bit unsigned.

OpenEXR also supports several lossless compression methods (PIZ, ZIP, RLE), which can achieve compression ratios of about 2:1 for images with film grain.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### adjust[int]

Flag to enable or disable adjusting the HDR image data through ILM's proposed display mapping pipeline (default = 0). When enabled, the exposure, defog, kneehigh, kneelow, and normalize attributes can be used to control the following display mapping process:

1. Compensate for fogging by subtracting defog from the raw pixel values.

2. Multiply the defogged pixel values by 2(exposure + 2.47393).

3. Values, which are now 1.0, are called "middle gray." If defog and exposure are both set to 0.0, then middle gray corresponds to a raw pixel value of 0.18. In step 6, middle gray values will be mapped to an intensity 3.5 f-stops below the display's maximum intensity.

4. Apply a knee function. The knee function has two parameters, kneeLow and kneeHigh. Pixel values below 2kneeLow are not changed by the knee function. Pixel values above kneeLow are lowered according to a logarithmic curve, such that the value 2kneeHigh is mapped to 23.5 (in step 6, this value will be mapped to the display's maximum intensity).

5. Gamma-correct the pixel values.

6. Scale the values such that middle gray pixels are mapped to 84.66 (or 3.5 f-stops below the display's maximum intensity).

7. If converting to 8 bit unsigned integer values (char), clamp the values to [0, 255].

### channels[32 symbols]

The list of channel names to use. When reading an OpenEXR file into a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object, these channels will be mapped to sequential planes. If a channel does not exist it will be filled with zeros. When writing a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object, the names listed in this list will be used to name each plane as they are stored in the OpenEXR file. (default = null)

### defog[float]

Value subtracted from pixel values to compensate for fogging due to stray light in the recording device (default = 0.0).

### exposure[float]

Sets the apparent exposure of the image on the display. It lightens or darkens the displayed image, allowing you to reveal detail in the high or low end. (default = 0.0)

### gamma[float]

Coefficient to use for gamma correcting the pixel values (default = 2.2)

### kneehigh[float]

Pixel values between kneeHigh and kneeLow set the white level of the displayed image, determining which value is mapped to the maximum intensity of the monitor (default = 3.5)

### kneelow[float]

Pixel values between kneehigh and kneelow set the white level of the displayed image, determining which value is mapped to the maximum intensity of the monitor (default = 0.0).

### normalize[int]

Flag to enable or disable normalization for rempping the floating point data into a uniform range of 0-1. This operation will be performed before the display mapping process. (default = 0)

### outputfile[int]

In order to output the contents of an openexr file from JS users must either provide an input matrix or enable outputfile.

### verbose[int]

Toggles the printing of information to Max Console.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

Drag and drop an exr media file onto the object to load it.

### read

Reads the given file into a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) using the indicated channels listed in the channel attribute. File read notifications are sent out of the dump outlet as a list composed of the message read, the path to the file, and a 0 or 1, where 0 = failure, 1 = success.

Arguments:

- filename
  [symbol]

### write

Writes the current [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) to disk as an OpenEXR image file using the indicated channels listed in the channel attribute.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.bfg](https://docs.cycling74.com/reference/jit.bfg) | Evaluate a procedural basis function graph |
