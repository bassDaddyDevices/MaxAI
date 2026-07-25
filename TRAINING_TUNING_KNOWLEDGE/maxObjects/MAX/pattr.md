---
type: max
name: "pattr"
summary: "Provide an alias with a named data wrapper"
signal: false
url: "https://docs.cycling74.com/reference/pattr/"
package: "Max"
see_also: ["autopattr", "pattrforward", "pattrhub", "pattrmarker", "pattrstorage"]
---
# pattr

Provide an alias with a named data wrapper

## Description

Stores its own data, or binds to another object to share its contents with other pattr-based objects (such as [pattrstorage](https://docs.cycling74.com/reference/pattrstorage)). Can be used for data routing or preset creation.

#### Discussion

The [pattr](https://docs.cycling74.com/reference/pattr) object can be thought of as an alias for data. It functions in two modes. By default, the [pattr](https://docs.cycling74.com/reference/pattr) object maintains its own data. This data can be of any normal Max type (int, float, list, symbol). The [pattr](https://docs.cycling74.com/reference/pattr) object can also bind to another object, as long as that object has a patcher name that the [pattr](https://docs.cycling74.com/reference/pattr) object can resolve. In this instance, the [pattr](https://docs.cycling74.com/reference/pattr) object merely  *refers*  to the data inside of another object, and is restricted to the type of data expected by the object. When bound, data sent to the [pattr](https://docs.cycling74.com/reference/pattr) object is forwarded to the referred object (target), and changes made to the target are reflected in the [pattr](https://docs.cycling74.com/reference/pattr) object.

## Arguments

### name[symbol] optional

A symbol argument may be optionally used to set the [pattr](https://docs.cycling74.com/reference/pattr) object's  name . In the absence of an argument (or the explicit setting of the  name  attribute using the  @name  syntax), the [pattr](https://docs.cycling74.com/reference/pattr) object is given an arbitrary, semi-random name, such as u197000004.

## Attributes

### annotation\_name[symbol]:

Info View Title

### autorestore[int]

Enables (1) or disables (0) the autorestore state of the [pattr](https://docs.cycling74.com/reference/pattr) object. The default is 1 (enabled). When enabled, the [pattr](https://docs.cycling74.com/reference/pattr) object will automatically output its last-saved value when the patcher is loaded (and, if bound to another object, send the value to that object. See the  bindto  attribute, below for more information on bound objects).

### bindto[symbol]

The word  bindto , which may be followed by an optional  symbol  argument, sets the [pattr](https://docs.cycling74.com/reference/pattr) object's binding state. The default state is unbound (no arguments). By default, the [pattr](https://docs.cycling74.com/reference/pattr) object maintains its own data. When "bound" using the  bindto  feature, a [pattr](https://docs.cycling74.com/reference/pattr) object maintains the data for the other object and automatically gets and sets values for that object.  bindto  takes an optional  symbol  argument, which specifies the name of the object to which [pattr](https://docs.cycling74.com/reference/pattr) will bind. Binding targets need not be at the same patcher-level as the [pattr](https://docs.cycling74.com/reference/pattr) object. In this case, a double-colon syntax ('::') is used to separate levels of patcher hierarchy for the purposes of describing a path for name resolution (e.g. somepatcher::someobject). If the named object is at a higher patcher-level than the pattr object, the word parent can be used to refer to a patcher at a higher level (e.g. parent::objectaboveme, parent::parent::objectaboveobjectaboveme or  *parent::patchernexttome::someobject* ).

If the named object contains attributes, and the user wishes to bind to a specific attribute, the same double-colon syntax is used to specify the name of that attribute (e.g. someobject::someattribute). A  bindto  message sent without an argument unbinds the [pattr](https://docs.cycling74.com/reference/pattr) object from any bound object, and causes it to resume the maintenance its own internal state. See the pattr helpfile for more information about this feature.

### default\_active[int]

Enables (1) or disables (0) the [pattr](https://docs.cycling74.com/reference/pattr) object's default active state, when it is discovered by a [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object. The default is 1 (active). See the Reference for the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object for more information.

### default\_interp[2 atoms]

The word  default\_interp , followed by a symbol and an optional 2nd argument, defines the [pattr](https://docs.cycling74.com/reference/pattr) object's default interpolation setting, when it is discovered by a [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object. The default is  linear . See the Reference for the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object for more information.

### default\_priority[int]

The word  default\_priority , followed by an  int , defines the [pattr](https://docs.cycling74.com/reference/pattr) object's default priority, when it is discovered by a [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object. The default is  0 . See the Reference for the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object for more information.

### dirty[int]

Enables (1) or disables (0) the patcher-dirty flag. The default is 0 (disabled). When enabled, the [pattr](https://docs.cycling74.com/reference/pattr) object will dirty the patch whenever its state changes.

### initial[256 atoms]:

The [pattr](https://docs.cycling74.com/reference/pattr) object's initial value. If autorestore is set to  1 , this value will be restored upon patch load, rather than the value of the [pattr](https://docs.cycling74.com/reference/pattr) object at the time the patch was last saved. The initial attribute can be used in combination with the  init  message to reset the [pattr](https://docs.cycling74.com/reference/pattr) object to the specified value.

### invisible[int]

The word  invisible , followed by a 1 or 0, determines whether or not the [pattr](https://docs.cycling74.com/reference/pattr) object is invisible to [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) objects. The default is 0 (visible).

### max[atom]:

A maximum value for  int  and  float  values (including values in lists), disabled ( <none> ) by default. When parameter\_enable is on, this value is linked to the upper range value of the parameter.

### min[atom]:

A minimum value for  int  and  float  values (including values in lists), disabled ( <none> ) by default. When parameter\_enable is on, this value is linked to the lower range value of the parameter.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### thru[int]

Adjusts the [pattr](https://docs.cycling74.com/reference/pattr) object's thru behavior. The default is 1 (Output value on change). When enabled for all change, the object will output its value whenever it changes, or in response to a bang. When set to 0 (Suppress output on change (bang only)), the object will only output its value when it receives a  bang  message. When set to 2 (Suppress output when triggered from inlet), the value will be output upon change which wasn't triggered by a message to the [pattr](https://docs.cycling74.com/reference/pattr) object's inlet.

Possible values:

0 = 'Suppress output on change (bang only)'

1 = 'Output value on change'

2 = 'Suppress output when triggered from inlet'

### type[symbol]: atom

The word  type , followed by a symbol corresponding to a valid type, sets the data type maintained internally by the [pattr](https://docs.cycling74.com/reference/pattr) object, when the object is not bound. The default is  atom . Available types include  char ,  long ,  float32 ,  float64 ,  symbol , and  atom .

Possible values:

'atom'

'char'

'long'

'float32'

'float64'

'symbol'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the data maintained by the [pattr](https://docs.cycling74.com/reference/pattr) object from the left outlet.

### int

An  int  is stored inside the [pattr](https://docs.cycling74.com/reference/pattr) object and output from its left outlet. Optionally, the value is passed along to a bound object. (See the  bindto  attribute for more information on bound objects).

Arguments:

- input
  [int]

### float

float  is stored inside the [pattr](https://docs.cycling74.com/reference/pattr) object and output from its left outlet. Optionally, the value is passed along to a bound object. (See the  bindto  attribute for more information on bound objects).

Arguments:

- input
  [float]

### list

list  is stored inside the [pattr](https://docs.cycling74.com/reference/pattr) object and output from its left outlet. Optionally, the value is passed along to a bound object. (See the  bindto  attribute for more information on bound objects).

Arguments:

- input
  [list]

### anything

Any  message  is stored inside the [pattr](https://docs.cycling74.com/reference/pattr) object and output from its left outlet. Optionally, the value is passed along to a bound object. (See the  bindto  attribute for more information on bound objects).

Arguments:

- input
  [list]

### assign

The word  assign , followed by a floating point value, causes that value to be stored and displayed and sent out the [pattr](https://docs.cycling74.com/reference/pattr) object's left outlet. If the object’s Parameter Enabled attribute is set (checked) and the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- input
  [float]

### (mouse)

Double-clicking on a [pattr](https://docs.cycling74.com/reference/pattr) object that is parameter-enabled will open the Parameters Window in Max for Live.

### dictionary

A copy of a  dictionary  is stored inside the [pattr](https://docs.cycling74.com/reference/pattr) object and output from its left outlet. Optionally, the dictionary is passed along to a bound object. (See the  bindto  attribute for more infomation on bound objects).

Arguments:

- input
  [symbol]

### init

If the [pattr](https://docs.cycling74.com/reference/pattr) object's initial attribute has been set, the  init  message will cause the [pattr](https://docs.cycling74.com/reference/pattr) object's value to be set to value of the initial attribute.

## Output

### (internal)

A user interface object (or other object that responds to the internal messaging system utilized by [pattr](https://docs.cycling74.com/reference/pattr)) connected to the middle outlet of the [pattr](https://docs.cycling74.com/reference/pattr) object will be automatically named (if necessary) and bound to. The name is automatically generated from the object's class name (e.g. a connected [number box](https://docs.cycling74.com/reference/number) might be named number[1].) Currently, the following Max user interface objects can be bound in this fashion: [dial](https://docs.cycling74.com/reference/dial), [function](https://docs.cycling74.com/reference/function), [gain~](https://docs.cycling74.com/reference/gain~), [ggate](https://docs.cycling74.com/reference/gswitch2), [gswitch](https://docs.cycling74.com/reference/gswitch), [js](https://docs.cycling74.com/reference/js) (requires user support), [jsui](https://docs.cycling74.com/reference/jsui) (see the JavaScript in Max manual for more information on using the [pattr](https://docs.cycling74.com/reference/pattr) system with JavaScript), [led](https://docs.cycling74.com/reference/led), [matrixctrl](https://docs.cycling74.com/reference/matrixctrl), [multislider](https://docs.cycling74.com/reference/multislider), [nslider](https://docs.cycling74.com/reference/nslider), [number box](https://docs.cycling74.com/reference/number) (int and float), [pattr](https://docs.cycling74.com/reference/pattr), [pattrstorage](https://docs.cycling74.com/reference/pattrstorage), [pictctrl](https://docs.cycling74.com/reference/pictctrl), [pictslider](https://docs.cycling74.com/reference/pictslider), [radiogroup](https://docs.cycling74.com/reference/radiogroup), [rslider](https://docs.cycling74.com/reference/rslider), [slider](https://docs.cycling74.com/reference/slider), [swatch](https://docs.cycling74.com/reference/swatch), [table](https://docs.cycling74.com/reference/table), [textedit](https://docs.cycling74.com/reference/textedit), [toggle](https://docs.cycling74.com/reference/toggle), and [umenu](https://docs.cycling74.com/reference/umenu).

### anything

Out left outlet: When the [pattr](https://docs.cycling74.com/reference/pattr) object receives new data, a  bang , or registers the change of the value of its bound object, this value is output.

Out right outlet:  get  queries to the [pattr](https://docs.cycling74.com/reference/pattr) object's attributes are output from the right outlet, also known as the  dumpout  outlet.

## See Also

| Name | Description |
| --- | --- |
| [autopattr](https://docs.cycling74.com/reference/autopattr) | Expose multiple objects to the pattr system |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pattrhub](https://docs.cycling74.com/reference/pattrhub) | Access all pattr objects in a patcher |
| [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) | Provide pattr communication between patchers |
| [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) | Save and recall pattr presets |
