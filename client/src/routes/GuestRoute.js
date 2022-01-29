import React from "react"
import { Route } from "react-router-dom"
import Main from "../layouts/guests/Main";

function GuestRoute({...rest}) {
    return (
        <Route {...rest} render={(props) => <Main {...props} />  } />
    )
}

export default GuestRoute;

