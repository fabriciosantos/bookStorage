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
            const booksList = Joi.array().items(Joi.object().keys({
                id: Joi.number(),
                name: Joi.string(),
                created_at: Joi.date().iso(),
                updated_at: Joi.date().iso()
            }));

            request
                .get('/books')
                .end((err, res) => {
                    JoiAssert(res.body, booksList);
                    done(err);
                });
        });
    });

    describe('Route GET /books/{id}', () => {
        it('should return a book', done => {
            const book = Joi.object().keys({
                id: Joi.number(),
                name:Joi.string(),
                created_at: Joi.date().iso(),
                updated_at: Joi.date().iso()
            });
            request
                .get('/books/1')
                .end((err, res) => {
                    JoiAssert(res.body, book);
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
            const book = Joi.object().keys({
                id: Joi.number(),
                name:Joi.string(),
                created_at: Joi.date().iso(),
                updated_at: Joi.date().iso()
            });
            request
                .post('/books')
                .send(newBook)
                .end((err, res) => {
                    JoiAssert(res.body, book);
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
            const updatedCount = Joi.array().items(1);
            request
                .put('/books/1')
                .send(newBook)
                .end((err, res) => {
                    JoiAssert(res.body, updatedCount);
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