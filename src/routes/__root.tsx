import {Link, Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => {
        return <p>Not Found (on root route)</p>
    },
})

function RootComponent() {
    return (
        <>
            <div className="p-2 flex gap-2 text-lg">
                <Link
                    to="/"
                    activeProps={{
                        className: 'font-bold',
                    }}
                    activeOptions={{exact: true}}
                >
                    Home
                </Link>{' '}
                <Link
                    to={'/about'}
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    About Page
                </Link>
            </div>
            <hr/>
            <Outlet/>
            {/* Start rendering router matches */}
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    )
}
