---
tags:
  - python
  - development
  - codeschool
  - testing
---

# Hypermodern Python - Part 1 (Setup)


Starting out with hypermodern, I created [my repo](https://github.com/stephenkilbourn/modern-python) and started using `pyenv`.  I was a little nervous that I would break a setup that I’d already done.  Things got bumpy right from the start.  
```
pyenv install 3.8.2
pyenv install 3.7.7
```
Both failed.  Googling `BUILD FAILED (OS X 11.6.1 using python-build 20180424)`. Stack Overflow, my old friend, has an exact match… if I understand things correctly, people just installed newer versions.  Let’s try installing 3.10.2 and 3.9.9 instead 🎲 🎲

That seemed to work.  I then installed `poetry` and via poetry installed `click`. Things seem to be… clicking.

We write our first bit of code and register it in the `pyproject.toml`.  I don’t quite get the reason, but it works as expected.

We then install `requests` and modify that first file.  A new bit of knowledge: The imports aren’t alphabetized like I would have anticipated. ***Blank lines serve to group imports as recommended in PEP 8 (standard library–third party packages–local imports).*** So the textwrap from the standard library is solo and first.

We make an http request in this new code. 
```
with requests.get(API_URL) as response:
    response.raise_for_status()
    data = response.json()
``` 
I had recently learned this, but re-stating it for myself: In the body of the main function, the requests.get invocation sends an HTTP GET request to the API. The `with` statement ensures that the HTTP connection is closed at the end of the block.

