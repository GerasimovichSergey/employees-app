import React from 'react';
import './employees-list-item.css';


class EmployeesListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        };
    }
    
    onIncrease = () => {
        this.setState((prevState) => ({
                increase: !prevState.increase,
            })
        );
    }
    
    onRise = () => {
        this.setState((prevState) => ({
            like: !prevState.like,
        }))
    }
    
    render() {
        const classNames = `list-group-item d-flex justify-content-between ${this.state.increase ? 'increase' : ''} ${this.state.like ? 'like' : ''}`;
        
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onRise}
                >
                    {this.props.name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={`${this.props.salary} $`} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={this.onIncrease}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>
                    
                    <button type="button"
                            className="btn-trash btn-sm"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}


export default EmployeesListItem;