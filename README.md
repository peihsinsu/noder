Noder - Simple HTTP Server
========

This is a simple web server write by node.js. You can quickly start a web server for outside access through one line. It's easy way for frontend web developer to test prototype page and need not to build a apache or other web server.
<div align="center">
<img src="http://peihsinsu.github.com/images/noder-intro.png" width="80%"/><br/>
Picture: Easy to use of noder!
</div>

#Install
Install using npm...
```bash
# npm install noder -g
```

#Usage
Default, server start at 1337 port...
```bash
# noder
Server running at http://127.0.0.1:1337/
```
## Advance usage:
You can also using the parameters to control the host, port for the service listen. And the allow or deny parameters for the filter of user query.
```bash
noder -h 192.168.1.205 -p 8080 -a png,html -d jpg
```
You can see the help page for the parameters.

## Help page:
Open the help page using "noder --help".
```bash
# noder --help

  Usage: noder [options]

  Options:

    -h, --help                     output usage information
    -V, --version                  output the version number
    -h, --host [ip]                Specific host, like 192.168.1.1, default is all ip listened
    -p, --port <port>              Specific port, like 80,3000,8080, default is 1337
    -a, --allow <allow file type>  Specific the allowed file types that seprate by ",", default is all
    -d, --deny <deny file type>    Specific the denied file types that seprate by ",", default is none
```

#Open Browser
Browser View http://127.0.0.1:1337/test.html (Assump that the test.html exist in the current folder)
```bash
<Buffer 23 21 2f 62 69 6e 2f 62 61 73 68 0a 63 64 20 2f 6f 70 74 0a 23 77 67 65 74 20 68 74 74 70 3a 2f 2f 6e 6f 64 65 6a 73 2e 6f 72 67 2f 64 69 73 74 2f 76 30 ...>
{ [Error: ENOENT, no such file or directory './favicon.ico']
  errno: 34,
  code: 'ENOENT',
  path: './favicon.ico',
  syscall: 'open' }
<Buffer 1f 8b 08 00 ed 18 e5 50 00 03 ec 3d 6b 77 db 36 b2 f9 5a fd 0a 44 67 cf 4a 4a 25 ea 2d 77 ed 3a 8d 9b b8 4d 77 f3 ba b1 fb b8 27 37 c7 a2 48 c8 62 4c 91 ...>
```

