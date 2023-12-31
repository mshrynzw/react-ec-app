import React, {useCallback, useState} from 'react'
import {createStyles, makeStyles} from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {useDispatch, useSelector} from "react-redux"
import {getIsSighedIn} from "../../reducks/users/selectors"
import logo from "../../assets/img/icons/logo.png"
import {ClosableDrawer, HeaderMenus} from "./index"
import {push} from "connected-react-router"

const useStyles = makeStyles(() =>
    createStyles({
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
    }))

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = getIsSighedIn(selector)

    const [open, setOpen] = useState(false)
    const handleDrawerToggle = useCallback((event) => {
        if (event.type === 'keydown' && (event.type === 'Tab' || event.type === 'Shift')) {
            return
        }
        setOpen(!open)
    }, [setOpen, open])

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
                            <HeaderMenus handleDrawerToggle={handleDrawerToggle}/>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <ClosableDrawer
                open={open}
                onClose={handleDrawerToggle}
            />
        </div>
    )
}

export default Header
