import './footer.css'

const Footer = () => {

    const date = new Date();
    const currentYear = date.getFullYear()
    
    return (
        <>
            <footer class="footer">
                <p class="footer-text">Copyright {currentYear} Argent Bank</p>
            </footer>
        </>
    )
}

export default Footer