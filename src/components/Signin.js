import React from 'react'


const Signin = ({history, match}) => {
    return(
        <div className='signinpage'>
            <button className='button signin'
                onClick={
                        ()=>{history.push("/home")}
                    }
            >
                SignOut
            </button>
        </div>
    )
}

export default Signin;