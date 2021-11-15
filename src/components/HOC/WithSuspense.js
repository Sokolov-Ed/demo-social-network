import React from "react";
import { Suspense } from "react";
import Preloader from "../Common/Preloader/Preloader";

export const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense {...props} fallback={<Preloader />}>
            <Component {...props}/>
        </Suspense>
    }
}