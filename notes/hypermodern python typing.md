---
tags:
  - python
  - development
  - codeschool
  - typechecking
---


# Hypermodern Python - Part 4 (Type Annotations & Type Checking)

After doing the [[hypermodern python linting]] step, this section focused on setting up type annotation and Static Type checking.  In some ways, this feels very much like JS/typescript.  In other ways, it felt odd.  We used both `mypy` and `pytpe` but I didn't really understand the difference in both. If anything, this made it feel more wild west, we'll do what we feel like.  Something about the annotation style looks ugly to me, too: 🤷
```
def increment(number: int) -> int:
    return number + 1
```

Using both static typing (with 2 packages!), we then set up some run time type checking with `typeguard` which was an intersting capability.

At the end, I ended up having a lot of linting errors for `I001 isort found an import in the wrong position` even though I followed the exact import order in the tutorial. I finally decided to just add that error to the `per-file-ignores` section of my `flake8` setup and be done with it.


Nonetheless, I now have [a repo](https://github.com/stephenkilbourn/modern-python) that has a pretty nice setup. 