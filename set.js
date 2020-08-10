const arr = [1, 2, 1, 3, 2, 0, 7, 7];
const removeDups = (arr = []) => {
  let temp = {};
  let final = [];
  // push unique items into temp obj
  for (let i in arr) {
    if (temp[arr[i]]) {
      continue;
    }
    temp[arr[i]] = arr[i];
  }
  // push all temp values into final array and return.
  for (let x in temp) {
    final.push(x);
  }
  return final;
};

const dup = (arr = []) => [...new Set(arr)];

const union = (set1, set2) => {
  return new Set([...set1, ...set2]);
};

const intersection = (set1, set2) => {};

console.log(new Set().values());
