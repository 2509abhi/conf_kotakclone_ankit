import "./loginpage.css"
function Login(){
    return(
        <>
        <div className="landing-page" >
            <div className="main">
                <div className="Credentials">
                    <h1>Credential Info:</h1>
                </div>
                <div>
                <h2>Enter Username:</h2>
                <input type="text" placeholder="" />
                <h2>Email:</h2>
                <input type="email" placeholder=""/>
                <h2>Password:</h2>
                <input type="password" placeholder="" />
                </div>
                <button className="cardB">Login</button>
            </div>


        </div>
        </>
    )

}
export default Login;