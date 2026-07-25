---
type: max
name: "regexp"
summary: "Use regular expressions to process input"
signal: false
url: "https://docs.cycling74.com/reference/regexp/"
package: "Max"
see_also: ["fromsymbol", "key", "keyup", "message", "spell", "tosymbol", "array.regexp", "string.regexp"]
---
# regexp

Use regular expressions to process input

## Description

With [regexp](https://docs.cycling74.com/reference/regexp), it's possible to use PERL-compatible regular expressions (PCRE) to match or make substitutions within symbols and lists.

#### Discussion

The argument is a symbol that sets the regular expression (RE), as does the re attribute in the left inlet. The substitute attribute passes a symbol to be used in substitutions - if no symbol is present, it removes the previous one. Any other symbol or list in the left inlet is treated as the subject string, and is processed according to those parameters.

The subject array is processed according to the re and substitute values. The middle outlet reports an array of the instances where the RE matched portions of the subject array. If the RE contains parentheses, they are treated as capture groups, and the center-left outlet puts them into a array upon every match within the subject array. If a 'substitute' array has been set, the leftmost output returns the subject array with necessary substitutions.

The middle outlet reports a list of the instances where the RE matched portions of the subject string. If the RE contains parentheses, they are treated as capture groups, and the center-left outlet puts them into a list upon every match within the subject string. If a 'substitute' string has been set, the leftmost output returns the subject string with necessary substitutions. (n.b. substitute strings may contain capture groups, of the form %n)

To retain double quotes on output, they must be escaped by preceeding with a backslash character (\) on input. Un-escaped quotes will never be matched. Within an expression, double quotes must also be escaped to be matched.

## Arguments

### expression[symbol] optional

A regular expression may be used as an argument to set the regular expression (see above for regular expression formatting and metacharacter information).

### substitution[symbol] optional

An optional second argument will set the substitution string.

## Attributes

### binary[int]

When binary mode is disabled (default), the [regexp](https://docs.cycling74.com/reference/regexp) object treats subject and substitution strings as UTF-8 text.

When enabled ( 1 ), the [regexp](https://docs.cycling74.com/reference/regexp) object will process lists of values as individual bytes (range 0 -255), rather than as text. This applies to both the subject and the substitution "strings". Any value which is not a value between 0 and 255 will be converted to 0, with the exception of  %n  capture group references in substitution strings. binary mode changes the object's output from the default behavior, as follows:

- substring output begins with  substring N , where  N  is the count of substrings found in the subject. Following that, N messages containing the matched values will be output, followed by  substring done .
- capture group output begins with  capture N , where  N  is the count of capture group sets in the subject (this should match the substring count). Following that, the message  capture group X  will begin a set of captures, where  X  is 0-based index of the current set. Then, for each capture in the set, a message will be output. Each set will be concluded with  capture group X done , and the entire output with  capture done .

For complex binary/bytewise matching work, the [array.regexp](https://docs.cycling74.com/reference/array.regexp) object is probably a better choice (it is always in binary mode, and array objects are a better fit for binary output), but for users more comfortable working with Max lists, binary mode adds a method of working with bytestreams in the [regexp](https://docs.cycling74.com/reference/regexp) object.

### legacyoutputorder[int] >= 9.1.0

Previous to Max 9.1.0, the substrings (center) and capture groups (left-center) outlets erroneously sent output from left to right. This was corrected in Max 9.1.0, but the old behavior remains available, and enabled, for legacy patchers. For new objects, the corrected output order is used.

### re[symbol]

[The PCRE reference](https://pcre.org/original/doc/html/pcrepattern.html)
is the best place to learn more about how regular expressions in Max are built, but here is a quick summary of the basics:

The word  re , followed by a PERL-compatible regular expression, sets the regular expression rules to be used when parsing or making substitutions within any symbol or list input.

If a regular expression contains spaces, it must be enclosed within double quotes when specified using the  re  message or as a typed-in argument to the regexp object.

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

### tosymbol[int]

The word  tosymbol , followed by  0 ,  1  or  2 , modified the output behavior of the [regexp](https://docs.cycling74.com/reference/regexp) object.

When set to  1 , output from the left outlet of the object will be a single symbol. When set to  2 , the substring and capture group output will also be converted to symbols. See below:

Possible values:

0 = 'Off'
(
Convert all output to Max atoms
)
When disabled ( 0 , output from the left outlet of the object will consist of a list of individual elements, interpreted as Max atoms (numbers or symbols, depending on the input [note that a number with a leading zero, such as  01 , will be converted to the number  1  in this case]).

1 = 'Substitution Output'
(
Convert substituted output to a symbol
)
When set to  1 , output from the left outlet of the object will be a single symbol.

2 = 'Everything'
(
Convert all output to symbols
)
When set to  2 , output from the left outlet of the object will be a single symbol, and all substring or capture group output will also be a symbol or list of symbols. In the example above,  01  would be retained as the symbol "01" (and  1  would be the symbol "1").

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Any  int  received in the [regexp](https://docs.cycling74.com/reference/regexp) object's inlet is treated as the subject string to be processed according to the regular expression and symbol substitutions provided.

Arguments:

- subject-string
  [int]

### float

Any  float  received in the [regexp](https://docs.cycling74.com/reference/regexp) object's inlet is treated as the subject string to be processed according to the regular expression and symbol substitutions provided.

Arguments:

- subject-string
  [float]

### list

Any symbol or list received in the regexp object's inlet (not matching the object's attributes) is treated as the subject string to be processed according to the regular expression and symbol substitutions provided.

Arguments:

- subject-string
  [list]

### anything

Performs the same function as a  list  message.

Arguments:

- subject-string
  [list]

## Output

### symbol or list

Out left outlet: If a substitute string has been set using the  substitute  message, the input list or symbol is sent out the left outlet with any required substitutions (n.b. substitute strings may contain capture groups, of the form  %n ).

Out center-left outlet: If the regular expressions contains parentheses, they are treated as capture groups. The center-left outlet reports the capture groups upon every match within the subject string, and outputs them in the form of a list.

Out center outlet: The center outlet reports a list of the instances where the regular expression matched portions of the subject string.

Out center-right outlet: The center-right outlet passes the original input, in the case that no match occurs.

Out right outlet: The rightmost outlet is used to report the values of the object's attributes.

## See Also

| Name | Description |
| --- | --- |
| [fromsymbol](https://docs.cycling74.com/reference/fromsymbol) | Convert a symbol into numbers/messages |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
| [array.regexp](https://docs.cycling74.com/reference/array.regexp) | Use regular expressions to process input |
| [string.regexp](https://docs.cycling74.com/reference/string.regexp) | Use regular expressions to process input |
