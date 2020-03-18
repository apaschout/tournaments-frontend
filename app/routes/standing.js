import Route from '@ember/routing/route';

export default class StandingRoute extends Route {
    async model(params) {
        let res = await fetch(`http://127.0.0.1:8080/api/tournaments/${params.id}`)
        let parsed = await res.json()
        console.log(parsed)
        return parsed
    }
}
