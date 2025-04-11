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
                        <li><a href="">Home</a></li>
                        <li><a href="">Banking</a></li>
                        <li><a href="">Loan</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="">Privy league</a></li>
                        <li><a href="">NRI Service</a></li>
                        <li><a href="">Investor</a></li>
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