function MyViewModel() {
    var self = this;

    var data = [
        {
            displayText: "test 1", childNodes: [
                { displayText: "test 1- sub" }
            ]
        },
        { displayText: "test 2" },
        { displayText: "test 3" }
    ];

    self.rootsData = ko.mapping.fromJS(data, kb.TreeNodeMapping);
    self.selectedNodeData = ko.observable(self.rootsData()[0]);

    var dataNodes = ko.observableArray([
        new kb.TreeNode("Test item 1", ko.observable([
            new kb.TreeNode("Test sub item1")
        ])),
        new kb.TreeNode("Test item 2")
    ]);

    self.rootsApi= dataNodes;
    self.selectedNodeApi = ko.observable(self.rootsApi()[0]);
}

ko.applyBindings(new MyViewModel());