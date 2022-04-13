// Write your tests here!
const { expect } = require("chai");
const { caesar } = require('../src/caesar.js')

describe("caesar", () => {
    describe("Returns false with incorrect parameters.", () => {
        it("returns false if shift is not present", () => {
          const actual = caesar('test string');
          expect(actual).to.equal(false);
        });
        it("returns false if shift is less than -25", () => {
            const actual = caesar('test string',-40);
            expect(actual).to.equal(false);
        });
        it("returns false if shift is greater than 25", () => {
            const actual = caesar('test string',65);
            expect(actual).to.equal(false);
        });
    })
    describe("Properly shifts given string", () => {
        it("Shifts string", () => {
          const actual = caesar('thinkful',3);
          expect(actual).to.equal('wklqnixo');
        });
        it("maintains non alphabetic symbols and spaces", () => {
            const actual = caesar('th ink!ful34',3);
            expect(actual).to.equal('wk lqn!ixo34');
        });
        it("Shifts string in a negative direction", () => {
            const actual = caesar('thinkful',-3);
            expect(actual).to.equal('qefkhcri');
        });
        it("Wraps around leftwards", () => {
            const actual = caesar('abc',-3);
            expect(actual).to.equal('xyz');
        });
        it("Wraps around alphabet array correctly", () => {
            const actual = caesar('xyz',7);
            expect(actual).to.equal('efg');
        });
        it("Decodes successfully", () => {
            const actual = caesar('qefkhcri',-3,false);
            expect(actual).to.equal('thinkful');
        });
    })
})