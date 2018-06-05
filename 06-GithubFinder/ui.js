class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}
	showProfile(user) {
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img class="img-fluid mb-2" src="${user.avatar_url}">
					</div>
					<div class="col-md-9">
						
					</div>
				</div>
			</div>
		`;
	}
}