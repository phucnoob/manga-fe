const API_URL = "http://localhost:8080/api/v1";

export function getUrl(path: string, params: {[key: string]: string} = {}): string {
    if (Object.keys(params).length <= 0) {
        return `${API_URL}${path}`;
    }

    let paramsStr = "?";
    for (let [key, value] of Object.entries(params)) {
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);
        paramsStr = paramsStr + encodeURIComponent(`${key}=${value}`)
                    + "&";
    }
    paramsStr = paramsStr.slice(0, -1);
    return `${API_URL}${path}${paramsStr}`;
}