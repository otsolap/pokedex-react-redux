import React, { Component } from 'react'
import Card from './Card'
import Pagination from '../Layout/Pagination'
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/actionCreators'

class ListPage extends Component {
    render() {
        const { pokedex} = this.props;
        return (
            <div>
                <div className="row">
                    {
                        pokedex ?
                        pokedex.results.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                        'Loading...'
                    }
                </div>
                <div className="row">
                    <Pagination></Pagination>
                </div>
            </div>
        )
    }
}

function MapStatetoProps(state) {
    return {
        pokedex: state.pokedex
    }
}


export default connect(MapStatetoProps, { getPokemon}) (ListPage);