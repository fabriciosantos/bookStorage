const deafultResponse = (data, statusCode = 200) => ({
    data,
    statusCode
});

const errosResponse = (messge, statusCode = 400) => deafultResponse({
    error: message
}, statusCode);

class BooksController {
    constructor(Books) {
        this.Books = Books;
    }
    getAll() {
        return this.Books.findAll({})
            .then(result => deafultResponse(result))
            .catch(err => errosResponse(error.message));
    }
    getByID(params) {
        return this.Books.findOne({ where: params })
            .then(result => deafultResponse(result))
            .catch(err => errosResponse(error.message));

    }
    create(data) {
        return this.Books.create(data)
            .then(result => deafultResponse(result, 201))
            .catch(err => errosResponse(error.message, 422));

    }
    update(data, params) {
        return this.Books.update(data, { where: params })
            .then(result => deafultResponse(result, 200))
            .catch(err => errosResponse(error.message, 422));

    }
    delete(params) {
        return this.Books.destroy({ where: params })
            .then(result => deafultResponse(result, 204))
            .catch(err => errosResponse(error.message, 422));

    }
}

export default BooksController;