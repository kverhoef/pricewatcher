module.exports = {
    findFullXpath: (root, xpathFull) => {
        const paths = xpathFull.split('/');
        let currentElement = root;
        let parent = currentElement;
        paths.forEach((path) => {
            if (path != '') {
                let split = path.split('[');
                const nodeName = split[0];
                let elementIndex = split.length > 1 ? Number.parseInt(split[1].replace(']', ''))-1 : 0;
                const foundNodes = currentElement.childNodes.filter((n) => n.tagName === nodeName);

                if (!foundNodes[elementIndex]) {
                    // start again from parent
                    const found = module.exports.findNodeDeep(parent, nodeName);
                    if (found) {
                        parent = currentElement;
                        currentElement = found;
                    }
                } else {
                    parent = currentElement;
                    currentElement = foundNodes[elementIndex];
                }
            }
        });
        return currentElement;
    },

    findFirstTextNode: (node) => {
        let found;
        const f = (searchNode) => {
            if (!found) {
                if (searchNode.nodeType === 3) {
                    found = searchNode;
                } else {
                    searchNode.childNodes.forEach((c) => f(c))
                }
            }
        };
        f(node);
        return found;
    },

    findText: (node) => {
        let foundStr = "";
        const f = (searchNode) => {
            if (searchNode.nodeType === 3) {
                if (searchNode.rawText) {
                    const stipedValue = module.exports.getValue(searchNode.rawText) || '';
                    foundStr += stipedValue ? stipedValue + '.' : '';
                }
            } else {
                searchNode.childNodes.forEach((c) => f(c))
            }
        };
        f(node);
        return module.exports.getValue(foundStr);
    },

    findNodeDeep: (node, tagName) => {
        let found;
        const f = (searchNode) => {
            if (!found) {
                if (searchNode.tagName === tagName) {
                    found = searchNode;
                } else {
                    if (searchNode.childNodes) {
                        searchNode.childNodes.filter((n) => n.nodeType !== 3).forEach((c) => f(c))
                    }
                }
            }
        };
        f(node);
        return found;
    },

    getValue: (text) => {
        const matched = text ? text.match('[+-]?([0-9]*[.|,])?[0-9]+', 'g' ) : '';
        if (matched && matched.length) {
            const matchedNumber = matched[0].replace(',', '.');
            return Number.parseFloat(matchedNumber);
        }
    }

}
