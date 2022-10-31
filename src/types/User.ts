export type User = {
	id: number;
	uid: string;
	provider: string;
	email: string;
	name: string;
	is_lawyer: boolean;
	image?: string;
	allowPasswordChange: boolean;
	created_at: Date;
	updated_at: Date;
};
