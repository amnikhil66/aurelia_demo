import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
	constructor(){
	}
	
	configureRouter(config,router){
		this.router = router;
		config.title = 'Demo';

		config.map([
			{route:['','login'], name: 'login' , moduleId: 'login'},
			{route:['home'], name: 'home' , moduleId: 'home'},
			{route:['adduser'], name: 'adduser' , moduleId: 'adduser'}
		]);
	}
}