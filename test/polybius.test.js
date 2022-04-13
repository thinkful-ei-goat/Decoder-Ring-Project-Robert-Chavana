// Write your tests here!
const { expect } = require("chai");
const { polybius } = require('../src/polybius.js')

describe("polybius", () => {
    describe("Returns false with incorrect parameters. (decoding)", () => {
        it("returns false if number of characters in string excluding spaces is odd", () => {
          const actual = polybius("44324233521254134", false); 
          expect(actual).to.equal(false);
        });
        it("returns false if number of characters in string excluding spaces is odd", () => {
            const actual = polybius("44324233 521254134", false); 
            expect(actual).to.equal(false);
        });
    })
    describe("Encodes correctly", () => {
        it("returns correct encoding", () => {
          const actual = polybius("thinkful"); 
          expect(actual).to.equal('4432423352125413');
        });
        it("ignores casing", () => {
            const actual = polybius("tHiNkfuL"); 
            expect(actual).to.equal('4432423352125413');
        });
        it("maintains spaces", () => {
            const actual = polybius("Hello world"); 
            expect(actual).to.equal('3251131343 2543241341');
        });
    })
    describe("Decodes correctly", () => {
        it("Decodes correctly", () => {
          const actual = polybius("3251131343 2543241341", false); 
          expect(actual).to.equal('hello world');
        });
        it("Decodes correctly with i/j", () => {
          const actual = polybius("4432423352125413", false); 
          expect(actual).to.equal('th(i/j)nkful');
        });
    })
})