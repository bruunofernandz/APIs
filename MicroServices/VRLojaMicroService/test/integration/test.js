const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
const HTTPStatus = require("http-status");

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Loja", () => {
  describe("GET loja", () => {
    it("Teste deverá trazer todos as lojas", done => {

      chai
        .request(server)
        .get("/api/v1/vrmastermobile/loja")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/vrmastermobile/loja/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    });

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/vrmastermobile/loja")
        .body("{\"hashCliente\": \"8076873\"}")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    });

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/vrmastermobile/loja")
        .body("")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/vrmastermobile/loja/dia?ano=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .body("{\"hashCliente\" : \"\"")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });
  });
});