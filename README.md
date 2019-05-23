# lab-03-async

### Author: Ian Smith

## Wiki

Asynchronous programming means that multiple processes can run at a single time, often by utilizing multiple threads in a CPU. This has many advantages over synchronous programming, the main one being faster performance. With synchronous programming, only one process is being executed at a time, so not only are you wasting valuable time when your application is making requests, you're probably wasting the available multiple threads and processing power of the CPU. The main downside to Asynchronicity is that sometimes processes can finish running in an undesirable order, potentially leaving you with undefined variables or an out-of-order output stream. This problem can be fixed by using callback functions and promises, which are built-in functionalities that allow you to better control the execution order of your functions, or explicitly tell a function to not run until the preceeding process is complete.
