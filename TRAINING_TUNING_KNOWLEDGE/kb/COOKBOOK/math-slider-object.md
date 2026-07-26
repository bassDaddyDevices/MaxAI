---
type: cookbook
name: "Math in the slider object"
summary: "The slider object has some attributes that have a significant effect on its output: floatoutput, size, minimum and multiplier."
chapter: "Max"
keywords: ["slider", "scale", "mapping", "user interface"]
objects: ["ctlin", "expr", "scale", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/slidermath.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/slidermath.png"
---

# Math in the slider object

The **slider** object has some attributes that have a significant effect on its output: *floatoutput*, *size*, *min*[imum] and *mult*[iplier]. By default **slider** uses only integer values, with a size of 128 (i.e., ranging from 0 to 127). For an integer **slider**, the range will be *size* different integers from 0 to *size*-1, whereas for a float **slider** the input range will be the full range from 0. to *size*., inclusive. As with many Max objects, an incoming *float* will be truncated to *int* unless the **slider**’s *floatoutput* attribute is set to 1.

Any incoming number will be clipped to stay within the **slider**’s range, then will be multiplied by *mult* (called Output Multiplier in the Inspector), then will get *min* added to it (called Output Minimum in the Inspector), and then will be sent out. Thus, the number that goes out can be very different from what comes in.

So, it’s important to remember that the attribute *min* refers to the minimum output, not the minimum input. It's best to think of the so-called *min*imum as an “offset” that will be added to whatever comes in the inlet. You can think of the multiplier and offset as performing a linear mapping of input to output, sort of like having a hidden **scale** object inside the **slider**. If you find that hidden math to be confusing, you might prefer to leave the **slider**’s *mult* at 1. and its *min* at 0., and do the math in separate objects.

## Objects used

`slider` ×6, `scale`, `expr`, `ctlin`

*Patch contains 34 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/slidermath.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/slidermath.png`
