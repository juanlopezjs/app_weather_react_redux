import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchInput from '../actions/action_serch_bar';
import { fetchWeather } from '../actions/index';


class SerchBar extends Component {
    
    constructor(props){
        super(props)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.props.searchInput(event.target.value)
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.props.term);
        this.props.searchInput('');
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Obtener un pronóstico de cinco días en sus ciudades favoritas"
                    className="form-control"
                    value={this.props.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Buscar</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        term: state.search.term
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchInput,
        fetchWeather
    },dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SerchBar);