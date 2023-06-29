import React from 'react'
import {Switch, Route} from 'react-router'
import {CartList, OrderConfirm, ProductDetail, ProductEdit, ProductList, Reset, SignIn, SignUp} from './templates'
import Auth from "./Auth"
import OrderHistory from "./templates/OrderHistory"

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/signup"} component={SignUp}/>
            <Route exact path={"/signin"} component={SignIn}/>
            <Route exact path={"/signin/reset"} component={Reset}/>

            <Auth>
                <Route exact path={"(/)?"} component={ProductList}/>
                <Route exact path={"/product/:id"} component={ProductDetail}/>
                <Route path={"/product/edit(/:id)?"} component={ProductEdit}/>

                <Route exact path={"/cart"} component={CartList}/>
                <Route exact path={"/order/confirm"} component={OrderConfirm}/>
                <Route exact path={"/order/history"} component={OrderHistory}/>
            </Auth>
        </Switch>
    )
}

export default Router
