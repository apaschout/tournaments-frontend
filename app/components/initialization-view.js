import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import jQuery from 'jquery';

export default class InitializationViewComponent extends Component {
    formats = ["cube"]
    gamesToWin = [1, 2, 3]
    
    @action postAs(act, id, arg) {
        console.log(arg)
        let data = { "@action": act.rel }
        if (act.rel == "change-name" || act.rel == "change-gamestowin" || act.rel == "change-format") {
            data[act.parameters[0].name] = arg
        }
        let route = getOwner(this).lookup('route:tournament')
        console.log(data)
        let r = jQuery.ajax({
            method: "POST",
            url: `http://127.0.0.1:8080/api/tournaments/${id}`,
            data: data,
            success: function () {
                route.refresh()
            },
        }).fail(function () { alert(r.responseText) })
    }
}
