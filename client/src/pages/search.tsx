import * as React  from 'react'
// MaterialUI
import OutlinedInput from '@material-ui/core/OutlinedInput'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './style'
// Components
import { MovieItem } from '../components/movieItem'
// Types
import { SearchResultI, MovieItemI } from '../types'
// Query
import { useLazyQuery } from '@apollo/react-hooks'
import { Search } from '../query/searchQuery'



export const search = () => {
    const [value, changeValue] = React.useState('')
    const title = value.trim().toLowerCase().replace(/ /g, '+')
    const classes = useStyles()

    const [getMovies, { loading, data }] = useLazyQuery<SearchResultI, { title: string }>(Search, {
        variables: {
            title
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value)
        getMovies()
    }

    return (
        <>
            <FormControl fullWidth>
                <OutlinedInput
                    value={value}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                />
            </FormControl>
            <Grid
                container item
                xs={12}
                direction="row"
                justify="space-around"
                alignItems="flex-start"
                className={classes.root}
            >
                {
                    loading ? <h2>Loading...</h2> : (
                        data && data?.search?.movies?.map((el: MovieItemI) => {
                            return (
                                <MovieItem
                                    key={ el.id }
                                    poster={ el.poster }
                                    title={ el.title }
                                    id={ el.id }
                                    type={ el.type }
                                    year={ el.year }
                                />
                            )
                        })
                    )
                }
            </Grid>
        </>
    )
}
