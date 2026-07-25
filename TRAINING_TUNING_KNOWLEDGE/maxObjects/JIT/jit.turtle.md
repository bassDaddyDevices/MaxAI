---
type: jitter
name: "jit.turtle"
summary: "2-d turtle graphics interpreter"
signal: false
url: "https://docs.cycling74.com/reference/jit.turtle/"
package: "Jitter"
see_also: ["jit.lcd", "jit.linden"]
---
# jit.turtle

2-d turtle graphics interpreter

## Description

The [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object emulates simple LOGO-style graphics. It interprets single char values in its inlet as ASCII letters that describe turtle graphics commands. A valid ASCII input will generate appropriate drawing commands for use with either the Max [lcd](https://docs.cycling74.com/reference/lcd) object or the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

#### Discussion

The [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object supports branching (via the  *[*  and  *]*  symbols) up to a maximum stack size of 1024 nested branches. While interesting in itself, it is most useful when used with automatic string generators (either Max patches or objects such as [jit.linden](https://docs.cycling74.com/reference/jit.linden)). ASCII codes which don't make any sense to the [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object are ignored. Symbols which the user wishes to bypass can be filtered out by placing a [select](https://docs.cycling74.com/reference/select) or [route](https://docs.cycling74.com/reference/route) object with the appropriate ASCII numbers between the source of the commands and the [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object.

While the [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object doesn't use Jitter matrices to store and generate data, it uses the Jitter attribute system to set and query its internal state (origin, angle, scale, and clearmode are all Jitter attributes).

Turtle graphics packages are fairly ubiquitous and some have conflicting syntaxes. The turtle syntax used in the object is optimized for the visualization of Lindenmayer Systems (or L-systems), which tend to use the same group of commands.

If you were never subjected to turtle graphics in school (or elsewhere), here is the basic idea:

You are a turtle. As if that weren't bad enough, you are also inhibited by only being able to turn and go forward in discrete amounts (you can also turn around). However, to make up for this your creator has given you two very cool genetic advantages over the average reptile:

1) you have a limitless supply of ink which secretes from your tail (which is usually referred to as the PEN). By dragging your tail along the floor as you move and turn you can therefore tell the entire world (or, at least, anyone who looks) all about how much it sucks to be a turtle.

2) you can make quantum jumps back and forth to geographical positions and bearings where you've been before (though, to be fair, you don't really know anything about those positions until you get there). This is called BRANCHING, and it lets you, a mere turtle, draw some incredibly complex images.

The [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object has the following basic instruction set which it recognizes as ASCII characters sent to its inlet:

*F* : Move forward a discrete amount with your tail down (drawing a line).

*f* : Move forward a discrete amount with your tail up (changing your position without drawing).

*+* : Turn right.

*-* : Turn left.

*|* : Turn around.

*#* : Press harder with your tail, creating a thicker line.

*!* : Press lighter with your tail, creating a thinner line.

*[* : Start a branch.

*]* : End a branch.

Using the commands to start or end a branch lets you remember a position and angle and then magically return to it later.

The turtle's starting position can be changed by the origin attribute. The number of steps (in pixels) that the turtle moves with each forward command can be set with the scale attribute. The number of degrees in each turn is set by the angle attribute.

## Arguments

None.

## Attributes

### angle[int]

The number of degrees in each turn the turtle makes (default = 30)

### clearmode[int]

Clear on reset flag (default = 1) When the flag is set, a  clear  message is sent in response to a  reset  command.

### origin[2 ints]

The point in Cartesian coordinates for the turtle to begin drawing from after a  reset  (default = 80 120)

### scale[int]

The size of a step (in pixels) that the turtle takes with each forward movement (default = 10)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

ASCII character commands for the turtle

Valid numbers are 35 ( *#* ), 33 (*!* ), 70 ( *F* ), 102 ( *f* ), 91 ( *[* ), 93 ( *]* ), 43 ( *+* ), 45 (*-* ), and 124 ( *|* ).

### reset

Resets the turtle to the position specified by the origin attribute. If the clearmode attribute is set, the  clear  message will be sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) | QuickDraw wrapper (deprecated) |
| [jit.linden](https://docs.cycling74.com/reference/jit.linden) | Lindenmayer string expansion (L-systems) |
