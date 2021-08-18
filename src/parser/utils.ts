import {sha256} from 'react-native-sha256';


export function urlUtils(baseUrl: string) {
    return {
        relUrl: function (url: string) {
            if (url.startsWith(baseUrl))
                return url.replace(baseUrl, '');
            return url;
        },
        absUrl: function (url: string) {
            if (!url.startsWith(baseUrl))
                return `${baseUrl}${url}`;
            return url;
        }
    }
}

export async function generateUUID(input: string | number) {
    return sha256(input.toString());
}

