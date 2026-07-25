---
type: max
name: "setclock"
summary: "Create and control an alternative clock"
signal: false
url: "https://docs.cycling74.com/reference/setclock/"
package: "Max"
see_also: ["clocker", "metro", "timer"]
---
# setclock

Create and control an alternative clock

## Description

Allows the creation of alternatives to the standard millisecond clock. This includes several modes of timing that change timing activities. Each [setclock](https://docs.cycling74.com/reference/setclock) is associated with a name (its first argument), and this name may be passed as the argument to a "clock" message to numerous objects that use timing in Max, such as [metro](https://docs.cycling74.com/reference/metro), [line](https://docs.cycling74.com/reference/line), and [pipe](https://docs.cycling74.com/reference/pipe).

## Arguments

### name[symbol] optional

Obligatory. The first argument is the name of the [setclock](https://docs.cycling74.com/reference/setclock) object, by which timing objects such as [clocker](https://docs.cycling74.com/reference/clocker), [line](https://docs.cycling74.com/reference/line), [metro](https://docs.cycling74.com/reference/metro), [pipe](https://docs.cycling74.com/reference/pipe), and [tempo](https://docs.cycling74.com/reference/tempo) can refer to the [setclock](https://docs.cycling74.com/reference/setclock). Those timing objects -- once they have received the message  clock  followed by the name of a [setclock](https://docs.cycling74.com/reference/setclock) object -- use that [setclock](https://docs.cycling74.com/reference/setclock) as their timing source instead of Max's regular millisecond clock. The [setclock](https://docs.cycling74.com/reference/setclock) object need not be in the same patcher as the timing objects that refer to it. More than one [setclock](https://docs.cycling74.com/reference/setclock) object may exist with the same name; [setclock](https://docs.cycling74.com/reference/setclock) objects with the same name share the same clock time information. (Note: Different [setclock](https://docs.cycling74.com/reference/setclock) objects that share the same name argument can have different mode arguments typed in, but they will in fact operate with the mode of whichever [setclock](https://docs.cycling74.com/reference/setclock) was first loaded with that name. Thus, [setclock](https://docs.cycling74.com/reference/setclock) objects with the same name but different modes may behave unpredictably, since the order in which they are loaded by Max is often unknown.)

The second (optional) argument describes the mode of clock operation this [setclock](https://docs.cycling74.com/reference/setclock) object will have. The possible modes for the second argument are:

### mode[symbol] optional

The word  pass  specifies passive mode. In this mode, the [setclock](https://docs.cycling74.com/reference/setclock) object's current clock time is set by a number received in the left inlet, and associated timing objects will follow that clock time just as if it were a regularly progressing millisecond clock. If no second argument is present, the mode is  pass  by default.

The word  add  specifies additive mode. A number received in the left inlet is added to the current clock time to determine the new clock time.

The word  mul  specifies multiplicative mode. The number received in the left inlet is used as a factor by which all associated timing objects will modify their time settings. For example, a factor of  2.0  will cause all timing objects that are using the [setclock](https://docs.cycling74.com/reference/setclock) as their clock source to double their time values (that is, to halve their speed). An alternative (and perhaps more truthful) way to conceptualize the behavior of  mul  mode is to think of the incoming float as a divisor by which [setclock](https://docs.cycling74.com/reference/setclock) divides the speed at which its own clock time progresses. Thus, when it receives the number  2.0  it divides its own clock speed by 2.0, causing the objects which are following that clock to progress twice as slowly.

The word  interp  specifies interpolate mode. The number received in the left inlet is gradually added to the current time of [setclock](https://docs.cycling74.com/reference/setclock), over a time period determined by the amount of time elapsed since the previous number was received. During that time period, [setclock](https://docs.cycling74.com/reference/setclock) linearly interpolates to set its clock to the intermediate values.

### multiplier[float] optional

If the second argument is  mul , an optional third argument specifies a multiplier for the time of all associated timing objects. If no third argument is present, the multiplier is  1.0  by default.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the current time value, according to the [setclock](https://docs.cycling74.com/reference/setclock) object's own clock. Timing objects such as [clocker](https://docs.cycling74.com/reference/clocker), [line](https://docs.cycling74.com/reference/line), [metro](https://docs.cycling74.com/reference/metro), [pipe](https://docs.cycling74.com/reference/pipe), and [tempo](https://docs.cycling74.com/reference/tempo) can use [setclock](https://docs.cycling74.com/reference/setclock) as their clock source instead of Max's regular millisecond clock.

### int

In left inlet: The meaning of the number depends on the second typed-in argument, which identifies the [setclock](https://docs.cycling74.com/reference/setclock) object's mode of operation. If the mode is  pass  [ive] (the default mode), the number sets an absolute clock time which timing objects may use by comparing it to their initial time value. If the mode is  add  [itive], the number is added to the [setclock](https://docs.cycling74.com/reference/setclock) object's current clock time. If the mode is  interp  [olate], [setclock](https://docs.cycling74.com/reference/setclock) will change its clock time incrementally by that amount, over a time period determined by the time elapsed since the previous number was received. (However, negative numbers cause an immediate decrease in the clock time.) If the mode is  ext  [ernal], the number is simply ignored. If the mode is  mul  [tiplicative], the number is used as a multiplier for associated timing objects. For instance the number 0.5 halves the rate of increase (speed) of the associated timing objects.

In right inlet: Sets the time interval, in milliseconds, at which the [setclock](https://docs.cycling74.com/reference/setclock) will report its clock information to associated timing objects. The default is  5  milliseconds.

Arguments:

- timing
  [int]

### float

Performs the same function as  int .

Arguments:

- timing
  [float]

### (inlet1)

In right inlet: Sets the time update interval.

Arguments:

- interval
  [int]

### clock

The word clock, followed by a word, specifies the name of the name of the [setclock](https://docs.cycling74.com/reference/setclock) object, by which timing objects such as [clocker](https://docs.cycling74.com/reference/clocker), [line](https://docs.cycling74.com/reference/line), [metro](https://docs.cycling74.com/reference/metro), [pipe](https://docs.cycling74.com/reference/pipe), and [tempo](https://docs.cycling74.com/reference/tempo) can refer to the [setclock](https://docs.cycling74.com/reference/setclock).

Arguments:

- clock name
  [symbol]

### (mouse)

Double-clicking with the mouse will print status messages in the Max Console.

### reset

The word  reset  followed by a number of milliseconds sets the timing interval at which the object will report its clock information to associated timing objects. The information is reported whenever the next report is due according to the set interval. Please note that the  reset  message only works when [setclock](https://docs.cycling74.com/reference/setclock) is in interpolate mode.

Arguments:

- interval
  [float]

### set

The word  set  followed by a number of milliseconds sets the timing interval at which the object will report its clock information to associated timing objects. The information is reported to those associated objects immediately. Please note that the  set  message only works when [setclock](https://docs.cycling74.com/reference/setclock) is in passive or additive mode.

Arguments:

- interval
  [float]

## Output

### int

When  bang  is received in the left inlet, [setclock](https://docs.cycling74.com/reference/setclock) sends its current time reading out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [clocker](https://docs.cycling74.com/reference/clocker) | Report elapsed time, at regular intervals |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [timer](https://docs.cycling74.com/reference/timer) | Report elapsed time between two events |
