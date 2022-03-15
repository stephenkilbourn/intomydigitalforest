---
tags:
  - python
  - development
  - codeschool
  - testing
---


# Hypermodern Python - Part 2 (Testing)

After doing the [[hypermodern python setup]]. the other day, today I started part 2.  This one focused on testing. It went fairly smoothly.  I wish that I had read through [this resource](https://cjolowicz.github.io/posts/hypermodern-python-02-testing/) before trying to set up unit tests in python the first time. We installed Nox and configured that to handle creating isolated virtual environments for running our tests.  The virtual environment idea in python still seems bizare and cumbersome to me, but at least there's tooling to automate it away. For some reason, running `nvm` feels more intuitve, but maybe that's just because I've been in the node world longer.

Nonetheless, I now have [a repo](https://github.com/stephenkilbourn/modern-python) with an api call to wikipedia, and tests.  Tests can be run with mocks of the api call, or actually go end-to-end.