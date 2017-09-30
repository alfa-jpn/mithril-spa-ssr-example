'use strict';
import m from 'mithril';
import { getTitle } from '../../helpers/layouts_helper'

export default function(template) {
  return function(vnode) {
    if (process.browser) {
      document.title = getTitle(vnode);
      return template(vnode);
    } else {
      return (

<html lang="ja">
  <head>
    <title>{ getTitle(vnode) }</title>
  </head>
  <body>
    { template(vnode) }
    <script src='/assets/javascripts/bundle.js'></script>
    <script>
      requestAnimationFrame(function(){'{'}
        var l = document.createElement('link');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', '/assets/stylesheets/bundle.css');
        document.head.appendChild(l);
      {'}'});
    </script>
  </body>
</html>

); }}}
