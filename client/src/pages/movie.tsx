import * as React  from 'react'
// MaterialUI
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useStyles } from './style'
// Query
import { useQuery } from '@apollo/react-hooks'
import { filmQuery } from '../query/filmQuery'
// Types
import { MovieI, MoviePagePropsI } from '../types'



export const movie = (props: MoviePagePropsI) => {
    const { id } = props.match.params
    const classes = useStyles()

    const { data } = useQuery<MovieI, { id: string }>(filmQuery, {
        variables: { id }
    })

    const movie = data?.movie
    return (
        <Grid
            container item
            xs={12}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
        >

            <Typography
                className={classes.mainTitle}
                gutterBottom
                component="h1"
            >
                {movie?.title}
            </Typography>

            <Grid
                className={classes.content}
                item
                xs={11}
            >

                <CardMedia
                    className={classes.poster}
                    component='img'
                    image={movie?.poster}
                    title={movie?.title}
                />

                <List className={classes.list}>
                    <ListItem>Genre: <span>{movie?.genre}</span></ListItem>
                    <ListItem>Director: <span>{movie?.director}</span></ListItem>
                    <ListItem>Writer: <span>{movie?.writer}</span></ListItem>
                    <ListItem>Year: <span>{movie?.year}</span></ListItem>
                    <ListItem>Released: <span>{movie?.released}</span></ListItem>
                    <ListItem>Runtime: <span>{movie?.runtime}</span></ListItem>
                    {
                        (movie?.type === 'series') ? (
                            <ListItem>Total seasons: <span>{movie?.totalSeasons}</span></ListItem>
                        ) : null
                    }
                </List>

            </Grid>

            <Typography
                variant="body2"
                component="p"
                className={classes.plot}
            >
                {movie?.plot}
            </Typography>
        </Grid>
    )
}
