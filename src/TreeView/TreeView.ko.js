kb.TreeNodeMapping = {
  create: function (args) {
    return new kb.TreeNode(args.data);
  }
};

var childMapping = {
  childNodes: {
    create: function (args) {
      return new kb.TreeNode(args.data);
    }
  }
};

function TreeViewModel(params) {
  var self = this;

  self.treeRoots = params.treeRoots;
  self.selectedNode = params.selected;
}

kb.TreeNode = function (data, children) {
  var self = this;

  self.childNodes = children || ko.observableArray();

  self.isExpanded = ko.observable(false);

  self.canExpand = ko.computed(function () {
    return self.childNodes().length > 0;
  });

  self.toggle = function () {
    self.isExpanded(!self.isExpanded());
  }
  
  if (data instanceof Object) {
    ko.mapping.fromJS(data, childMapping, self);
  } else {
    self.displayText = data;
  }
}

module.exports = {
  viewModel: TreeViewModel,
  template: require('./TreeViewTemplate.html')
};
