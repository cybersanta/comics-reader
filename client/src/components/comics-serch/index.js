import React from 'react';
import { connect } from 'react-redux'
import { getComicsList } from '../../actions'

import Spinner from '../spinner'
import ComicsList from './comics-list/comics-list'

import './comics-search.css'

class ComicsSearch extends React.Component {
    state = {
        comicsName: ''
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault()
        this.props.getComicsList('/api/comics-list/' + this.state.comicsName)
    }
   
    render() {
        const { isLoading, comicsList } = this.props.comicBooks
        // console.log(comicsList[0])
        return(
            <React.Fragment>
                <div className="comics-search">
                    <div className="container">
                        {/* <div> */}
                            <div className="search-center">
                                <form onSubmit={this.onSubmit}>
                                    <input value={this.state.value}
                                        placeholder="What you wanna search"
                                        type="comicsName"
                                        name="comicsName"
                                        className="comics-name"
                                        onChange={this.onChange}
                                        required 
                                    />
                                </form>
                            </div>
                                {isLoading && <Spinner />}
                                {!isLoading && comicsList[0] !== undefined && <ComicsList data={comicsList}/> }
                        </div>    
                    {/* </div> */}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    comicBooks: state.comicBooks
})

export default connect(mapStateToProps, { getComicsList })(ComicsSearch);