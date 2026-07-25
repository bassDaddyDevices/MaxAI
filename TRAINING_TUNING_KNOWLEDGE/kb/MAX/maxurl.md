---
type: max
name: "maxurl"
summary: "Make HTTP requests"
signal: false
url: "https://docs.cycling74.com/reference/maxurl/"
package: "Max"
see_also: ["jit.net.recv", "jit.net.send", "jit.uldl", "jweb", "udpreceive", "udpsend"]
---
# maxurl

Make HTTP requests

## Description

maxurl is a wrapper around libcurl that can perform HTTP requests. Use it to fetch and post web content. For more information on curl please refer to the
[Curl Docs Page.](http://curl.haxx.se/docs/)
To learn about and practice HTTP Requests, check out
[httpbin.org.](http://httpbin.org/)

## Arguments

### thread count[int] optional

If you would like maxurl to perform HTTP requests in sequence, then set the thread count to 1. If you would like to make multiple requests simultaneously, set the thread count to something greater than one. maxurl will then be able to execute that many requests concurrently. If you start maxurl with 3 threads and tell it to make 5 requests, 3 requests will be started immediately and 2 will be queued to start whenever any of the initial 3 requests finish.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### abort

An abort message without any arguments will abort all running requests that this maxurl is performing. Optionally, a list of response dictionary names may be given to abort only those requests. To do the later, you will want to make your request with a specified response dictionary name. See the "response\_dict" field of the dictionary message below.

Arguments:

- response dictionary name
  [list]

### abortall

Aborts all running requests and queued requests.

### delete

Sends an HTTP DELETE request to the specified URL.

Arguments:

- url
  [list]

### dictionary

Dictionary input to perform a more advanced HTTP request.

| key name | value |
| --- | --- |
| response\_dict | (string) sets the response dictionary name |
| url | (string) sets the url to which maxurl should make a request. (e.g. "http://cycling74.com" ) |
| http\_method | (string) one of four options: "get", "post", "put", or "delete" |
| post\_data | (string) a url encoded string containing your post variables (e.g. "key1=val1&key2=val2")  (dictionary) If post\_data is another dictionary, maxurl will encode the dictionary as json data in the post body. |
| filename\_out | (string) full path name of your output file. If this is set, the "body" key of the response dictionary will be empty. |
| filename\_in | (string) full path name of your input filen. If this is set, and http\_method is "put" or "post", maxurl will read this file as the body of your http request. Use this or the 'multiput\_form' field to upload files to a server. |
| useragent | (string) the user agent name for your request. Use this to spoof other browsers. By default maxurl declares itself as Firefox on windows. |
| timeout | (number) set the timeout length in seconds. NOTE! This will terminate a running connection if it takes longer than the set timeout length. |
| connect\_timeout | (number) set the timeout length in seconds for making a connection to a remote host. |
| parse\_type | (string) one of either "none", "json" or "xml". Default is "none". If set to "json" or "xml", maxurl will respectively try to parse the response data into a dict from json or xml data. |
| headers | (array of strings) set the request headers directly (e.g ["Content-Type=text/plain; charset=UTF-8", "Server=httpbin"]). |
| cookie | (string) cookies are accepted and shared among requests in a maxurl object. However, you may set the request cookie directly here with something like 'name1=value1;name2=value2;' |
| http\_auth | (string) set the http authentication to be sent with "username:password". By default, maxurl will attempt all authentication methods (basic, digest, gss negotiate, ntlm) |
| multipart\_form | (array of dictionaries or dictionary or dictionaries) individual parts should have 2-3 keys, "name", "file", "content", or "contenttype". eg:  ```  [ {"name":"file-0", "file": "/full/path/to/filename.jpg"}, {"name": "file-1", "file": "/full/path/to/filename2.jpg"}, {"name": "filecount", "content": "2" } ] OR: { "part1" : {"name":"myfirstfile", "file": "/full/path/to/filename.jpg"}, "part2" : {"name": "anotherfile", "file": "/full/path/to/filename2.jpg"}, "part3" : {"name": "filecount", "content": "2" } } ``` |
| overwrite\_response\_dict | (long) Either 0 or 1. If set to 1 (default) maxurl will allow you to make multiple requests that return data in the same response dictionary. If set to 0, maxurl will not allow you to queue your request if there already exists a running or queued request with the same response dictionary. |
| overwrite\_output\_file | (long) Either 0 or 1. By default this is set to 0 and maxurl will not overwite output files. If set to 1, you can force maxurl to overwrite an output file. If there is a running request that is writing data to that filename, it will be aborted. |
| proxy | (string) Set a proxy server. |
| proxy\_type | (string) Either http (default), socks4, socks4a, or socks5 |
| proxy\_auth | (string) If your proxy requires a password set this to "username:password" |

Arguments:

- name
  [symbol]

### get

Sends an HTTP GET request to the specified URL.

Arguments:

- url
  [list]

### post

Sends an HTTP POST request to the specified URL. Any pairs of symbols following the url will be sent as key-value pairs in the url encoded form.

Arguments:

- url
  [list]

### put

Sends an HTTP PUT request to the specified URL. Any pairs of symbols following the url will be sent as key-value pairs in the url encoded form.

Arguments:

- url
  [list]

### verbosity >= 7.0.0

Determines the extent to which the maxurl object posts information about its processes to the Max console. Verbosity ranges from 0 - 6, with 0 disabling all console reporting, 1 being the default and most basic level of verbosity, and 6 being the most verbose.

Arguments:

- [int]

## See Also

| Name | Description |
| --- | --- |
| [jit.net.recv](https://docs.cycling74.com/reference/jit.net.recv) | Receive matrices from a jit.net.send object via TCP/IP |
| [jit.net.send](https://docs.cycling74.com/reference/jit.net.send) | Send matrices to a jit.net.recv object via TCP/IP |
| [jit.uldl](https://docs.cycling74.com/reference/jit.uldl) | Internet upload/download |
| [jweb](https://docs.cycling74.com/reference/jweb) | Web browser |
| [udpreceive](https://docs.cycling74.com/reference/udpreceive) | Receive messages over a network |
| [udpsend](https://docs.cycling74.com/reference/udpsend) | Send messages over a network |
