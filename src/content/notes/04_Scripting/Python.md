---
title: Python
description: I hate snakes
category: Scripting
pubDate: 2025-07-20
heroImage: ../../../assets/Python.jpg
---
## Intro
Python is, as you know, popular programming language. It is used for:
- Web Development (server-side)
- Software Development
- Mathematics
- System Scripting

Also:
- Python can be used on a server to create web applications.
- Python can be used alongside software to create workflows.
- Python can connect to database systems. It can also read and modify files.
- Python can be used to handle big data and perform complex mathematics.
- Python can be used for rapid prototyping, or for production-ready software development.
### Why Python?
Primary reason why i started python is, one of my friends told  me there is a vacancy for Python&Django internship. So i didn't want to waste opportunity.

---
## Syntax
1) Python uses indentation to indicate a block of code
	- The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.
	- You have to use the same number of spaces in the same block of code, otherwise Python will give you an error.
2) Python has commenting capability for the  purpose of in-code documentation.
	- Comments start with a `#`, and Python will  render the rest of the line as a comment.
	- Comments can be used to explain Python code.
	- Comments can be used to make the code more readable.
	- Comments can be used to prevent execution when testing code.
3) Python does not really have a syntax for multiline comments
	- Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string `""" """`.

---
## Variables
Variables are containers for storing data values.
- A Variable is created the moment you first assign a value to it.
- Variables don't need to be declared with particular _type_, and can change type after they have been set.
- Strings can be declared either with  single or double quotes.

### **Variable Names**
- Must start with a letter or  the underscore character
- Can not start with a number
- Can only contain alpha-numeric characters and underscores
- Case-Sensitive
- Ca not be any of the Python Keywords

### **Multi Values**
Python allows you to assign values to multiple variables in one line:
```python
x, y, z = "Orange", 27, "Brainrot"
print(x)
print(y)
print(z)
```
> Make sure number of values matches number of variables

or one value to multiple variables:
```python
x = y = z = "HEHEHE"
print(X)
print(y)
print(z)
```

If you have a colllection of values in a list,  tuple etc. Python allows you  to extract the values into variables. This is called _unpacking_:
```python
fruits = ["apple", "banana", "cherry"]  
x, y, z = fruits  
print(x)  
print(y)  
print(z)
```

### Output Variables
`print()` function is often used to output variables.

You output multiple variables,,  separated by a comma:
```python
x = "Python"  
y = "is"  
z = "awesome"
print(x, y, z)
```

You can also use the `+` operator to output multiple variables:
```python
x = "Python "  
y = "is "  
z = "awesome"  
print(x + y + z)
```
> Notice the space character after **"Python "** and **"is "**, without them the result would be **"Pythonisawesome"**.

For numbers, the `+` character works as a mathematical operator:
```python
x = 5  
y = 10  
print(x + y)
```
> You can't combine **string** and **number**. Use **comma** instead.

### Global Variables
Variables that are created outside of a function are known as _Global Variables_.
They can be used everywhere in code.

If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.
```python
x = "awesome"  
  
def myfunc():  
  x = "fantastic"  
  print("Python is " + x)  
  
myfunc()  
  
print("Python is " + x)
```

To create a global variable inside a function, you can use the `global` keyword.
```python
def myfunc():  
  global x  
  x = "fantastic"  

myfunc()  
  
print("Python is " + x)
```
> It can also be used to change value of Global variable inside a function.

---
## Data Types

In programming, data type is an important concept.
Variables can store data of different types, and different types can do different things.

Python has the following data types built-in by default, in these categories:

|                 |                                    |
| --------------- | ---------------------------------- |
| Text Type:      | `str`                              |
| Numeric Types:  | `int`, `float`, `complex`          |
| Sequence Types: | `list`, `tuple`, `range`           |
| Mapping Type:   | `dict`                             |
| Set Types:      | `set`, `frozenset`                 |
| Boolean Type:   | `bool`                             |
| Binary Types:   | `bytes`, `bytearray`, `memoryview` |
| None Type:      | `NoneType`                         |
> You can get the data type of any object by using the `type()` function:

In Python, the data type is set when you assign a value to a variable:

| Example                                      | Data Type  |
| -------------------------------------------- | ---------- |
| x = "Hello World"                            | str        |
| x = 20                                       | int        |
| x = 20.5                                     | float      |
| x = 1j                                       | complex    |
| x = ["apple", "banana", "cherry"]            | list       |
| x = ("apple", "banana", "cherry")            | tuple      |
| x = range(6)                                 | range      |
| x = {"name" : "John", "age" : 36}            | dict       |
| x = {"apple", "banana", "cherry"}            | set        |
| x = frozenset({"apple", "banana", "cherry"}) | frozenset  |
| x = True                                     | bool       |
| x = b"Hello"                                 | bytes      |
| x = bytearray(5)                             | bytearray  |
| x = memoryview(bytes(5))                     | memoryview |
| x = None                                     | NoneType   |

If you want to specify the data type, you can use the following constructor functions:

|                                              |            |
| -------------------------------------------- | ---------- |
| x = str ("Hello World")                      | str        |
| x = int(20)                                  | int        |
| x = float(20.5)                              | float      |
| x = complex(1j)                              | complex    |
| x = list(("apple", "banana", "cherry"))      | list       |
| x = tuple(("apple", "banana", "cherry"))     | tuple      |
| x = range(6)                                 | range      |
| x = dict(name="John", age=36)                | dict       |
| x = set(("apple", "banana", "cherry"))       | set        |
| x = frozenset(("apple", "banana", "cherry")) | frozenset  |
| x = bool(5)                                  | bool       |
| x = bytes(5)                                 | bytes      |
| x = bytearray(5)                             | bytearray  |
| x = memoryview(bytes(5))                     | memoryview |

---

## Numbers
