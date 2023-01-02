class SearchDescription {
    constructor() {
        this.h3 = document.createElement("h3");
    }

    render() {
        this.h3.setAttribute("class", "search-title3");

        const span = document.createElement("span");
        span.setAttribute("class", "search-keyword");

        let keywordFromURL = window.location.pathname.replace(
            /^\/search\/keyword=/g,
            ""
        );
        let decodedKeyword = decodeURIComponent(keywordFromURL);
        span.innerText = "'" + decodedKeyword + "'";

        const restSentence = "에 대한 검색 결과입니다.";

        this.h3.append(span, restSentence);

        return this.h3;
    }
}

export default SearchDescription;
