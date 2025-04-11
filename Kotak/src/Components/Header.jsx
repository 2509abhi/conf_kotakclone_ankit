import "./header.css"
function Header(){
    return(
        <>
        <div className="Header">
            <div className="first-half">
                <div className="logo">
                    <img src="https://www.kotak.com/content/dam/Kotak/kotak-logo.png" alt="" />
                </div>
                <div className="nav-link">
                    <ul>
                        <li>Home</li>
                        <li>Banking</li>
                        <li>Loan</li>
                        <li>Account</li>
                        <li>Privy league</li>
                        <li>NRI Service</li>
                        <li>Investor</li>
                    </ul>

                </div>

            </div>
            <div className="second-half">
                <div className="search">
                        <img src="https://www.kotak.com/content/dam/Kotak/svg-icons/navigation/search-web.svg" alt="" />
                </div>
                <div className="log-in">
                    <button > <img src="https://www.kotak.com/content/dam/Kotak/svg-icons/navigation/login-web.svg" alt="" /> Login</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;