export class NullProductObjectError extends Error {
    constructor() {
        super("Argument 'productObj' is required");
        this.name = 'NullProductObjectError';
    }
}

export class NullNameCreateProductError extends Error {
    constructor() {
        super("Argument 'name' is required");
        this.name = 'NullNameCreateProductError';
    }
}