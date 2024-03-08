import axios from "axios"
import { MusicResponseTypes } from "../types/music.types"

const BASE_URL = 'https://itunes.apple.com/search'

export type Params = {
    limit: number
    term: string
}

export const searchMusic = (params: Partial<Params>): Promise<{ resultCount: number, results: MusicResponseTypes[] }> => axios.get(BASE_URL, { params }).then(res => res.data)