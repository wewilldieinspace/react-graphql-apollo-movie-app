import * as React from 'react'


export const useLocalStorage = (storageName: string) => {
    const [value, changeValue] = React.useState(
        localStorage.getItem(storageName) || ''
    )

    React.useEffect(() => {
        localStorage.setItem(storageName, value)
    }, [value])

    return { value, changeValue }
}