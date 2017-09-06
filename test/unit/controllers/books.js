import booksController from '../../../controllers/books';

describe('Controller: books', () => {
    describe('GetAll books: getAll()', () => {
        it('should return a list of books', () => {
            const Books = {
                findAll: td.function()
            };
            const expectedResponse = [{
                id: 1,
                name: 'test book',
                created_at: '2016-08-06T23:55:36.872Z',
                updated_at: '2016-08-06T23:55:36.872Z'
            }];

            td.when(Books.findAll({})).thenResolve(expectedResponse);
            const booksControler = new booksController(Books);
            return booksControler.getAll()
                .then(response => expect(response.data).to.be.eql(expectedResponse));

        });
    });
});

describe('Controller: books', () => {
    describe('GetAll books: getByID()', () => {
        it('should return a books', () => {
            const Books = {
                findOne: td.function()
            };
            const expectedResponse = {
                id: 1,
                name: 'test book',
                created_at: '2016-08-06T23:55:36.872Z',
                updated_at: '2016-08-06T23:55:36.872Z'
            };

            td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);
            const booksControler = new booksController(Books);
            return booksControler.getByID({ id: 1 })
                .then(response => expect(response.data).to.be.eql(expectedResponse));

        });
    });
});

describe('Controller: books', () => {
    describe('Create a books: create()', () => {
        it('should create a books', () => {
            const Books = {
                create: td.function()
            };

            const requestBody = {
                name: 'Test Book'
            };

            const expectedResponse = {
                id: 1,
                name: 'test book',
                created_at: '2016-08-06T23:55:36.872Z',
                updated_at: '2016-08-06T23:55:36.872Z'
            };

            td.when(Books.create(requestBody)).thenResolve(expectedResponse);
            const booksControler = new booksController(Books);
            return booksControler.create(requestBody)
                .then(response => {
                    expect(response.statusCode).to.be.eql(201),
                        expect(response.data).to.be.eql(expectedResponse)
                });

        });
    });
});

describe('Controller: books', () => {
    describe('Update a books: update()', () => {
        it('should update a books', () => {
            const Books = {
                update: td.function()
            };

            const requestBody = {
                id: 1,
                name: 'Test Update a Book'
            };

            const expectedResponse = {
                id: 1,
                name: 'test book',
                created_at: '2016-08-06T23:55:36.872Z',
                updated_at: '2016-08-06T23:55:36.872Z'
            };

            td.when(Books.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);
            const booksControler = new booksController(Books);
            return booksControler.update(requestBody, { id: 1 })
                .then(response => {
                    expect(response.statusCode).to.be.eql(200),
                        expect(response.data).to.be.eql(expectedResponse)
                });

        });
    });
});

describe('Controller: books', () => {
    describe('Delete a books: delete()', () => {
        it('should delete an existing books', () => {
            const Books = {
                destroy: td.function()
            };

            td.when(Books.destroy({ where: { id: 1 } })).thenResolve({});
            const booksControler = new booksController(Books);
            return booksControler.delete({ id: 1 })
                .then(response => {
                    expect(response.statusCode).to.be.eql(204)
                });

        });
    });
});