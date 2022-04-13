// Write your tests here!
const { expect } = require("chai");
const { substitution } = require('../src/substitution.js')

describe("substitution", () => {
    describe("Returns false with incorrect parameters.", () => {
        it("returns false if alphabet is not exactly 26 characters", () => {
          const actual = substitution("thinkful", 'qwertyuiop'); 
          expect(actual).to.equal(false);
        });
        it("returns false if alphabet is not exactly 26 characters, again", () => {
            const actual = substitution("thinkful", 'bcedefghijklmnopqrstuvwxyza+'); 
            expect(actual).to.equal(false);
        });
    })
    describe("Encodes correctly", () => {
        it("returns correct encoding", () => {
          const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); 
          expect(actual).to.equal('jrufscpw');
        });
        it("returns correct encoding with spaces", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
            expect(actual).to.equal('elp xhm xf mbymwwmfj dne');
        });
        it("returns correct encoding with special characters", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); 
            expect(actual).to.equal('y&ii$r&');
        });
    })
    describe("Decodes correctly", () => {
        it("Decodes correctly", () => {
          const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); 
          expect(actual).to.equal('thinkful');
        });
        it("Decodes correctly with special characters", () => {
          const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 
          expect(actual).to.equal('message');
        });
        it("Decodes correctly with special characters", () => {
          const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev",false); 
          expect(actual).to.equal('you are an excellent spy');
        });
    })
})