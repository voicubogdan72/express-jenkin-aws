const request = require("supertest");
const assert = require("assert");
const server = require("./app");

describe("Testare ruta '/'", function () {
  it("Ar trebui să returneze 'Hello' la accesarea rutei de bază", function (done) {
    request(server)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert.strictEqual(res.text, "Hello");
        done();
      });
  });
});
