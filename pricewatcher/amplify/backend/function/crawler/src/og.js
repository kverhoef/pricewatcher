module.exports = {
    getOpenGraphData: (html) => {
        const matchOpenGraph = (html, property) => {
            const split = html.split(new RegExp('property="' + property + '".*content="(.*)"', 'g'), 2);
            if (split.length > 1) {
                const a = split[1].split('"', 2);
                return a[0];
            }
        };
        return {
            image: matchOpenGraph(html, "og:image"),
            // siteName: matchOpenGraph(html, "og:site_name"),
            // title: matchOpenGraph(html, "og:title"),
            // url: matchOpenGraph(html, "og:url"),
        }
    }
}
