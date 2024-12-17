import { Admin, Customer, Provider } from "../payload-types";
export type TokenType = {
    token: string;
};
export type Doc<CollectionType> = {
    doc: CollectionType;
};
export type DocWithToken<AuthCollectionType> = {
    doc: AuthCollectionType & TokenType;
};
export type UserOnRequest<AuthCollectionType> = {
    user: AuthCollectionType;
} & TokenType;
export type AppAuthSlugs = 'providers' | 'customers';
export type AuthCollections = Provider | Customer | Admin;
export type AuthCollectionSlugs = AppAuthSlugs | 'admins';
