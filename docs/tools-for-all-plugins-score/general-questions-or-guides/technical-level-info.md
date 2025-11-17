---
unlisted: true
description: >-
  Only useful for people who pay attention on the tiniest
  info/function/mechanics about how plugins such as ExecutableItems,
  ExecutableBlocks work
---

# Technical-Level Info

## Activator Execution Properties

* Commands run first before variable update, causing items that spawn particles in one place to be impossible in the free version
* In some cases, activators run faster than commands so even if you used the action counter method and used SCore variables instead of item variables, it won't work.

## How does YML Format Work Exactly

YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files and data exchange between programming languages.

### How It Works
YAML uses indentation (spaces, not tabs) to represent structure and hierarchy, making it easy to read and write. Key features include:
Basic Syntax:
  * Key-value pairs: name: John
  * Lists: Use hyphens for items
  * Nesting: Indent with spaces to show relationships
  * Comments: Start with #

Example:
```yaml
# Application configuration
app:
  name: MyApp
  version: 1.0
  features:
    - user-authentication
    - api-support
  database:
    host: localhost
    port: 5432
```

### YAML Validator

To check if your yaml is valid you can use : https://www.yamllint.com/