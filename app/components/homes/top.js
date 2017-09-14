'use strict';
import layout   from '../../views/layouts/application';
import template from '../../views/homes/top';

export default {
  view: layout(template),
  oninit: (vnode) => {
    console.log("init top")
  }
}

