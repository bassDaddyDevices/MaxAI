---
type: max
name: "array.regexp"
summary: "Use regular expressions to process input"
signal: false
url: "https://docs.cycling74.com/reference/array.regexp/"
package: "Max"
see_also: ["fromsymbol", "key", "keyup", "message", "regexp", "spell", "tosymbol", "array", "string.regexp"]
---
# array.regexp

Use regular expressions to process input

## Description

With [array.regexp](https://docs.cycling74.com/reference/array.regexp), it's possible to use PERL-compatible regular expressions (PCRE) to match or make substitutions within arrays.

#### Discussion

The first argument is a symbol that sets the regular expression (RE), as does the re attribute in the left inlet. Subsequent arguments (or the substitute attribute) are treated as array values to be used in substitutions. Any other input in the left inlet is converted to an array object and treated as the subject "string".

The subject array is processed according to the re and substitute values. The middle outlet reports an array of the instances where the RE matched portions of the subject array. If the RE contains parentheses, they are treated as capture groups, and the center-left outlet puts them into a array upon every match within the subject array. If a 'substitute' array has been set, the leftmost output returns the subject array with necessary substitutions.

Note that, unlike other objects supporting regular expression in Max, which expect UTF-8 data, [array.regexp](https://docs.cycling74.com/reference/array.regexp) will work with any byte buffer, including binary bufferrs containing 0s. Any incoming list or array is converted to a byte array (with 8-bit values from 0-255). If you intend to work with strings, you'll need to convert them to a list of bytes using [atoi](https://docs.cycling74.com/reference/atoi) or similar before using [array.regexp](https://docs.cycling74.com/reference/array.regexp).

## Arguments

### expression[symbol] optional

A regular expression may be used as an argument to set the regular expression (see above for regular expression formatting and metacharacter information).

### substitution[array] optional

An optional second argument will set the substitution array. As in other regexp objects, substitution arrays may contain capture groups; here they can be in the classic form  %n  (e.g.  %1  for the first capture group), or encoded as bytes ( %  =  37 ,  1  =  49 ).

## Attributes

### re[symbol]

[The PCRE reference](https://pcre.org/original/doc/html/pcrepattern.html)
is the best place to learn more about how regular expressions in Max are built, but here is a quick summary of the basics:

The word  re , followed by a PERL-compatible regular expression, sets the regular expression rules to be used when parsing or making substitutions within any symbol or list input.

If a regular expression contains spaces, it must be enclosed within double quotes when specified using the  re  message or as a typed-in argument to the [array.regexp](https://docs.cycling74.com/reference/array.regexp) object.

Regular expressions use the following form and syntax:

 [...]  defines a 'class' of characters. any of the characters within it may be matched. several special symbols may also appear within it:

...-...  specifies a range (within ASCII codes)

 \\d  specifies a decimal digit ( \\D  specifies a non-decimal digit). Note that double backslashes must be used -- Max erases single backslashes.

 \\s  specifies white space ( \\S  specifies non-white space). Note that double backslashes must be used -- Max erases single backslashes.

 \\w  specifies an alphanumeric ( \\W  specifies a nonalphanumeric). Note that double backslashes must be used -- Max erases single backslashes.

 ^...  specifies a complement of

...\*  appears zero times

...+  appears at least once

...?  appears once or not at all

 (...)  specifies a capture group that may be referred to in a substitution array such as  %n , where  n  is the position of the parenthesis in left-to-right order.

### substitute[atom]

The word  substitute , followed by a list of integer values between 0 and 255, specifies an array to be used in substitutions. If the word  substitute  is not followed by any values, the previous substitution symbol is removed. The word  <none>  can also specify that no substitution should occur. The word  emptyarray  indicates that substitution should occur, but that the matched values should be deleted from the final output array.

Note: If you need to output a  %  followed by a number in any substitution array, you should use  %%  (encoded:  37 37 ) , so that the  %  is not interpreted as a capture group.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to an array, then process as described for the  array  message.

In the middle inlet, a symbol/list can be provided as a new re. In the right inlet, a symbol/list can be provided as a substitute.

Arguments:

- list-value
  [list]

### array

In the left inlet, an array will be processed as the subject array by the PCRE engine, using any re and substitute provided.

### dictionary

TEXT\_HERE

### string

TEXT\_HERE

## Output

### symbol or list

Out left outlet: If a substitution array has been set using the  substitute  message, the input list or symbol is sent out the left outlet with any required substitutions).

Out center-left outlet: If the regular expression contains parentheses, they are treated as capture groups. The center-left outlet reports the capture groups upon every match within the subject array, and outputs them as a nested array; one array per subarrays match, each containing any captured arrays.

Out center outlet: The center outlet reports an array of subarrays where the regular expression matched portions of the subject array.

Out center-right outlet: The center-right outlet passes the original input, in the case that no match occurs.

Out right outlet: The rightmost outlet is used to report the offsets (start, end) of any subarray matches; that is, the offsets which can be used by [array.slice](https://docs.cycling74.com/reference/array.slice) to derive the subarray(s) from the input array. The offsets are provided as a nested array; one array with start and end offsets for each subarray match.

## See Also

| Name | Description |
| --- | --- |
| [fromsymbol](https://docs.cycling74.com/reference/fromsymbol) | Convert a symbol into numbers/messages |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [string.regexp](https://docs.cycling74.com/reference/string.regexp) | Use regular expressions to process input |
