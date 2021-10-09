import React from 'react'
import { connect } from 'react-redux';
import { generateBookInfoAction } from '../redux/actions/bookAction';

class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    generateBookInfo(){
        this.props.generateBookInfoDispatch();
    }

    render() {

        return(
            <div className='bookpage'>
                <button className='button book'
                    onClick = {
                        ()=>{this.generateBookInfo()}
                    }
                >
                    Add Book
                </button>
                    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps )=>{
    return{
        generateBookInfoDispatch: () => {
            dispatch(generateBookInfoAction)
        }
    }
}

export default connect(null,mapDispatchToProps)(Book);