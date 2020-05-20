import { helper } from "@ember/component/helper";
import jQuery from 'jquery';

async function fetchPlayers() {
    let res = await fetch(`http://127.0.0.1:8080/api/players/`)
        let parsed = await res.json()
        console.log(parsed)
        return parsed
}

export default helper(fetchPlayers);