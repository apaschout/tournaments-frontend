import Controller from '@ember/controller';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import jQuery from 'jquery';

export default class TournamentsController extends Controller {
    @action postCreate() {
        let data = { "@action": "create" }
        let route = getOwner(this).lookup('route:tournaments')
        let r = jQuery.ajax({
            method: "POST",
            url: "http://127.0.0.1:8080/api/tournaments/",
            data: data,
            success: function () {
                route.refresh()
            },
        })
    }
}
