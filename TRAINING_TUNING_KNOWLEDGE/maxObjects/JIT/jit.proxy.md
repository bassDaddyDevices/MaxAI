---
type: jitter
name: "jit.proxy"
summary: "Proxy a Jitter object."
signal: false
url: "https://docs.cycling74.com/reference/jit.proxy/"
package: "Jitter"
---
# jit.proxy

Proxy a Jitter object.

## Description

[jit.proxy](https://docs.cycling74.com/reference/jit.proxy) proxies named Jitter objects. When an object is proxied, [jit.proxy](https://docs.cycling74.com/reference/jit.proxy) will forward any messages it receives to that object and output messages that return values such as the attribute 'get' messages.

## Arguments

None.

## Attributes

### class[symbol]

The class attribute is not settable. However, you can retrieve the class name of the proxied object be sending the  getclass  message to the left inlet of [jit.proxy](https://docs.cycling74.com/reference/jit.proxy). The class name will then be sent out the right outlet of [jit.proxy](https://docs.cycling74.com/reference/jit.proxy).

### name[symbol]

The name of the object to be proxied.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends bang on to the proxied object

### int

Sends int on to the proxied object

### float

Sends float on to the proxied object

### list

Sends a list on to the proxied object

### anything

Sends any message on to the proxied object. Attribute 'get' messages (e.g. getcolor, etc.) will return values out the left-most outlet.

### send

When using [jit.proxy](https://docs.cycling74.com/reference/jit.proxy) from javascript the  send  message allows for sending any message or attribute to the proxied object, and retrieving the returned value.
