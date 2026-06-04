# JavaScript String Cheat Sheet

## String Creation

| Method / Syntax | Description | Example | Output |
|----------------|-------------|---------|--------|
| `new String()` | Creates a String object (rarely used) | `new String("hello")` | `"hello"` |
| `""` or `''` or ` `` ` | String literal | `"hello"` | `"hello"` |
| `String(value)` | Converts value to string | `String(42)` | `"42"` |

---

## Extracting Characters & Substrings

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `charAt(index)` | Character at index | `"abc".charAt(1)` | `"b"` |
| `charCodeAt(index)` | UTF-16 code at index | `"A".charCodeAt(0)` | `65` |
| `codePointAt(index)` | Unicode code point | `"𐍈".codePointAt(0)` | `66376` |
| `at(index)` | Character at index (allows negative) | `"abc".at(-1)` | `"c"` |
| `slice(start, end)` | Extract substring | `"hello".slice(1, 4)` | `"ell"` |
| `substring(start, end)` | Extract substring | `"hello".substring(1, 4)` | `"ell"` |
| `substr(start, length)` | Extract substring (deprecated) | `"hello".substr(1, 3)` | `"ell"` |
| `split(separator)` | Split into array | `"a,b,c".split(",")` | `["a","b","c"]` |

---

## Searching & Matching

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `indexOf(search)` | First index of substring | `"hello".indexOf("l")` | `2` |
| `lastIndexOf(search)` | Last index of substring | `"hello".lastIndexOf("l")` | `3` |
| `includes(search)` | Contains substring? | `"hello".includes("ell")` | `true` |
| `startsWith(search)` | Starts with substring? | `"hello".startsWith("he")` | `true` |
| `endsWith(search)` | Ends with substring? | `"hello".endsWith("lo")` | `true` |
| `search(regex)` | Match regex, return index | `"abc123".search(/\d/)` | `3` |
| `match(regex)` | Match regex, return array | `"abc123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | All matches (iterator) | `Array.from("a1b2".matchAll(/\d/g))` | `["1","2"]` arrays |
| `localeCompare(str)` | Compare for sorting | `"a".localeCompare("b")` | `-1` |

---

## Modifying & Replacing

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `replace(search, newStr)` | Replace first match | `"a a".replace("a", "b")` | `"b a"` |
| `replaceAll(search, newStr)` | Replace all matches | `"a a".replaceAll("a", "b")` | `"b b"` |
| `toLowerCase()` | Lowercase | `"Hello".toLowerCase()` | `"hello"` |
| `toUpperCase()` | Uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `trim()` | Remove whitespace both ends | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` / `trimLeft()` | Remove leading whitespace | `"  hi".trimStart()` | `"hi"` |
| `trimEnd()` / `trimRight()` | Remove trailing whitespace | `"hi  ".trimEnd()` | `"hi"` |
| `padStart(targetLen, padStr)` | Pad from start | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(targetLen, padStr)` | Pad from end | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(count)` | Repeat string | `"ab".repeat(3)` | `"ababab"` |
| `normalize(form)` | Unicode normalization | `"é".normalize("NFD")` | normalized form |

---

## Concatenation & Joining

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `concat(str1, str2...)` | Join strings | `"a".concat("b", "c")` | `"abc"` |
| `+` operator | Join strings | `"a" + "b"` | `"ab"` |
| template literals | Interpolate values | `` `Hi ${name}` `` | `"Hi Bob"` |

---

## Inspection & Testing

| Property / Method | Description | Example | Output |
|------------------|-------------|---------|--------|
| `length` | Number of characters | `"abc".length` | `3` |
| `isWellFormed()` | Valid UTF-16? | `"abc".isWellFormed()` | `true` |
| `toString()` | Return string value | `String("hi").toString()` | `"hi"` |
| `valueOf()` | Return primitive value | `String("hi").valueOf()` | `"hi"` |

---

## HTML Wrapper Methods (Deprecated / Discouraged)

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `anchor(name)` | Wrap in `<a>` | `"text".anchor("id")` | `<a name="id">text</a>` |
| `big()` | Wrap in `<big>` | `"text".big()` | `<big>text</big>` |
| `blink()` | Wrap in `<blink>` | `"text".blink()` | `<blink>text</blink>` |
| `bold()` | Wrap in `<b>` | `"text".bold()` | `<b>text</b>` |
| `fixed()` | Wrap in `<tt>` | `"text".fixed()` | `<tt>text</tt>` |
| `fontcolor(color)` | Wrap in `<font>` | `"text".fontcolor("red")` | `<font color="red">text</font>` |
| `fontsize(size)` | Wrap in `<font>` | `"text".fontsize(7)` | `<font size="7">text</font>` |
| `italics()` | Wrap in `<i>` | `"text".italics()` | `<i>text</i>` |
| `link(url)` | Wrap in `<a href>` | `"text".link("url")` | `<a href="url">text</a>` |
| `small()` | Wrap in `<small>` | `"text".small()` | `<small>text</small>` |
| `strike()` | Wrap in `<strike>` | `"text".strike()` | `<strike>text</strike>` |
| `sub()` | Wrap in `<sub>` | `"text".sub()` | `<sub>text</sub>` |
| `sup()` | Wrap in `<sup>` | `"text".sup()` | `<sup>text</sup>` |

---

## Quick Tips

| Tip | Example |
|-----|---------|
| Strings are immutable | `s[0] = "X"` does **not** change `s` |
| Use `[]` instead of `charAt()` | `"abc"[1]` → `"b"` |
| Check empty string | `!str` or `str.length === 0` |
| Convert to number | `Number("42")` or `parseInt("42")` |
| Reverse a string | `str.split("").reverse().join("")` |
