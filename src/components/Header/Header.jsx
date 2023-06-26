import React, {useCallback, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {useDispatch, useSelector} from "react-redux"
import {getIsSighedIn} from "../../reducks/users/selectors"
import logo from "../../assets/img/icons/logo.png"
import {HeaderMenus} from "./index"
import {push} from "connected-react-router"

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    menuBar: {
        backgroundColor: "#fff",
        color: '#444'
    },
    toolbar: {
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    },
    iconButtons: {
        margin: '0 0 0 auto'
    }
})

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = getIsSighedIn(selector)

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                    <img
                        src={logo} alt="Torahcak Logo" width="128px"
                        onClick={() => dispatch(push('/'))}
                    />
                    {isSignedIn && (
                        <div className={classes.iconButtons}>
                            <HeaderMenus/>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
