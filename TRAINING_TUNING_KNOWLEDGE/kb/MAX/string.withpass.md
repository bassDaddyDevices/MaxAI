---
type: max
name: "string.withpass"
summary: "Route a string by a matching substring"
signal: false
url: "https://docs.cycling74.com/reference/string.withpass/"
package: "Max"
see_also: ["string", "array.routepass", "routepass", "select"]
---
# string.withpass

Route a string by a matching substring

## Description

Route a string to one of several outputs based on a substring match. Similar to [routepass](https://docs.cycling74.com/reference/routepass) but for strings. This object was renamed from [string.passcmp](https://docs.cycling74.com/reference/string.passcmp) (which is now an alias to this object), the functionality remains the same.

## Arguments

### match substrings[list] optional

Determines the number of outlets. The last outlet will always be for unmatched strings. Substrings are routed in order, so the first substring to match (from left to right) will capture the string for output, even if later substrings would also have matched. Use match to determine  *where*  in the incoming string the provided substrings should match (prefix, suffix, anywhere, etc.).

## Attributes

### match[int]

By default [string.withpass](https://docs.cycling74.com/reference/string.withpass) will attempt to match starting at the beginning of the input string. However, some options are available.

Possible values:

0 = 'Start'
(
Match the beginning
)
1 = 'End'
(
Match the end
)
2 = 'Contains (Anywhere)'
(
Match anywhere in the string
)
3 = 'Contains (Exclusive Start)'
(
Match anywhere, but not the first character
)
4 = 'Contains (Exclusive End)'
(
Match anywhere, but not the last character
)
5 = 'Contains (Exclusive Start and End)'
(
Match anywhere, but neither the first nor the last character
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received values and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to a string, then process as described for the  string  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to a string, then process as described for the  string  message.

Arguments:

- list-value
  [list]

### string

Match the string with each of the substrings supplied as arguments to the object. If a substring matches, output the string from the connected outlet. If no substrings match, output the string from the last (overflow) outlet. Substrings are routed in order, so the first substring to match (from left to right) will capture the string for output, even if later substrings would also have matched. Use match to determine  *where*  in the incoming string the provided substrings should match (prefix, suffix, anywhere, etc.).

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [array.routepass](https://docs.cycling74.com/reference/array.routepass) | Route a complete input array object based on input matching |
| [routepass](https://docs.cycling74.com/reference/routepass) | Route a complete incoming message based on input matching |
| [select](https://docs.cycling74.com/reference/select) | Output bangs based on input matching |
