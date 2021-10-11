import Meta from '../Meta/Meta'
import NavBar from "../Components/NavBar/NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Meta />
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout