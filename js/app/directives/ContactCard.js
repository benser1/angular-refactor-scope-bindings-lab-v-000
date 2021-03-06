function ContactCard() {
	return {
		scope: {

		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contact.name }}',
				'<label>Email:</label>',
				'{{ contact.email }}',
				'<label>Phone:</label>',
				'{{ contact.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ contact.username | lowercase }}</span>',
			'</div>'
		].join(''),
		controller: 'ContactController',
		controllerAs: 'contact',
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);