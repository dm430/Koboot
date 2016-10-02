'use strict';

let utils = require('./utils');
let debug = require('debug')('Koboot:TreeView');

function createTreeNode(data, children) {
  debug(`createTreeNode called; data: ${utils.inspect(data)}, children: ${utils.inspect(children)}`);
  let node = {
    childNodes: children || ko.observableArray(),
    isExpanded: ko.observable(false),
    canExpand: function() {
      return ko.computed(() => this.childNodes().length > 0);
    },
    toggle: function() {
      this.isExpanded(!this.isExpanded());
    }
  };

  if(data instanceof Object) {
    debug('data is instanceof Object, mapping from js');
    ko.mapping.fromJS(data, kb.treeView.childNodeMapping, node);
  }
  else node.displayText = data;
  debug(`constructed node: ${utils.inspect(node)}`);
  return node;
};

function createTreeViewModel(params) {
  debug(`createTreeViewModel called; params: ${utils.inspect(params)}`);
  return {
    treeRoots: params.treeRoots,
    selectedNode: params.selected
  };
}

let rootNodeMapping = {
  create: function(args) {
    debug(`rootNodeMapping create called; args: ${utils.inspect(args)}`);
    return createTreeNode(args.data);
  }
};

let childNodeMapping = {
  childNodes: {
    create: function(args) {
      debug(`childNodeMapping create called; args: ${utils.inspect(args)}`);
      return createTreeNode(args.data);
    }
  }
};

let registration = {
  name: 'tree-view',
  data: {
    viewModel: createTreeViewModel,
    template: require('./tree-view.tmpl.html')
  }
};

module.exports = {
  registration,
  createTreeNode,
  rootNodeMapping,
  childNodeMapping
};
