function extractFields(obj, C) {
  const result = {};
  for (let key in obj) {
    if (C.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// Example usage
class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj = {
  a: 1,
  b: 2,
  c: 3
};

const extractedObj = extractFields(obj, new C());
console.log(extractedObj); // Output: { a: 1, b: 2 }
