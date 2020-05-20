import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import jQuery from 'jquery';

export default class PlayerRegComponent extends Component {
    @action addPlayer(pID) {
        let route = getOwner(this).lookup("route:tournament")
        let tID = window.location.href.split("http://127.0.0.1:4200/tournaments/").join("")
        let data = {
            "@action": "register-player",
            "pid": pID
        }
        let r = jQuery.ajax({
            method: "POST",
            url: `http://127.0.0.1:8080/api/tournaments/${tID}`,
            data: data,
            success: function() {
                route.refresh()
            }
        }).fail(function () { alert(r.responseText) })
    }
}
