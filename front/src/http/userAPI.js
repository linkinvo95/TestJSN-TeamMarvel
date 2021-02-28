import {$host} from './index'

export const createUser = async (user) => {
    const {data} = await $host.post('api/user', user)
    return data
}

export const fetchUsers = async () => {
    const {data} = await $host.get('api/user')
    return data
}

export const fetchOneUser = async (id) => {
    const {data} = await $host.get('api/user/' + id)
    return data
}