import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.getUser(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.deleteUser(req.params.id);
            if (user) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
