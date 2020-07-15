import * as React from 'react'
import { Link } from 'react-router-dom'
// MaterialUI
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './style'
// Types
import { FilmItemI } from '../types'



export const FilmItem = (props: FilmItemI) => {
    const { title, poster, type, year, id } = props
    const classes = useStyles()
    return (
        <Paper
            className={classes.root}
            elevation={8}
        >

            <CardMedia
                className={classes.poster}
                image={poster}
                title={title}
            />

            <Link to={`/id=${id}`}>
                <Typography
                    variant="h5"
                    component="h2"
                >
                    {title}
                </Typography>
            </Link>

            <Typography
                component="p"
            >
                {type}
                <span>
                    ({year})
                </span>
            </Typography>
        </Paper>
    )
}