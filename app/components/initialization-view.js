import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import jQuery from 'jquery';

export default class InitializationViewComponent extends Component {
    formats = ["cube"]
    gamesToWin = [1, 2, 3]
    @tracked showingDelModal = false

    @action toggleDelModal() {
        this.showingDelModal = !this.showingDelModal
    }
    
    @action postAs(act, id, arg) {
        let compThis = this
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
                if (act.rel == "delete") {
                    compThis.toggleDelModal()
                    route.transitionTo("tournaments")
                } else {
                    route.refresh()
                }
            },
        }).fail(function () { alert(r.responseText) })
    }
}
