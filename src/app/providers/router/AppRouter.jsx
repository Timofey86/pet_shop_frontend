import {Suspense, useCallback} from "react";
import {Route, Routes} from "react-router-dom";
import PageLoader from "../../../shared/ui/PageLoader/PageLoader.jsx";
import {routeConfig} from "../../../shared/config/router/routerConfig.jsx";

const AppRouter = () => {
    const renderWithWrapper = useCallback(route => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )
        return (
            <Route
                path={route.path}
                key={route.path}
                element={element}
            />
        )
    }, [])
    return (
        <Routes>
            {
                Object.values(routeConfig).map(renderWithWrapper)
            }
        </Routes>
    )
}

export default AppRouter