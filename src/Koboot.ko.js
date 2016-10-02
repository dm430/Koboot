'use strict';

let treeView = require('./tree-view/tree-view.ko');

function register(component) {
  let reg = component.registration;
  ko.components.register(reg.name, reg.data);
}

// Koboot components.
register(treeView);

// Koboot namespace.
window.kb = {
  treeView
};
