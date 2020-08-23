import React from  'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import PokemonScreen from '../components/pokemon/PokemonScreen';
import SearchScreen from '../components/search/SearchScreen'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={SearchScreen} />
                <Route exact path="/pokemon/:pokemonId" component={PokemonScreen} />
            </Switch>
        </Router>
    )
}

export default AppRouter