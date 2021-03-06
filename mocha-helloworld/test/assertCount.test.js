var expected = 0;
var actual = 0;

function assert(expr, msg) {
  if (!expr) throw new Error(msg || 'assertion failed');
  actual++;
}

function expect(n) {
  expected = n;
}

function reset() {
  expected = 0;
  actual = 0;
}

function check() {
  if (!expected || expected == actual) return;
  var err = new Error('expected ' + expected + ' assertions, got ' + actual);
  this.currentTest.emit('error', err);
}

beforeEach(reset);
afterEach(check);

describe('something', function () {
  it('should work', function (done) {
    expect(3);

    setTimeout(function () {
      assert('wahoo')
    }, 50);

    setTimeout(function () {
      assert('hey')
    }, 50);

    setTimeout(function () {
      done();
    }, 100);
  })
})