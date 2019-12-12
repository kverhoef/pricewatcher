module.exports = {
    getOpenGraphData: (html) => {
        const matchOpenGraph = (html, property) => {
            const tag = html.match(new RegExp('<meta.*property="' + property + '".*content="(.*)".*\/>', 'g'));
            if (tag && tag.length) {
                const match = tag[0].match(/content="(.*)"/);
                if (match.length > 0){
                    return match[1];
                }
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
