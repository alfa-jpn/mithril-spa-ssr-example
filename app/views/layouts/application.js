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
  </body>
</html>

); }}}

