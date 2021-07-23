let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Rest APIs', () => {

    it('Should return status 200 for `/`', (done) => {
        chai
            .request('http://localhost:4000')
            .get("/")
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('should return status 200 for `/movies`', (done) => {
        chai.request('http://localhost:4000')
            .get('/movies')
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    })

    it('should return status 404 for `/movie`', (done) => {
        chai.request('http://localhost:4000')
            .get('/movie')
            .then((res) => {
                expect(res).to.have.status(404);
                done();
            })
            .catch((err) => {
                throw err;
            })
    })

    // it('should return status 200 and response body for `/movies`', (done) => {
    //     chai.request('http://localhost:4000')
    //         .get('/movies')
    //         .end((err, res) => {
    //             if (err) throw err;
    //             res.should.have.status(200)
    //             // res.body.length.should.be.eq(6);
    //             done();
    //         })
    // })


})


