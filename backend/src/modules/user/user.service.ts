import { UserRepository } from "./user.repository";

export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async testServiceMethod() {
		console.log("INSIDE SERVICE LAYER");
		await this.userRepository.testRepoMethod();
		console.log("INSIDE SERVICE LAYER");
	}
}
