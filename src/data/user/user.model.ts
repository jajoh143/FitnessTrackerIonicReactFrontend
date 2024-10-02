import { IUser } from './user.types';

export const constructUser = (data: any): IUser => {
    return {
        user_id: data?.user_id,
        username: data?.username,
        email: data?.email,
        password_hash: data?.password_hash,
        created_at: data?.created_at
    }
}