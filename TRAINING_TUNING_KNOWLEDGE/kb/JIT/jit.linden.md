---
type: jitter
name: "jit.linden"
summary: "Lindenmayer string expansion (L-systems)"
signal: false
url: "https://docs.cycling74.com/reference/jit.linden/"
package: "Jitter"
see_also: ["jit.conway", "jit.turtle"]
---
# jit.linden

Lindenmayer string expansion (L-systems)

## Description

The [jit.linden](https://docs.cycling74.com/reference/jit.linden) object interprets an incoming 1-dim, 1-plane char matrix as a Lindenmayer System (L-system).

#### Discussion

Named after Aristid Lindenmayer (1925-1989), L-systems work on an interpreted grammar model wherein a syntax is defined for replacing individual elements of the incoming string with a replacement string. These models (called production rules, or just  **productions** ), can be context-dependent. L-systems can also support multiple modes of branching (only one dimension of branching is supported here, though branches can be nested). Generally speaking, L-systems get larger (not smaller) through successive productions (or generations of the grammar); the size of the Jitter matrix used by the object determines the maximum length of the string, so a large matrix is advisable, even if the  **axiom**  (starting string) is very small.

The [jit.linden](https://docs.cycling74.com/reference/jit.linden) object treats the incoming matrix as ASCII, and certain values are reserved to indicate wildcards ( \*  by default) and branching ( [  and  ]  by default). These can be set by the wildcard, leftbranch, and rightbranch attributes.

The arguments to the ignore and production attributes should be lists of ASCII characters, e.g.:

ignore F C A  tells the [jit.linden](https://docs.cycling74.com/reference/jit.linden) object to ignore the ASCII characters  F ,  C , and  A  when checking context during a production match.

typically ignored symbols are characters which describe geo-spatial information (e.g. turtle graphics) and aren't included in the grammar of the production.

production \* F \* +F[F]  tells the object to take every instance of the ASCII character  F  found in the input matrix and replace it with the string  +F[F] . The output string is lengthened as a result, so that the first four generations of an L-system with an axiom of  F  (as a starting point) would look like this:

+F[F]

++F[F][+F[F]]

+++F[F][+F[F]][++F[F][+F[F]]]

More complex models can be created by adding multiple productions, or by introducing context matching into the L-system grammar. For example:

The message  production G F \* +F  instructs the [jit.linden](https://docs.cycling74.com/reference/jit.linden) object to replace values of  F  with  +F  only if the character preceding the  F  is a  G . Otherwise, the  F  is simply echoed to the output string unchanged. If you were to give jit.linden the message:

production G F \* +F \* G \* G-

multiple productions are defined.  F  is replaced as in the example above, but the character  G  is now replaced by  G-  as well. Up to 50 productions in the format [left\_context] [strict\_predecessor] [right\_context] [successor\_string] can be sent to [jit.linden](https://docs.cycling74.com/reference/jit.linden). The predecessor symbol and the left and right contexts must be single characters (though this is not necessarily true for all L-system interpreters). The successor (or replacement string) can be as long as you like.

Typically, the output of the [jit.linden](https://docs.cycling74.com/reference/jit.linden) object will then be interpreted by an object which scans the string and interprets the symbols as commands. The [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) object interprets L-systems as turtle graphics, so that characters such as  F ,  + , and -  acquire special meaning. You could easily use a [jit.iter](https://docs.cycling74.com/reference/jit.iter) object (or a holding [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object polled by  getcell  messages) to access the Lindenmayer string in Max. You can then use the [select](https://docs.cycling74.com/reference/select) object against certain ASCII values and use those values to generate any kind of graphical or sonic data you like. The example patches in the Jitter distribution called 'Lindenmayer Examples' give examples of generating 2-D graphics with L-systems within Max/Jitter.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### boundmode[int]

The starting cell for production matching (0 or 1) (default = 1)

Possible values:

0 = 'Start at Cell 0'

1 = 'Start at Cell 1'

### ignore[128 symbols]

Characters to ignore during context matching

### leftbranch[int]

The character value to be interpreted as the start of a branch in the Lindenmayer string (default = 91 (ascii '['))

### production[200 symbols]

A list of symbols in the format  left\_context strict\_predecessor right\_context successor\_string ...  that defines the production rules of the L-system (default = none)

### rightbranch[int]

The character value to be interpreted as the start of a branch in the Lindenmayer string (default = 93 (ascii ']'))

### wildcard[int]

The character value to be interpreted as a wildcard in the Lindenmayer string (default = 42 (ascii '\*'))

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.conway](https://docs.cycling74.com/reference/jit.conway) | Play Conway's game of life |
| [jit.turtle](https://docs.cycling74.com/reference/jit.turtle) | 2-d turtle graphics interpreter |
