import axios from "axios"
import { api_url } from "./credentials"
// import file from './config.json'


export const storeData = (key, data) => {
    window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify({
        dataType: typeof data,
        dataValue: data
    }))
}


export const fetchData = (key) => {
    let result = window.localStorage.getItem(key)
    if (result) {
        result = JSON.parse(result)
        return result.dataValue
    }
    
    return null
}
export const APIClient = axios.create({
    baseURL: api_url,
    headers: {
        Accept: 'application/json'
    }
})

export const deleteData = (key) => {
    window.localStorage.removeItem(key)
}

export const camelize = (str) => {
    const text = str.replace(/[-_\s.]+(.)?/g, (_, c) =>
        c ? c.toUpperCase() : ''
    )
    return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`
}

export const clearStorage = () => {
    window.localStorage.clear()
}

export function formatCurrency(amount, locale = 'en-US') {
    return new Intl.NumberFormat(locale, { minimumFractionDigits: 2 }).format(amount);
}