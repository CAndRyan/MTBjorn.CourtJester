const getDomFromString = (html) => {
    var parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
}

const getFromUrl = async (url, responseType) => new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
        } else {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        }
    };
    xhr.open('GET', url);
    xhr.responseType = responseType;
    xhr.send();
});

export const getDomFromUrl = async (url) => {
    const html = await getFromUrl(url, 'document');
    return getDomFromString(html);
};

export const getDomFromUrl_Old = async (url) => {
    const response = await fetch(url);
    const html = await response.text();

    return getDomFromString(html);
}
