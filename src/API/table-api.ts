import axios from "axios";
import {CardsPackDataType} from "../Redux/table-reducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const tableAPI = {
    getPackInfo: (page: number, pageCount: number, min: number, max: number, sortPocks: string, packName: string = "test3") => {
        return instance.get<CardsPackDataType>(`cards/pack?page=${page}&pageCount=${pageCount}&min=${min}&max=${max}&sortPocks=${sortPocks}&packName=${packName}`);
    },
    addPack: () => {
        return instance.post('cards/pack', {cardsPack: {}})
    },
    deletePack: (id: string) => {
        return instance.delete(`cards/pack?id=${id}`)
    }

}