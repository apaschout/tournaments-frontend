import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class StandingController extends Controller {
    @tracked index = 1

    @action incrementIndex() {
        this.index = this.index + 1
        console.log(this.index)
    }
}
