---
type: jitter
name: "jit.freeframe"
summary: "Utilize FreeFrame effects"
signal: false
url: "https://docs.cycling74.com/reference/jit.freeframe/"
package: "Jitter"
---
# jit.freeframe

Utilize FreeFrame effects

## Description

Provides support for using FreeFrame effects within Jitter. It supports both single and dual input effects, and 32-bit and 16-bit data sizes.

#### Discussion

The object's interface is complicated by the FreeFrame architecture -- each effect may have a completely different set of parameters.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 1 | 4 | 1 | char |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### fx[symbol]

The currently loaded effect

### inmode[symbol]

The matrix input mode (jitter/freeframe).

The inmode and outmode attributes provide an optimization when building chains of [jit.freeframe](https://docs.cycling74.com/reference/jit.freeframe) objects. Because Jitter and FreeFrame use different byte-padding, matrices generally have to be copied to a new buffer when the arrive at a [jit.freeframe](https://docs.cycling74.com/reference/jit.freeframe) object, and copied back into a Jitter matrix after processing, before output. If several [jit.freeframe](https://docs.cycling74.com/reference/jit.freeframe) objects will be used to sequentially process data, this copying step can be avoided.

The first object in the chain should have inmode set to  jitter , and outmode set to  freeframe . All subsequent objects should have both attributes set to  freeframe , except for the last one, which should have inmode set to  freeframe , and outmode set to  jitter .

### numparams[int] read-only

The number of parameters for the currently loaded effect (default = -1)

A value of -1  indicates that there is no loaded effect.

### outmode[symbol]

The matrix output mode (jitter/freeframe).

The inmode and outmode attributes provide an optimization when building chains of [jit.freeframe](https://docs.cycling74.com/reference/jit.freeframe) objects. Because Jitter and FreeFrame use different byte-padding, matrices generally have to be copied to a new buffer when the arrive at a [jit.freeframe](https://docs.cycling74.com/reference/jit.freeframe) object, and copied back into a Jitter matrix after processing, before output. If several [jit.freeframe](https://docs.cycling74.com/reference/jit.freeframe) objects will be used to sequentially process data, this copying step can be avoided.

The first object in the chain should have inmode set to  jitter , and outmode set to  freeframe . All subsequent objects should have both attributes set to  freeframe , except for the last one, which should have inmode set to  freeframe , and outmode set to  jitter .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

If the message selector matches the name of a parameter, functions like the  param  message, taking a single  float  (or  symbol , in the case of  text  parameters) argument.

If the message selector matches the word  get , followed by the name of a parameter (e.g.  getbrightness , the message has the same effect as the  getparam  message, but requiring no further arguments.

### geteffectlist

Sends a list out the object's right outlet comprising the names of all available FreeFrame effects, preceded by the word  effectlist . On Macintosh, FreeFrame effects must be located either in the  */Library/Application Support/FreeFrame/>*  folder, or in a directory called  *FreeFrame Plugins* , within the Max search path. On Windows, FreeFrame effects must be located either in the  *C:\Program Files\Common Files\FreeFrame\*  folder, or in a directory called  *FreeFrame Plugins* , within the Max search path.

### getparam

Sends a list out the object's right outlet containing the current value of the parameter specified by the  *param*  argument (either by name or by index into the list returned by  getparamlist ). The list is formatted as  param   *param*   *param-val*   *param-display* . The  *param*  argument is the name of the parameters, the  *param-val*  the value, and  *param-display*  is an alternate display value, for parameters whose "real value", as understood by the parameter, lies outside of the range 0-1.

Arguments:

- param
  [symbol/int]

### getparamlist

Sends lists out the object's right outlet describing the parameters for the currently selected effect, one list per parameter (see numparams). The list or lists are in the form  paramlist   *param-name*   *param-type* .

All parameters, regardless of type (with the exception of  text ), accept a single floating-point number between 0 and 1 as input.

The parameter types are:  boolean ,  event ,  red ,  green ,  blue ,  xpos ,  ypos ,  text ,  standard .

After all parameters have been listed, the message  paramlist done  is output.

### loadeffect

Selects an available FreeFrame effect for use. The effect must be specified by its name, as reported by the  geteffectlist  message.

Arguments:

- effect-name
  [symbol]

### param

Sets the value of the parameter specified by the  *param*  argument (either by name or by index into the list returned by  getparamlist ). All parameters, regardless of type (with the exception of  text ), accept a single floating-point number between 0 and 1 as input. See the  getparamlist  message for additional information on parameter types.

Arguments:

- param
  [symbol/int]
- value
  [float/symbol]

### reload

Causes the object to rescan the FreeFrame plugins folders and add any new plugins to its list of effects. See the  geteffectlist  method for more details.
