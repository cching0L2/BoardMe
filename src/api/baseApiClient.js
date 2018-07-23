import * as config from 'BoardMe/config';

export const apiRequest = async (path, method, request) => {
    return new Promise((resolve, reject) => {
        fetch(config.BASE_URL + "/" + path, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.error) reject(responseJson)
            else resolve(responseJson)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })
}