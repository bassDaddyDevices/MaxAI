---
type: ableton
name: "live.colors"
summary: "Get the colors of the active Ableton Live Theme via a Max for Live device."
signal: false
url: "https://docs.cycling74.com/reference/live.colors/"
package: "Max for Live"
see_also: ["Dynamic Colors", "panel", "colorpicker", "suckah"]
---
# live.colors

Get the colors of the active Ableton Live Theme via a Max for Live device.

## Description

Get the [dynamic colors](https://docs.cycling74.com/userguide/dynamic_colors) from the active Ableton Live application color theme and use these color names to ensure compatibility between various Max objects and Ableton Live themes. These colors adapt dynamically to the active Live theme, eliminating the need to change RGBA values, since each color name is a token that references specific colors across Live themes.

In Max 8.2 or later, you can change a Max object's color by setting dynamic colors using the color picker in the Max object's inspector window, instead of using live.colors.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Sends the color for  Color Name  from the [live.colors](https://docs.cycling74.com/reference/live.colors) object's left outlet in RGBA format (float numbers from 0. to 1.).

Arguments:

- Color Name
  [symbol]

### everything

Sends all the available colors out the outlet as a series of messages. Each message consists of the color id followed by four floating-point values that describe the color scheme color in RGBA format (float numbers from 0. to 1.).

## Output

### bang

Out right outlet: A bang message is sent out the right outlet if the Live colors are changed.

### color

Out left outlet: The [live.colors](https://docs.cycling74.com/reference/live.colors) object sends a message composed of a color name followed by four floating point values that specify the RBGA value of the color out the left outlet in response to a query.

## See Also

| Name | Description |
| --- | --- |
| [Dynamic Colors](https://docs.cycling74.com/userguide/dynamic_colors) | Dynamic Colors |
| [panel](https://docs.cycling74.com/reference/panel) | Colored background area |
| [colorpicker](https://docs.cycling74.com/reference/colorpicker) | Select and output a color |
| [suckah](https://docs.cycling74.com/reference/suckah) | Get a pixel from the display |
