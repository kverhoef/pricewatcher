module.exports = {
    getOpenGraphData: (html) => {

        const split = (text, separator, returnLeft) => {
            if (!text) {
                return;
            }
            const split = text.split(separator, 2);
            if (split.length < 2) {
                return;
            }
            return returnLeft ? split[0] : split[1];
        };

        const matchOpenGraph = (html, property) => {
            const a = split(html, 'property="' + property + '"', false);
            const b = split(a, 'content="', false);
            return split(b, '"', true);
        };
        return {
            image: matchOpenGraph(html, "og:image"),
            // siteName: matchOpenGraph(html, "og:site_name"),
            // title: matchOpenGraph(html, "og:title"),
            // url: matchOpenGraph(html, "og:url"),
        }
    }
}
