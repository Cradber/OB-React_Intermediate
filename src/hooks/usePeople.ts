import {useFetch} from "./useFetch";

export const usePeople = (size: number = 1) => {
    return useFetch(`https://random-data-api.com/api/users/random_user?size=${size}`);
}
