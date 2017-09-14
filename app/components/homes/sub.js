'use strict';
import layout   from '../../views/layouts/application';
import template from '../../views/homes/sub';

export default {
  view: layout(template),
  oninit: (vnode) => {
    console.log("init sub");
    vnode.state.getTitle = (() => "Sub page");
  }
}

