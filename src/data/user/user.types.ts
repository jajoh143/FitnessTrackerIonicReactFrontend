export enum UserMutations {
    AUTHENTICATE_USER = 'mutateAuthenticateUser'
}

export interface IUser {
    user_id: number;
    username: string;
    email: string;
    password_hash: string;
    created_at: Date;
}