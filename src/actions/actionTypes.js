export const GET_ALL = 'GET_ALL';

export function catchAll(data) {
    return {
        type: GET_ALL,
        data
    };
}