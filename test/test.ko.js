'use strict';

let data = [
  {
    displayText: 'Test A item 1',
    childNodes: [{ displayText: 'Test B item 1 child' }]
  },
  { displayText: 'test A item 2' }
];

let dataNodes = ko.observableArray([
  kb.treeView.createTreeNode('Test B item 1', ko.observable(
    [ kb.treeView.createTreeNode('Test B item 1 child') ]
  )),
  kb.treeView.createTreeNode('Test B item 2')
]);

let viewModel = {
  rootsData: ko.mapping.fromJS(data, kb.treeView.rootNodeMapping),
  selectedNodeData: function() {
    return () => ko.observable(this.rootsData()[0]);
  },
  rootsApi: dataNodes,
  selectedNodeApi: function() {
    return () => ko.observable(this.rootsApi()[0]);
  }
};

ko.applyBindings(viewModel);
