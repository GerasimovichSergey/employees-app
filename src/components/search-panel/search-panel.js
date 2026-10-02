import React from 'react';
import './search-panerl.css';


class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({ term: term });
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return <input className="form-control search-input"
                      type="text"
                      placeholder="Найти сотрудника"
                      value={this.state.term}
                      onChange={this.onUpdateSearch}
        />
    }
}


export default SearchPanel;