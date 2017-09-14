'use strict'
import m from 'mithril';

export default function() {
  return (

<main>
  <h1>Hello Mithril SPA + SSR!!</h1>
  <a href='/sub' oncreate={ m.route.link }>sub</a>
</main>

)}

