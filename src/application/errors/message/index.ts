const messages = {
	INVALID_INPUT_PARAMETERS: 'INVALID_INPUT_PARAMETERS',
	THE_ROLE_ALREADY_EXISTS: 'THE_ROLE_ALREADY_EXISTS',
	ROLE_MUST_BE_MANAGER_ADMIN_OR_USER: 'ROLE_MUST_BE_MANAGER_ADMIN_OR_USER',
	INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
	UNRECOGNIZED_FIELD: 'UNRECOGNIZED_FIELD',
} as const;
export { messages };

export function formatExpectedTypeMismatch(
	expected: string,
	received: string,
): string {
	return `EXPECTED_${expected.toUpperCase()}_RECEIVED_${received.toUpperCase()}`;
}
