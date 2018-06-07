class GitHub {
	constructor() {
		this.client_id = '7ec686a50a51db87eca0';
		this.client_secret = '11885cebfb5f69382bbf97382c7da09411b10e63';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return {
			profile,
			repos
		}
	}
}