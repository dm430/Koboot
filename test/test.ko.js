function MyViewModel() {
    var self = this;

    var data = [
        {
            displayText: "test 1", childNodes: [
                { displayText: "test 1- sub", childNodes:[] }
            ]
        },
        { displayText: "test 2", childNodes: [] },
        { displayText: "test 3", childNodes: [] }
    ];

    self.testRoots = ko.mapping.fromJS(data, kb.TreeNodeMapping);
    self.testSelectedNode = ko.observable(self.testRoots()[0]);
}

ko.applyBindings(new MyViewModel());