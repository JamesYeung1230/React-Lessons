import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

/**
 * 自定义 hook
 * 封装通用功能
 * 开发和使用第三方 hooks
 * 自定义 hook 带来了无限的拓展性，解耦代码
 */

function useAxiosDemo(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then(res => setData(res))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [url])

    return [loading, data, error]
}

export default useAxiosDemo

function Demo() {
    const [loading, data, error] = useAxiosDemo('www.baidu.com')
    if (loading) {
        return <div>Loading...</div>
    }
    return error ? (
        <div>{JSON.stringify(error)}</div>
    ) : (
        <div>{JSON.stringify(data)}</div>
    )
}


