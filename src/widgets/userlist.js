import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class UserList{
    constructor(http){
    	this.users = [];
    	this.url = "src/user.json";
        this.http = http;
    }

    activate() {
    	return this.http.get(this.url).then(r =>{
    		if(!!!window.localStorage.getItem('users')){
	        	this.users = JSON.parse(r.response);
	        	window.localStorage.setItem('users', JSON.stringify(this.users));
    		} else {
    			this.users = JSON.parse(window.localStorage.getItem('users'));
    		}
        });
    }
}