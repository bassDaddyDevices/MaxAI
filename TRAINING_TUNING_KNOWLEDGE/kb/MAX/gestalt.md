---
type: max
name: "gestalt"
summary: "Retrieve system information"
signal: false
url: "https://docs.cycling74.com/reference/gestalt/"
package: "Max"
see_also: ["screensize"]
---
# gestalt

Retrieve system information

## Arguments

None.

## Attributes

### outputmode[int]: 0

When set to 1, output from the left output is prepended with the chosen selector.

### selector[symbol]:

Default Info Selector

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message causes [gestalt](https://docs.cycling74.com/reference/gestalt) to repeat its previous output.

### anything

Performs the same function as  symbol .

Arguments:

- selector
  [symbol]

### keys

Returns a dictionary containing short key and long-form descriptive names (also functional) for available info.

### symbol

The  symbol  message containing a Gestalt selector will return the appropriate system specific information. Some sample selectors are "sysv" to return the system version and "qtim" to return the quicktime version.

Arguments:

- selector
  [symbol]

## Output

### int

Out left outlet If there was no error in obtaining the response to a selector to the object, the response is sent out the left outlet. Binary or hex display and/or the use of the bitwise and operator [&](https://docs.cycling74.com/reference/bitand) may aid in interpreting the response.

Out right outlet: If there was an error in obtaining the response to a selector, an error code is sent out the right outlet. Refer to Apple developer documentation for a complete list of error codes. If the input selector was undefined, -1  is sent out. If there was no error,  0  is sent out.

## See Also

| Name | Description |
| --- | --- |
| [screensize](https://docs.cycling74.com/reference/screensize) | Output the monitor size |
