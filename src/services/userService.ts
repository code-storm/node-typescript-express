import { IUser, User } from '../models';

export class UserService {
    async createUser(data: Partial<IUser>): Promise<IUser> {
        const user = new User(data);
        return await user.save();
    }

    async getUser(id: string): Promise<IUser | null> {
        return await User.findById(id).exec();
    }

    async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id).exec();
    }
}
