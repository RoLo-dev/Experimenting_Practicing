import { useReducer } from 'react'

function reducer(state, action ) {}

export default function fetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    return {
        jobs: [],
        loading: false,
        error: false
    }
}