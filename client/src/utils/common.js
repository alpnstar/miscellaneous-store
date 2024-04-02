export const arraySum = (arr) => arr.reduce((acc, i) => acc + i, 0)
export const buildUrl = (url, params) => {
    let urlWithParams = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? "?" : "&";
        urlWithParams += `${sign}${key}=${value}`;
    });

    return urlWithParams;
};