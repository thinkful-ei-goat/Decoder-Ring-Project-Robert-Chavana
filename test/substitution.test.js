// Write your tests here!
const { expect } = require("chai");
const { substitution } = require('../src/substitution.js')
const originalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

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
          expect(actual[0]).to.equal('jrufscpw');
        });
        it("returns correct encoding with spaces", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
            expect(actual[0]).to.equal('elp xhm xf mbymwwmfj dne');
        });
        it("returns correct encoding with special characters", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); 
            expect(actual[0]).to.equal('y&ii$r&');
        });
    })
    describe("Decodes correctly", () => {
        it("Decodes correctly", () => {
          const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); 
          expect(actual[0]).to.equal('thinkful');
        });
        it("Decodes correctly with special characters", () => {
          const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 
          expect(actual[0]).to.equal('message');
        });
        it("Decodes correctly with special characters", () => {
          const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev",false); 
          expect(actual[0]).to.equal('you are an excellent spy');
        });
    })
    describe("Special Features", () => {
      it("Gives back correct alphabet", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); 
        expect(actual[1]).to.equal('Provided alphabet: xoyqmcgrukswaflnthdjpzibev');
      });
      it("Gives back correct alphabet", () => {
        const actual = substitution("jrufscpw"); 
        expect(actual[1].length).to.equal(57);
      });
  })
})