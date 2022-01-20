import axios from "axios";
import {CardsPackDataType} from "../Redux/table-reducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
});

export const tableAPI = {
    getPackInfo: (minValue: number) => {
        return instance.get<CardsPackDataType>(`cards/pack?min=${minValue}`);
    },

}