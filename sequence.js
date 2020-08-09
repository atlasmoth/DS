function* sequence() {
  while (true) {
    yield Math.round(Math.random() * 100);
  }
}
module.exports = sequence;
