# Function Types Comparison

| Feature | Normal Function | Function Expression | Arrow Function |
|---------|---------------|---------------------|----------------|
| Syntax | `function name() {}` | `const name = function() {}` | `const name = () => {}` |
| Hoisting | ✅ Hoisted (can be called before declaration) | ❌ Not hoisted (cannot be called before initialization) | ❌ Not hoisted (cannot be called before initialization) |
| this Context | Has its own `this` (dynamic, depends on caller) | Has its own `this` (dynamic, depends on caller) | Inherits `this` from the surrounding (parent) scope (lexical) |
| arguments Object | ✅ Has its own arguments object | ✅ Has its own arguments object | ❌ Does not have arguments object (use rest `...args` instead) |
| new Keyword | ✅ Can be used as a constructor | ✅ Can be used as a constructor (if named) | ❌ Cannot be used as a constructor |
| prototype Property | ✅ Has a prototype property | ✅ Has a prototype property | ❌ No prototype property |
| Implicit Return | ❌ Requires explicit return | ❌ Requires explicit return | ✅ Implicit return for single-line expressions (no curly braces needed) |
| Debugging / Stack Trace | Shows function name clearly | Shows function name (if named) | Shows as anonymous or variable name depending on engine |
| Best Used For | Object methods, constructors, hoisted utilities | Callbacks, closures, conditional definitions | Short callbacks, array methods (.map, .filter), lexical this scenarios |
