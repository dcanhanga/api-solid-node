import type { AccountRole } from '../entities/account-role';

interface RoleRepository {
	findByName(
		roleName: RoleRepository.RoleName,
	): Promise<RoleRepository.FindByNameResponse>;
	findById(roleId: string): Promise<AccountRole | null>;
	addRole(name: AccountRole['name']): Promise<RoleRepository.AddRoleResponse>;
}

namespace RoleRepository {
	type ResponsePossibleNull = AccountRole | null;
	export type RoleName = AddRoleResponse['name'];
	export type FindByNameResponse = ResponsePossibleNull;
	export type FindByIdResponse = ResponsePossibleNull;
	export type AddRoleResponse = {
		id: string;
		name: string;
	};
}

export { RoleRepository };
