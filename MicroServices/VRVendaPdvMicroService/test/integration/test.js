const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
const HTTPStatus = require("http-status");

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Ano", () => {
  describe("GET ano", () => {
    it("Teste deverá trazer todos os anos", done => {

      chai
        .request(server)
        .get("/api/v1/venda/ano")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/ano/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    });

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/ano")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    });

  });
});


describe("Mês", () => {
  describe("GET mes", () => {
    it("Teste deverá trazer todos os meses", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mes")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mes/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    });

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mes")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    });

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mes?ano=&dia=&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mes?ano=&di=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mes?ano='ano'&dia=25,a&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});


describe("Dia", () => {
  describe("GET dia", () => {
    it("Teste deverá trazer todos os dias", done => {

      chai
        .request(server)
        .get("/api/v1/venda/dia")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/dia/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    });

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/dia")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    });

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/dia?ano=&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/dia?ano=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/dia?ano='ano'&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});

describe("Loja", () => {
  describe("GET loja", () => {
    it("Teste deverá trazer todas lojas", done => {

      chai
        .request(server)
        .get("/api/v1/venda/loja")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/loja/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    });

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/loja")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    });

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/loja?ano=&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/loja?ano=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/loja?ano='ano'&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});

describe("Top 10", () => {
  describe("GET top", () => {
    it("Teste deverá trazer top 10", done => {

      chai
        .request(server)
        .get("/api/v1/venda/top")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/top/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    }).timeout(10000);

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/top")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/top?ano=&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/top?ano=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/top?ano='ano'&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});

describe("Comprador", () => {
  describe("GET comprador", () => {
    it("Teste deverá trazer comprador", done => {

      chai
        .request(server)
        .get("/api/v1/venda/comprador")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/comprador/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    }).timeout(10000);

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/comprador")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/comprador?ano=&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/comprador?ano=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/comprador?ano='ano'&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});

describe("Total", () => {
  describe("GET total", () => {
    it("Teste deverá trazer total", done => {

      chai
        .request(server)
        .get("/api/v1/venda/total")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(15000);

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/total/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    }).timeout(15000);

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/total")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    }).timeout(15000);

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/total?ano=&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(15000);

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/total?ano=&mercadologo1=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(15000);

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/total?ano='ano'&mercadologico1=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});


describe("Mercadologico1", () => {
  describe("GET mercadologico1", () => {
    it("Teste deverá trazer mercadologico1", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico1")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico1/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    }).timeout(10000);

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico1")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico1?ano=&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico1?ano=&mercadlogico2=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico1?ano='ano'&mercadologico2=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});

describe("Mercadologico2", () => {
  describe("GET mercadologico2", () => {
    it("Teste deverá trazer mercadologico2", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico2")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico2/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    }).timeout(10000);

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico2")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico2?ano=&mercadologico1=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico2?ano=&mercadlogico1=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico2?ano='ano'&mercadologico1=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});

describe("Mercadologico3", () => {
  describe("GET mercadologico3", () => {
    it("Teste deverá trazer mercadologico3", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico3")
        .end((err, res) => {
          console.log(res.status);
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico3/teste")
        .end((err, res) => {
          chai.expect(res.status).to.be.equal(HTTPStatus.NOT_FOUND);
          done(err);
        });
    }).timeout(10000);

    it("Teste não deverá conter erros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico3")
        .end((err, res) => {
          chai.expect(res.status).to.not.be.equal(HTTPStatus.INTERNAL_SERVER_ERROR);
          chai.expect(res.status).to.not.be.equal(HTTPStatus.BAD_REQUEST);
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros vazios", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico3?ano=&mercadologico1=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de parâmetros errados", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico3?ano=&mercadlogico1=&mercadoogico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.OK);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    }).timeout(10000);

    it("Teste de erros semânticos nos parâmetros", done => {

      chai
        .request(server)
        .get("/api/v1/venda/mercadologico3?ano='ano'&mercadologico1=&mercadologico3=&produto=&comprador=")
        .end((err, res) => {
          chai.expect(res.status).to.equal(HTTPStatus.UNPROCESSABLE_ENTITY);
          chai.expect(res.body).to.not.be.null;
          done(err);
        });
    });

  });
});