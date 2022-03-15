---
tags:
  - python
  - development
  - codeschool
  - linting
---


# Hypermodern Python - Part 3 (Linting & Static Analysis)

After doing the [[hypermodern python setup]] and setting up [[hypermodern python testing]], this section focused on a lot of things that I set up regularly in the js world, but didn't really see used much in pythonland.  Surprise, these things do exists. People just seem to avoid them.

The setup had us add Flake8 and Black for formatting and linting. I haven't thoroughly red through the [Black styleguide](https://black.readthedocs.io/en/stable/the_black_code_style/index.html), but I like the idea of auto formatting. I really like having prettier set up with a preferred style that formats on save.  Hopefully, starting my python journey with some opinionated best practices will help me to not form bad habits.

flake8-bugbear seems to expand on opinions beyond normal linting. Bandit then does some security analysis. Safety checks dependencies for known security vulnerabilities. Finally, we set up a pre-commit hook to run things on commit.  That wasn't much different than doing so in JS. 

I did have a few issues in the tutorial.  It seems due to some updates with pip/poetry between when the tutorial was written and today. We set up a function to keep the session install by no for testing, linting, etc. pinned to versions. The function used in the tutoial failed without passing `poetry` the `--"--without-hashes"` flag.  I then had to update an exception handler from `raise click.ClickException(message)` to `raise click.ClickException(message) from error`.  I believe that was fallout to using newer versions of python than in the tutorial.


Nonetheless, I now have [a repo](https://github.com/stephenkilbourn/modern-python) that has a pretty nice setup. 