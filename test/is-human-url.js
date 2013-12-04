describe('is-human-url', function () {

var isHumanUrl = require('..');

describe('valid', function () {
  it('http://google.com', function () {
    isHumanUrl('http://google.com').should.be.true;
  });

  it('https://google.com', function () {
    isHumanUrl('https://google.com').should.be.true;
  });

  it('ftp://google.com', function () {
    isHumanUrl('ftp://google.com').should.be.true;
  });

  it('http://www.google.com', function () {
    isHumanUrl('http://www.google.com').should.be.true;
  });

  it('http://google.com/something', function () {
    isHumanUrl('http://google.com/something').should.be.true;
  });

  it('http://google.com?q=query', function () {
    isHumanUrl('http://google.com?q=query').should.be.true;
  });

  it('http://google.com#hash', function () {
    isHumanUrl('http://google.com#hash').should.be.true;
  });

  it('http://google.com/something?q=query#hash', function () {
    isHumanUrl('http://google.com/something?q=query#hash').should.be.true;
  });

  it('http://google.co.uk', function () {
    isHumanUrl('http://google.co.uk').should.be.true;
  });

  it('http://www.google.co.uk', function () {
    isHumanUrl('http://www.google.co.uk').should.be.true;
  });

  it('http://google.cat', function () {
    isHumanUrl('http://google.cat').should.be.true;
  });

  it('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176', function () {
    isHumanUrl('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176').should.be.true;
  });

  it('http://0.0.0.0', function () {
    isHumanUrl('http://0.0.0.0').should.be.true;
  });

  it('http://localhost', function () {
    isHumanUrl('http://localhost').should.be.true;
  });

  it('localhost', function () {
    isHumanUrl('localhost').should.be.true;
  });

  it('google.com', function () {
    isHumanUrl('google.com').should.be.true;
  });

  it('g.co', function () {
    isHumanUrl('g.co').should.be.true;
  });

  it('g.name', function () {
    isHumanUrl('g.name').should.be.true;
  });

  it('a.CONSTRUCTION', function () {
    isHumanUrl('a.CONSTRUCTION').should.be.true;
  });

  it('alsdkjfadlfjaklsdjflak---kjkj.jsdlkfjalskdj.flaksjdlfkjasld.kjflaksjdl.fkjasdf.xxx', function () {
    isHumanUrl('alsdkjfa.dlfjaklsdjflak---123.jsdlkfjalskdj.flaksjdlfkjasld.kjflaksjdl.fkjasdf.xxx').should.be.true;
  });
});

describe('invalid', function () {
  it('http://', function () {
    isHumanUrl('http://').should.be.false;
  });

  it('http://google', function () {
    isHumanUrl('http://google').should.be.false;
  });

  it('http://google.', function () {
    isHumanUrl('http://google.').should.be.false;
  });

  it('google', function () {
    isHumanUrl('google').should.be.false;
  });
});

});