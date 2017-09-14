'use strict'
import m from 'mithril';

export default function() {
  return (

<main>
  <h1>This is sub page!!!</h1>
  <a href='/' oncreate={ m.route.link }>sub</a>
</main>

)}

