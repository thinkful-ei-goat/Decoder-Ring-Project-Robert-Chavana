const { expect } = require("chai");
const { base64 } = require('../src/base64.js')

describe("base64", () => {
    describe("Encodes Correctly", () => {
        it("Correctly encodes plaintext 1", () => {
          const actual = base64('test string');
          expect(actual).to.equal('dGVzdCBzdHJpbmc=');
        });
        it("Correctly encodes plaintext 2", () => {
            const actual = base64('In computer programming, Base64 is a group of binary-to-text encoding schemes that represent binary data (more specifically, a sequence of 8-bit bytes) in sequences of 24 bits that can be represented by four 6-bit Base64 digits. Common to all binary-to-text encoding schemes, Base64 is designed to carry data stored in binary formats across channels that only reliably support text content. Base64 is particularly prevalent on the World Wide Web where one of its uses is the ability to embed image files or other binary assets inside textual assets such as HTML and CSS files. -Wikipedia');
            expect(actual).to.equal('SW4gY29tcHV0ZXIgcHJvZ3JhbW1pbmcsIEJhc2U2NCBpcyBhIGdyb3VwIG9mIGJpbmFyeS10by10ZXh0IGVuY29kaW5nIHNjaGVtZXMgdGhhdCByZXByZXNlbnQgYmluYXJ5IGRhdGEgKG1vcmUgc3BlY2lmaWNhbGx5LCBhIHNlcXVlbmNlIG9mIDgtYml0IGJ5dGVzKSBpbiBzZXF1ZW5jZXMgb2YgMjQgYml0cyB0aGF0IGNhbiBiZSByZXByZXNlbnRlZCBieSBmb3VyIDYtYml0IEJhc2U2NCBkaWdpdHMuIENvbW1vbiB0byBhbGwgYmluYXJ5LXRvLXRleHQgZW5jb2Rpbmcgc2NoZW1lcywgQmFzZTY0IGlzIGRlc2lnbmVkIHRvIGNhcnJ5IGRhdGEgc3RvcmVkIGluIGJpbmFyeSBmb3JtYXRzIGFjcm9zcyBjaGFubmVscyB0aGF0IG9ubHkgcmVsaWFibHkgc3VwcG9ydCB0ZXh0IGNvbnRlbnQuIEJhc2U2NCBpcyBwYXJ0aWN1bGFybHkgcHJldmFsZW50IG9uIHRoZSBXb3JsZCBXaWRlIFdlYiB3aGVyZSBvbmUgb2YgaXRzIHVzZXMgaXMgdGhlIGFiaWxpdHkgdG8gZW1iZWQgaW1hZ2UgZmlsZXMgb3Igb3RoZXIgYmluYXJ5IGFzc2V0cyBpbnNpZGUgdGV4dHVhbCBhc3NldHMgc3VjaCBhcyBIVE1MIGFuZCBDU1MgZmlsZXMuIC1XaWtpcGVkaWE=');
        });
        it("Correctly encodes plaintext 3", () => {
            const actual = base64('The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.');
            expect(actual).to.equal('VGhlIENhZXNhciBTaGlmdCBpcyBhIHR5cGUgb2Ygc3Vic3RpdHV0aW9uIGNpcGhlciBvcmlnaW5hbGx5IHVzZWQgYnkgSnVsaXVzIENhZXNhciB0byBwcm90ZWN0IG1lc3NhZ2VzIG9mIG1pbGl0YXJ5IHNpZ25pZmljYW5jZS4gSXQgcmVsaWVzIG9uIHRha2luZyB0aGUgYWxwaGFiZXQgYW5kICJzaGlmdGluZyIgbGV0dGVycyB0byB0aGUgcmlnaHQgb3IgbGVmdCwgYmFzZWQgb24gdGhlIHR5cGljYWwgYWxwaGFiZXRpYyBvcmRlci4=');
        });
    })
    describe("Decodes Correctly", () => {
        it("Correctly decodes plaintext 1", () => {
          const actual = base64('dGVzdCBzdHJpbmc=', false);
          expect(actual).to.equal('test string');
        });
        it("Correctly decodes plaintext 2", () => {
            const actual = base64('SW4gY29tcHV0ZXIgcHJvZ3JhbW1pbmcsIEJhc2U2NCBpcyBhIGdyb3VwIG9mIGJpbmFyeS10by10ZXh0IGVuY29kaW5nIHNjaGVtZXMgdGhhdCByZXByZXNlbnQgYmluYXJ5IGRhdGEgKG1vcmUgc3BlY2lmaWNhbGx5LCBhIHNlcXVlbmNlIG9mIDgtYml0IGJ5dGVzKSBpbiBzZXF1ZW5jZXMgb2YgMjQgYml0cyB0aGF0IGNhbiBiZSByZXByZXNlbnRlZCBieSBmb3VyIDYtYml0IEJhc2U2NCBkaWdpdHMuIENvbW1vbiB0byBhbGwgYmluYXJ5LXRvLXRleHQgZW5jb2Rpbmcgc2NoZW1lcywgQmFzZTY0IGlzIGRlc2lnbmVkIHRvIGNhcnJ5IGRhdGEgc3RvcmVkIGluIGJpbmFyeSBmb3JtYXRzIGFjcm9zcyBjaGFubmVscyB0aGF0IG9ubHkgcmVsaWFibHkgc3VwcG9ydCB0ZXh0IGNvbnRlbnQuIEJhc2U2NCBpcyBwYXJ0aWN1bGFybHkgcHJldmFsZW50IG9uIHRoZSBXb3JsZCBXaWRlIFdlYiB3aGVyZSBvbmUgb2YgaXRzIHVzZXMgaXMgdGhlIGFiaWxpdHkgdG8gZW1iZWQgaW1hZ2UgZmlsZXMgb3Igb3RoZXIgYmluYXJ5IGFzc2V0cyBpbnNpZGUgdGV4dHVhbCBhc3NldHMgc3VjaCBhcyBIVE1MIGFuZCBDU1MgZmlsZXMuIC1XaWtpcGVkaWE=', false);
            expect(actual).to.equal('In computer programming, Base64 is a group of binary-to-text encoding schemes that represent binary data (more specifically, a sequence of 8-bit bytes) in sequences of 24 bits that can be represented by four 6-bit Base64 digits. Common to all binary-to-text encoding schemes, Base64 is designed to carry data stored in binary formats across channels that only reliably support text content. Base64 is particularly prevalent on the World Wide Web where one of its uses is the ability to embed image files or other binary assets inside textual assets such as HTML and CSS files. -Wikipedia');
        });
        it("Correctly decodes plaintext 3", () => {
            const actual = base64('VGhlIENhZXNhciBTaGlmdCBpcyBhIHR5cGUgb2Ygc3Vic3RpdHV0aW9uIGNpcGhlciBvcmlnaW5hbGx5IHVzZWQgYnkgSnVsaXVzIENhZXNhciB0byBwcm90ZWN0IG1lc3NhZ2VzIG9mIG1pbGl0YXJ5IHNpZ25pZmljYW5jZS4gSXQgcmVsaWVzIG9uIHRha2luZyB0aGUgYWxwaGFiZXQgYW5kICJzaGlmdGluZyIgbGV0dGVycyB0byB0aGUgcmlnaHQgb3IgbGVmdCwgYmFzZWQgb24gdGhlIHR5cGljYWwgYWxwaGFiZXRpYyBvcmRlci4=',false);
            expect(actual).to.equal('The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.');
        });
    })
    describe("Formats the display image string correctly", () => {
        it("Correctly formats img tag", () => {
          const actual = base64('dGVzdCBzdHJpbmc=', false, true); //just using random code
          expect(actual).to.equal('<img src="data:image;base64,dGVzdCBzdHJpbmc="/>');
        });
        it("filters extraneous info (html)", () => {
            const actual = base64('data:image/png;base64,dGVzdCBzdHJpbmc=', false, true);
            expect(actual).to.equal('<img src="data:image;base64,dGVzdCBzdHJpbmc="/>');
        });
        it("filters extraneous info (css)", () => {
            const actual = base64("url('data:image/png;base64,dGVzdCBzdHJpbmc=')",false, true);
            expect(actual).to.equal('<img src="data:image;base64,dGVzdCBzdHJpbmc="/>');
        });
    })
})