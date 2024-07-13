export class NullProductObjectError extends Error {
    constructor() {
        super("Argument 'productObj' is required");
        this.name = 'NullProductObjectError';
    }
}

export class NullNameCreateProductError extends Error {
    constructor() {
        super("BodyParam 'name' is required");
        this.name = 'NullNameCreateProductError';
    }
}

export class NullProductIdError extends Error {
    constructor() {
        super("RequestParam 'id' is required");
        this.name = 'NullProductIdError';
    }
}

export class ProductNotFoundError extends Error {
    constructor() {
        super("No product was found with this id");
        this.name = 'ProductNotFoundError';
    }
}