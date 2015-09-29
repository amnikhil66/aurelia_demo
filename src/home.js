export class Home {
	constructor(){
	}

	//View Model Lifecycle Methods
	canActivate() {
		// Implement this hook if you want to control whether or not your view-model can be navigated to.
	}
	
	activate() {
		// Implement this hook if you want to perform custom logic just before your view-model is displayed.
	}

	canDeactivate() {
		//  Implement this hook if you want to control whether or not the router can navigate away from your view-model when moving to a new route.
	}

	deactivate() {
		// Implement this hook if you want to perform custom logic when your view-model is being navigated away from.
	}


	//View Lifecycle Methods
	created() {
		// Called when view and view model are created
	}

	bind() {
		// Called when the Databinding Engine binds to the view
	}

	unbind() {
		// Called when the Databinding Engine unbinds from the view
	}

	attached() {
		// Called when the view is attached to the DOM
	}

	detached() {
		// Called when the view is deattached from the DOM
	}
}