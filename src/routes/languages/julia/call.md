---
title: 'Julia | Calling languages Python - R'
date: '2024-03-31'
language: 'julia'
keywords: ''
---

## PyCall

```python
Using PyCall

# déclaration d'une fonction Python
py"""
  def sumMyArgs (i, j):
    return i+j
"""

a = py"sumMyArgs"(3,4)
```