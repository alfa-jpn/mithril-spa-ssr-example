'use strict';
import domready from 'domready';
import m        from 'mithril';
import routes   from '../config/routes';

m.route.prefix('');

domready(function(){
  m.route(document.body, '/', routes);
});
