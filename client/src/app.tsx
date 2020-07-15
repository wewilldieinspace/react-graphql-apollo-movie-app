import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// MaterialUI
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
// Pages
import { search } from './pages/search'
import { movie } from './pages/movie'


const useStyles = makeStyles({
    root: {
        marginTop: '80px',
        fontFamily: 'Arial',
    }
})

export const App = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='md' className={classes.root}>
            <Grid container spacing={3}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={search} />
                        <Route path='/id=:id' component={movie} />
                    </Switch>
                </Router>
            </Grid>
        </Container>
    )
}