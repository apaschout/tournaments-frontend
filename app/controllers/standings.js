import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class StandingsController extends Controller {
    @action changeRoute(id) {
        this.transitionToRoute('standing', id)
    }
}
