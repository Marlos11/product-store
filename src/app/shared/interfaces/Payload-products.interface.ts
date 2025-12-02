import { Product } from "./Products.interface";

export type ProductPayload = Omit<Product, 'id'>