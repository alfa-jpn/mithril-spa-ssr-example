export function getTitle(vnode) {
  if (vnode.state.getTitle) {
    return vnode.state.getTitle();
  }
  return 'Mithril SPA + SSR';
}

