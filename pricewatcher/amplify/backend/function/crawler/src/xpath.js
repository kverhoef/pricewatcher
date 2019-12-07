module.exports = {
    findFullXpath: (root, xpathFull) => {
        const paths = xpathFull.split('/');
        let currentElement = root;
        paths.forEach((path) => {
            if (path != '') {
                let split = path.split('[');
                const nodeName = split[0];
                let elementIndex = split.length > 1 ? Number.parseInt(split[1].replace(']', ''))-1 : 0;
                const foundNodes = currentElement.childNodes.filter((n) => n.tagName === nodeName);
                currentElement = foundNodes[elementIndex];
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
                    node.childNodes.forEach((c) => f(c))
                }
            }
        };
        f(node);
        return found;
    },

    getValue: (node) => {
        const matchedNumber = node.rawText.match('[+-]?([0-9]*[.])?[0-9]+')[0];
        return Number.parseFloat(matchedNumber);
    }

}
