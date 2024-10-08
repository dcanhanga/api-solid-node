import fastify from 'fastify';

import { ZodError } from 'zod';

import { env } from './env/config';
import { appRoutes } from './http/routes';

export const app = fastify();
app.register(appRoutes);
app.setErrorHandler((error, _request, reply) => {
	if (error instanceof ZodError) {
		reply.status(400).send({
			message: 'Validations error',
			issues: error.format(),
		});
	}
	if (env.NODE_ENV !== 'production') {
		console.error(error);
	}
});
