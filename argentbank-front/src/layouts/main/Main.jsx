import { Outlet } from 'react-router'
import './main.css'

const Main = () => {

    const isDark = true
    
    return (
        <main className={isDark ? 'bg-dark' : ''}>
            <Outlet />
        </main>
    )
}

export default Main