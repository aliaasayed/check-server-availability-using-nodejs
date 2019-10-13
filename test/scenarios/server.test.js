const app = require('../../app');
const expect = require('expect');
const request = require("supertest");

describe("Check avilability of list of servers", function () {
    it("send request to all servers using find/server", function (done) {
        request(app)
            .get('/find/server')
            .expect(function (res) {
                expect(res.status).toBe(200);
                expect(res.body.data.url).toBeDefined();
                expect(res.body.data.priority).toBeDefined();
            })
            .end(function (err, res) {
                if (err)
                    return done(err);
                done();
            });
    });
});
