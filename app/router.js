import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('players');
  this.route('player', {path: 'players/:id'});
  this.route('standings');
  this.route('tournaments');
  this.route('tournament', {path: 'tournaments/:id'})
  this.route('decks');
});
