function* sequence() {
  let count = 0;
  while (true) {
    count++;
    yield count;
  }
}
module.exports = sequence;
