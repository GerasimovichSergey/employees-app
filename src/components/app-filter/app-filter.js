import React from 'react';
import './app-filter.css';


class AppFilter extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            active: 'all',
        }
    }
    
    onUpdateFilter = (event) => {
        const targetFilter = event.target.getAttribute('data-active');
        
        this.setState({ active: targetFilter });
        this.props.onUpdateFilter(targetFilter);
    }
    
    render() {
        const buttonsData = [
            { name: 'all', label: 'Все сотрудники' },
            { name: 'rise', label: 'На повышение' },
            { name: 'salaryMore1000', label: 'З/П больше 1000$' },
        ];
        
        const buttons = buttonsData.map((button) => {
            return (
                <button
                    key={button.name}
                    className={`btn ${this.state.active === button.name ? 'btn-light' : 'btn-outline-light'}`}
                    type="button"
                    data-active={button.name}
                    onClick={this.onUpdateFilter}
                >
                    {button.label}
                </button>
            );
        });
        
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;