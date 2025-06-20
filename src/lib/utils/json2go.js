/*
	JSON-to-Go
	by Matt Holt

	https://github.com/mholt/json-to-go

	A simple utility to translate JSON into a Go type definition.
*/

function jsonToGo(json, typename, flatten = true, example = false, allOmitempty = false) {
  let data;
  let scope;
  let go = "";
  let tabs = 0;

  const seen = {};
  const stack = [];
  let accumulator = "";
  const innerTabs = 0;
  let parent = "";

  try {
    data = JSON.parse(json.replace(/(:\s*\[?\s*-?\d*)\.0/g, "$1.1")); // hack that forces floats to stay as floats
    scope = data;
  } catch (e) {
    return {
      go: "",
      error: e.message,
    };
  }

  typename = format(typename || "Root");
  append(`type ${typename} `);

  parseScope(scope);

  return {
    go: flatten ? (go += accumulator) : go,
  };

  function parseScope(scope, depth = 0) {
    if (typeof scope === "object" && scope !== null) {
      if (Array.isArray(scope)) {
        let sliceType;
        const scopeLength = scope.length;

        for (let i = 0; i < scopeLength; i++) {
          const thisType = goType(scope[i]);
          if (!sliceType) sliceType = thisType;
          else if (sliceType != thisType) {
            sliceType = mostSpecificPossibleGoType(thisType, sliceType);
          }
        }
        append(`[]${sliceType}`);
      } else {
        append("struct {");
        tabs++;
        for (const key in scope) {
          append(`\n${tab()}${format(key)} ${goType(scope[key])} `);
          if (example) append(`// example: ${JSON.stringify(scope[key])}`);
        }
        tabs--;
        append(`\n${tab()}}`);
      }
    } else {
      append(goType(scope));
    }
  }

  function goType(value) {
    if (value === null) return "interface{}";
    switch (typeof value) {
      case "string":
        return "string";
      case "number":
        return Number.isInteger(value) ? "int" : "float64";
      case "boolean":
        return "bool";
      case "object":
        if (Array.isArray(value)) return "[]" + goType(value[0]);
        return "struct {...}";
      default:
        return "interface{}";
    }
  }

  function mostSpecificPossibleGoType(a, b) {
    if (a === b) return a;
    if (a === "interface{}" || b === "interface{}") return "interface{}";
    return "interface{}";
  }

  function append(str) {
    go += str;
  }

  function tab() {
    return "\t".repeat(tabs);
  }

  function format(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

if (typeof module != "undefined") {
  module.exports = jsonToGo;
}
