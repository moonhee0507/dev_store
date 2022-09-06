export function numberFormatter(e) {
    e.target.value = comma(uncomma(e.target.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
}
