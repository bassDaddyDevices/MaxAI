---
type: max
name: "string.regexp"
summary: "Use regular expressions to process input"
signal: false
url: "https://docs.cycling74.com/reference/string.regexp/"
package: "Max"
see_also: ["fromsymbol", "key", "keyup", "message", "spell", "tosymbol"]
---
# string.regexp

Use regular expressions to process input

## Arguments

### expression[symbol] optional

A regular expression may be used as an argument to set the regular expression (see above for regular expression formatting and metacharacter information).

### substitution[symbol/list] optional

An optional second argument will set the substitution string.

## Attributes

### re[symbol]

The word  re , followed by a PERL-compatible regular expression, sets the regular expression rules to be used when parsing or making substitutions within any symbol or list input.

If a regular expression contains spaces, it must be enclosed within double quotes when specified using the  re  message or as a typed-in argument to the [string.regexp](https://docs.cycling74.com/reference/string.regexp) object.

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

 (...)  specifies a capture group that may be referred to in a substitution string such as  %n , where  n  is the position of the parenthesis in left-to-right order.

### substitute[symbol]

The word  substitute , followed by a symbol, passes a symbol to be used in substitutions. If the word  substitute  is not followed by a symbol, the previous substitution symbol is removed.

Note: If you need to output a  %  followed by a number in any substitution string, you should use  %% , so that the  %  is not read as a capture group.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

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

In the middle inlet, a symbol/list can be provided as a new re. In the right inlet, a symbol/list can be provided as a substitute.

Arguments:

- list-value
  [list]

### string

In the left inlet, a string will be processed as the subject string by the PCRE engine, using any re and substitute provided.

## Output

### symbol or list

Out left outlet: If a substitute string has been set using the  substitute  message, the input list or symbol is sent out the left outlet with any required substitutions (n.b. substitute strings may contain capture groups, of the form  %n ).

Out center-left outlet: If the regular expressions contains parentheses, they are treated as capture groups. The center-left outlet reports the capture groups upon every match within the subject string, and outputs them as a nested array; one array per substring match, each containing any captured strings.

Out center outlet: The center outlet reports an array of substrings where the regular expression matched portions of the subject string.

Out center-right outlet: The center-right outlet passes the original input, in the case that no match occurs.

Out right outlet: The rightmost outlet is used to report the offsets (start, end) of any substring matches; that is, the offsets which can be used by [string.slice](https://docs.cycling74.com/reference/string.slice) to derive the substring(s) from the input string. The offsets are provided as a nested array; one array with start and end offsets for each substring match.

## See Also

| Name | Description |
| --- | --- |
| [fromsymbol](https://docs.cycling74.com/reference/fromsymbol) | Convert a symbol into numbers/messages |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
