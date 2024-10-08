import { prisma } from '@/lib/prisma';
import type { Prisma, User } from '@prisma/client';
import type { UserRepository } from '../users-repository';

export class PrismaUserRepository implements UserRepository {
	async findByEmail(email: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	}
	async findById(id: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});
		return user;
	}
	async create(data: Prisma.UserCreateInput): Promise<User> {
		const user = await prisma.user.create({
			data,
		});
		return user;
	}
}
