function hashStringToInt(string, tableSize) {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash = (hash * string[i].charCodeAt()) % tableSize;
  }
  return hash;
}

class Hash {
  table = new Array(100);
  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length);
    // check if value already exists at the index
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [];
      this.table[idx].push([key, value]);
    }
  };
  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx].find((item) => item[0] === key)[1];
  };
}
