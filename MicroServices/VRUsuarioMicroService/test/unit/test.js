// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../../server");
// const HTTPStatus = require("http-status");

// // Configure chai
// chai.use(chaiHttp);
// chai.should();

// describe("Login", () => {
//     describe("POST login", () => {
//         it("Teste deverá realizar Validações email", done => {
//             var credentials = {
//                 email: "emersonvrsoft.com.br",
//                 senha: "123456"
//             };

//             chai
//                 .request(server)
//                 .post("/api/auth/login")
//                 .send(credentials)
//                 .end((err, res) => {
//                     chai.expect(res.status).to.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
//                     done(err);
//                 });
//         });

//         it("Teste deverá realizar Validações senha", done => {
//             var credentials = {
//                 email: "emerson@vrsoft.com.br",
//                 senha: "123"
//             };

//             chai
//                 .request(server)
//                 .post("/api/auth/login")
//                 .send(credentials)
//                 .end((err, res) => {
//                     chai.expect(res.status).to.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
//                     done(err);
//                 });
//         });

//     });
// });
