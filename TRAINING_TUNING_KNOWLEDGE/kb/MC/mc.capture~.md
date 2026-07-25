---
type: mc
name: "mc.capture~"
summary: "Store a signal to view as text"
signal: true
url: "https://docs.cycling74.com/reference/mc.capture~/"
package: "MC"
see_also: ["scope~"]
---
# mc.capture~

Store a signal to view as text

## Description

Use the [capture](https://docs.cycling74.com/reference/capture) object to collect signal values for signal debugging or investigation. To record signal values, use the [record~](https://docs.cycling74.com/reference/record~) or [sfrecord~](https://docs.cycling74.com/reference/sfrecord~) object.

## Arguments

### behavioral-flag (f)[symbol] optional

If the first argument is the letter  f , [capture~](https://docs.cycling74.com/reference/capture~) stores the first signal samples it receives, and then ignores subsequent samples once its storage buffer is full. If the letter  f  is not present, [capture~](https://docs.cycling74.com/reference/capture~) stores the most recent signal samples it has received, discarding earlier samples if necessary.

### maximum-samples[int] optional

Limits the number of samples (and thus the length of the excerpt) that can be held by [capture~](https://docs.cycling74.com/reference/capture~). If no number is typed in, [capture~](https://docs.cycling74.com/reference/capture~) stores 4096 samples. The maximum possible number of samples is limited only by the amount of memory available to the Max application. A second number argument may be typed in to set the precision (the number of digits to the right of the decimal point) with which samples will be shown in the editing window. When set to mc mode ([mc.capture~](https://docs.cycling74.com/reference/mc.capture~)), the
maximum-samples
value applies to each channel. Captured values are displayed in sequence by channel number.

### signal-vector-indices (up to 10 ints)[list] optional

A list of up to 10 indices within a signal vector. If no indices present, [capture~](https://docs.cycling74.com/reference/capture~) records the entire vector.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

Erases the contents of [capture~](https://docs.cycling74.com/reference/capture~).

### (mouse)

Double-clicking on [capture~](https://docs.cycling74.com/reference/capture~) opens a window for viewing and editing its contents. The numbers in the editing window can be copied and pasted into a graphic [buffer~](https://docs.cycling74.com/reference/buffer~) editing window.

### open

Causes an editing and viewing window for the [capture~](https://docs.cycling74.com/reference/capture~) object to become visible. The window is also brought to the front.

### signal

An excerpt of the signal is stored as text for viewing, editing, or saving to a file. (The length of the excerpt can be specified as a typed-in argument to the object.)

### wclose

Closes the window associated with the [capture~](https://docs.cycling74.com/reference/capture~) object.

### write

Saves the contents of [capture~](https://docs.cycling74.com/reference/capture~) into a text file. A standard file dialog is opened for naming the file. The word  write , followed by a symbol, saves the file, using the symbol as the filename, in the same folder as the patch containing the [capture~](https://docs.cycling74.com/reference/capture~). If the patch has not yet been saved, the [capture~](https://docs.cycling74.com/reference/capture~) file is saved in the same folder as the Max application.

Arguments:

- filename
  [symbol]

## Output

### (text)

[capture~](https://docs.cycling74.com/reference/capture~) outputs nothing and has no outlet but the signal which it captures into text can be saved to a file or copied and pasted elsewhere for editing.

## See Also

| Name | Description |
| --- | --- |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
