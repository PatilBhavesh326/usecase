import React from 'react'
import { withRouter } from 'react-router'
import './Home.css'

const Home = ({history, match}) => {
    return(
        <div className='home'>
            <h1>Hello World!</h1>
            <div>
                <button className='button signin'
                    onClick={
                        ()=>{history.push(`${match.url}/signin`)}
                    }
                > 
                    SignIn 
                </button>
            
                <button className='button book'
                    onClick={
                        ()=>{history.push('/book')}
                    }
                > 
                    Book
                </button>
            </div>
            
        </div>
    )
}

export default withRouter(Home);