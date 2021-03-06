describe('Routes Books', () => {
    const Books = app.datasource.models.books,
        defaultBooks = {
            id: 1,
            name: 'default book'
        };

    beforeEach(done => {
        Books.destroy({ where: {} })
            .then(() => Books.create(defaultBooks))
            .then(() => {
                done();
            });
    });

    describe('Route GET /books', () => {
        it('should return a list fo books', done => {
            request
                .get('/books')
                .end((err, res) => {
                    expect(res.body[0].id).to.be.eql(defaultBooks.id);
                    expect(res.body[0].name).to.be.eql(defaultBooks.name);
                    done(err);
                });
        });
    });

    describe('Route GET /books/{id}', () => {
        it('should return a book', done => {
            request
                .get('/books/1')
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(defaultBooks.id);
                    expect(res.body.name).to.be.eql(defaultBooks.name);
                    done(err);
                });
        });
    });

    describe('Route Post /books', () => {
        it('should create a book', done => {
            const newBook = {
                id: 2,
                name: 'default book'
            };
            request
                .post('/books')
                .send(newBook)
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(newBook.id);
                    expect(res.body.name).to.be.eql(newBook.name);
                    done(err);
                });
        });
    });

    describe('Route Put /books/{id}', () => {
        it('should update a book', done => {
            const newBook = {
                id: 1,
                name: 'update book'
            };
            request
                .put('/books/1')
                .send(newBook)
                .end((err, res) => {
                    expect(res.body).to.be.eql([1]);
                    done(err);
                });
        });
    });

    describe('Route Delete /books/{id}', () => {
        it('should delete a book', done => {

            request
                .delete('/books/2')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);
                    done(err);
                });
        });
    });

});