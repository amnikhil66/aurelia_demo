import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
import sortable from 'sortable';

@inject(EventAggregator, Router)
export class AddUser {
 constructor(eventAggregator, router){
 		this.name = null;
 		this.username = null;
 		this.email = null;
        this.eventAggregator = eventAggregator;
        this.router = router;
    }

    add(){
        let users = JSON.parse(window.localStorage.getItem('users'));
        users.push({
        	name: this.name,
        	username: this.username,
        	email: this.email
        });

        window.localStorage.setItem('users', JSON.stringify(users));

        this.router.navigate("home");
    }
}