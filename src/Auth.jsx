import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getIsSighedIn} from "./reducks/users/selectors"
import {listenAuthState} from "./reducks/users/operations"

const Auth = ({children}) => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = getIsSighedIn(selector)

    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, [])

    if (!isSignedIn) {
        return <></>
    } else {
        return children
    }
}

export default Auth
