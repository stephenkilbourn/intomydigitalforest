---
tags:
  - python
  - development
  - codeschool
  - typechecking
---


# Hypermodern Python - Part 4 (Type Annotations & Type Checking)

After doing the [[hypermodern python typing]] step, this section focused on setting up documentation. This is actually pretty slick once things are pieced together. I had seen docstrings, but assumed they were just anothe way to write comments. They actually have some suer powers. Not only can we write documentation, but you can also validate that the documentation in your doc string matches the code with Darglint. Darglint checks that docstring descriptions match function definitions. You can use Sphinx to generate a fancy html version of your documentation, and then `sphinx-autodoc-typehints` can uses type annotations to document the types of function parameters and return values.

I now have [a repo](https://github.com/stephenkilbourn/modern-python) that has a really nice setup with generated API documentation.
