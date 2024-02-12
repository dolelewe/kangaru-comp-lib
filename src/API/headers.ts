
export const kangaruHeader=(apiKey:string)=>{
    return {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
}
