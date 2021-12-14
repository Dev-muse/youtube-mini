import React from 'react';

class SearchBar extends React.Component{
    state={term: ""};

    onInputChange=(event)=>{
        this.setState({term: event.target.value})
    }

    onFormSubmit= event =>{
        //prevent app refresh after form submit
        event.preventDefault()

        // call a callback function passed as prop from parent component and insert state term
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        value={this.state.term} 
                        onChange={this.onInputChange} 
                        type="text" />
                    </div>
                </form>                
            </div>
        );
    }
}

export default SearchBar;