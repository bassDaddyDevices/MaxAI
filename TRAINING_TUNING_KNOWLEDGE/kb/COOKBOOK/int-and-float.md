---
type: cookbook
name: "Int and float"
summary: "Did you know that some Max objects make a distinction between integer numbers and numbers that have a fractional part?"
chapter: "Max"
keywords: ["order", "*", "multiplication", "integer"]
objects: ["*"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/intandfloatmultiplication.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/int and float multiplication.png"
---

# Int and float

Did you know that some Max objects make a distinction between integer numbers and numbers that have a fractional part? It’s often important to remember this, and to [specify the kind of number you’re using](#how), so that calculations in your program will be made correctly. (You can cut to the chase if you don’t want to read the full explanation.)

An *integer* is a number that has no decimal point or fractional part, such as …-3, -2, -1, 0, 1, 2, 3… etc. These numbers are most commonly stored in the computer’s memory with a particular data type called “long integer”, which sometimes shortened to “long” or just “int“.

Numbers that have a fractional part, or even that just have a decimal point—such as 3.1416 or 0.999999 or -7.—are usually stored differently in the computer’s memory, with a method called “floating point”, which is usually shortened to “float“.

The important thing to know for the purpose of programming in Max is that these two types of numbers exist as two separate types of message in Max. You can read about the main types of different messages in Max in the article excerpted from the original Max manual, called [Rudiments of Max](http://music.arts.uci.edu/dobrian_book/drupal/sites/default/files/MaxRudiments.pdf).

Objects that expect to get a message of type ‘float’ in their inlets can usually handle ‘int’ messages just as well; the object will simply convert an ‘int’ (such as -7) into a ‘float’ (such as -7.000000). However, some objects expect to get a message of type ‘int’ in a particular inlet, and if they get a ‘float’ number instead, they simply “truncate” (i.e. chop off) the fractional part. For example, the number 3.1416 would get converted to 3 by such an inlet. If you don’t know about that fact, you might be sometimes mystified by what seem to be miscalculations by the computer.

The most common way you might encounter this is when you use the math operator objects such as **+**, **–**, **\*** (times), and **/**. By default, those objects expect to use ‘int’ messages. For example, notice what happens in this program.

![](/dobrian_book/drupal/sites/default/files/multiplicationint.png)

Fortunately…

**Here’s how to multiply floats instead of ints:**

If we want to ensure multiplication using floats instead of ints, all we need to do is include an argument in the **\*** object that contains a decimal point. The typed-in argument sets the initial value for the right inlet of math objects such as **\***, and if the argument contains a decimal point, the object will use floats for its calculations instead of ints, and will send out a float result.

N.B. All MSP objects (objects that handle audio data and end with a **~**) use only floats for all their calculations.

![](/dobrian_book/drupal/sites/default/files/multiplicationfloat.png)

## Objects used

`*` ×2

*Patch contains 32 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/intandfloatmultiplication.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/int and float multiplication.png`
