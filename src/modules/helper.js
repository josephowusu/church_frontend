import axios from "axios"
import { api_url } from "./credentials"
import { io } from 'socket.io-client'
// import file from './config.json'


export const storeData = (key, data) => {
    window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify({
        dataType: typeof data,
        dataValue: data
    }))
}

export const getFormattedDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function generateUUID() {
    const hexDigits = '0123456789abcdef';
    let uuid = '';
    for (let i = 0; i < 36; i++) {
      if (i === 8 || i === 13 || i === 18 || i === 23) {
        uuid += '-';
      } else if (i === 14) {
        uuid += '4';
      } else if (i === 19) {
        uuid += hexDigits.substr(Math.floor(Math.random() * 4), 1) + '8';
      } else {
        uuid += hexDigits.substr(Math.floor(Math.random() * 16), 1);
      }
    }
    return uuid;
}

export const generateIdentifier = () => {
    return generateUUID()
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

export const SocketIO = io(api_url)