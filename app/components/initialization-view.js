import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import jQuery from 'jquery';

export default class InitializationViewComponent extends Component {
    formatSelectedOption = null
    @action setFormatSelection(selected) {
        this.formatSelectedOption = selected
        console.log(this.formatSelectedOption)
        this.postAs()
    }
    @action postAs(act, id, arg) {
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
