import Route from '@ember/routing/route';
import jQuery from 'jquery';
import { action } from '@ember/object';

export default class PlayersRoute extends Route {
    async model() {
        let res = await fetch("http://127.0.0.1:8080/api/players/")
        let parsed = await res.json()
        console.log(parsed)
        return parsed
    }
}
