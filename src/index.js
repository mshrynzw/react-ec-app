import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import createStore from "./reducks/store/store"
import {ConnectedRouter} from "connected-react-router"
import * as History from "history"
import {MuiThemeProvider} from "@material-ui/core"
import {theme} from "./assets/theme"
import App from './App'
import reportWebVitals from './reportWebVitals'

const history = History.createBrowserHistory()
export const store = createStore(history)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
