---
type: max
name: "mxj"
summary: "Execute Java in Max"
signal: false
url: "https://docs.cycling74.com/reference/mxj/"
package: "max-mxj"
see_also: ["js"]
---
# mxj

Execute Java in Max

## Description

Execute Java classes as Max objects. The Java classes must be specially written for Max, but work identically within the JVM (Java Virtual Machine) on both Windows and Macintosh.

#### Discussion

The [mxj](https://docs.cycling74.com/reference/mxj) object and its MSP equivalent [mxj~](https://docs.cycling74.com/reference/mxj~) instantiate specially-written Java classes and act as a Max-level peer object, passing data that originates in Max to the Java object and vice versa. The form that the [mxj](https://docs.cycling74.com/reference/mxj) / [mxj~](https://docs.cycling74.com/reference/mxj~) object takes (the number of inlets, outlets and the messages it understands), is determined by the Java class that it instantiates. Using [mxj](https://docs.cycling74.com/reference/mxj) requires that the host computer have a recent version of the Java Virtual Machine (JVM) installed. Macintosh users can ensure that they have the most up-to-date version of the JVM by running Software Update from the System Preferences.

By default, neither Mac M1 machines nor Windows XP have a version of the JVM installed. As of the writing of this document the most recent version of the JVM can be downloaded from this
[link.](https://www.azul.com/downloads/?os=macos&architecture=arm-64-bit&package=jdk)
Using the [mxj](https://docs.cycling74.com/reference/mxj) object requires that the host computer have a current version of the Java Virtual Machine (JVM) installed.

Max includes a directory called "java-doc", which can be found in the Max application folder.

The following important subdirectories are in the java-doc directory:

 classes  contains the source code and class files of the example Java classes that are included with Max.

 help  contains the help files that are associated with the example Java classes. Exploring these patches is a good, quick way to see how [mxj](https://docs.cycling74.com/reference/mxj) has extended and will extend the Max universe.

 doc/tutorial  contains a step-by-step tutorial that leads you through the process of creating your first Java class to the application of advanced [mxj](https://docs.cycling74.com/reference/mxj) programming techniques. The tutorial is in HTML format.

 doc/api  contains html files that specify the [mxj](https://docs.cycling74.com/reference/mxj) object's Application Programming Interface (API). These pages will serve as an invaluable resource when you are coding your own Java classes.

 doc/ide  contains example projects for some of the Integrated Development Environments (IDEs) we think you may want to use to create Java classes.

 lib  contains the code libraries that the [mxj](https://docs.cycling74.com/reference/mxj) object uses to bridge the worlds of Max and Java.

In addition, a file named max.java.config.txt. also is located in the java directory This file allows you to specify which directories should be in Java's classpath -- a concept roughly analogous to the Max search path.

## Arguments

### Java-class[symbol] optional

The [mxj](https://docs.cycling74.com/reference/mxj) object must be given the name of a valid Java class as the first argument. The Java class file must exist somewhere within the classpath, and it must be a class that was designed for use with the [mxj](https://docs.cycling74.com/reference/mxj) object (the class must subclass com.cycling74.max.MaxObject.).

The number of inlets that an instance of [mxj](https://docs.cycling74.com/reference/mxj) creates and the messages that it will respond to are determined by declarations made in the peer Java class.

### attributes[list] optional

The [mxj](https://docs.cycling74.com/reference/mxj) object supports the definition of attributes within the Java code for a peer class. The attributes that are settable at the time of instantiation using the @ paradigm. For instance, if a particular class Foo defined an integer attribute called intBar, one could create an instance of the class with the attribute set to the value 74 by typing  mxj Foo @intBar 74  in an object box.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

User-defined according to the Java class instantiated.

### int

User-defined according to the Java class instantiated.

Arguments:

- input
  [int]

### float

User-defined according to the Java class instantiated.

Arguments:

- input
  [float]

### list

User-defined according to the Java class instantiated.

Arguments:

- input
  [list]

### anything

User-defined according to the Java class instantiated.

Arguments:

- input
  [list]

### (mouse)

Double-clicking with the mouse on the [mxj](https://docs.cycling74.com/reference/mxj) object displays its contents as text in an editing window which the user can modify.

### get

The word  get  followed by an attribute-name will post the attribute value in the Max window.

Arguments:

- attribute
  [list]

### viewsource

The  viewsource  message brings up a text editor window and loads the source code for the peer Java object. If the source code is not in the same directory as the peer class's .java file, a decompilation of the class file is attempted and the resulting decompiled source is presented. From within the editor window it's possible to make edits to the source, save the file, and recompile the class.

### zap

When a  zap  message is sent to an [mxj](https://docs.cycling74.com/reference/mxj) object with Java peer class Foo, the next [mxj](https://docs.cycling74.com/reference/mxj) object that's instantiated with the same peer Java class Foo (ie typing "mxj Foo" in an object box) will cause the class to reload itself from disk. This is most useful in a programming context: if one makes a change to Foo.java and recompiles a new Foo.class the  zap  message allows one to create an instance of the new class without having to quit and restart the Max environment. Without sending the  zap  message Max would simply use the cached definition of the class that was loaded when a Foo object was instantiated prior to the changes being made.

## Output

### various

The number of outlets that an instance of [mxj](https://docs.cycling74.com/reference/mxj) creates is determined by declarations made in the constructor of the peer Java class. The furthest outlet to the right may or may not be an info outlet whose sole responsibility is to report information about the attributes when queried.

## See Also

| Name | Description |
| --- | --- |
| [js](https://docs.cycling74.com/reference/js) | Execute Javascript (Legacy Engine) |
