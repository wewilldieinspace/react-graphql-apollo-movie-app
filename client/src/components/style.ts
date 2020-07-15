import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles({
    root: {
        padding: 10,
        textAlign: 'center',
        width: 210,
        marginTop: 30,

        '& a': {
            textDecoration: 'none',
            color: '#242424',
        },

        '& a:hover': {
            textDecoration: 'underline',
        },
        '& p': {
            fontSize: 16,
            textTransform: 'capitalize',
        },
        '& p span': {
            fontSize: 12,
            display: 'inherit',
            fontWeight: 100,
        }
    },
    mainTitle: {
        fontSize: 30,
        margin: '0 auto',
    },
    poster: {
        width: 210,
        height: 280
    },
    paper: {
        padding: 20,
    }
})