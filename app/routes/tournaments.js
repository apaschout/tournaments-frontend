import Route from '@ember/routing/route';

export default class TournamentsRoute extends Route {
    async model() {
        let res = await fetch("http://127.0.0.1:8080/api/tournaments/")
        let parsed = await res.json()
        console.log(parsed)
        return parsed
    }
}
