//* utility types

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;  // optional property
};

// Pick — takes only selected properties from another type (Pick<Type, Keys>)
type ProductSummary = Pick<Product, "id" | "name" | "price">;

// Omit — removes specific properties from another type (Omit<Type, Keys>)
type ProductWithoutStock = Omit<Product, "stock" | "color">;

// Required — makes all properties mandatory (no optional ones)
type ProductWithColor = Required<Product>;


const product: ProductWithColor = {
    id: 123,
    name: 'Mouse',
    price: 500,
    stock: 100,
    color: 'black',  // must include color now
}

// Partial — makes all properties optional
type OptionalProduct = Partial<Product>;

// Readonly — makes all properties read-only (cannot be changed)
type ProductReadonly = Readonly<Product>;


const product1 = {
    id: 123,
    name: 'Mouse',
    price: 500,
}

// Record — creates an object type with specific key & value types
const emptyObj: Record<string, unknown> = {};