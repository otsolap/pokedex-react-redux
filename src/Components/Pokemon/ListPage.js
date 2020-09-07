import React, { Component } from 'react'
import Card from './Card'
import Pagination from '../Layout/Pagination'
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/actionCreators';

class ListPage extends Component {
    componentDidMount() {
        this.props.getPokemon();
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.props.pokemons.map((pokemon, index) => <Card pokemon={pokemon} key={index} />)}
                </div>
                <div className="row">
                    <Pagination></Pagination>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        pokemons: state.pokemons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemon: () => {
            getPokemon(dispatch);
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ListPage);