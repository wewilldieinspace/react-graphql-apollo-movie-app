import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles({
    root: {
        border: '1px solid blue',
        borderRadius: 3,
        boxShadow: '0 0px 20px 10px rgba(155, 105, 135, .3)',
        margin: '20px auto',
        padding: 30,

        '& p': {
            borderTop: '1px solid gray',
            width: '100%',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: '10%',
            paddingRight: '10%',
            lineHeight: '25px',
            letterSpacing: '.3px',
        }
    },
    mainTitle: {
        fontSize: 30,
        margin: '0 auto',
    },
    poster: {
        width: 280,
        height: 380
    },
    list: {
        marginLeft: 70,
        fontSize: 18,
        width: '40%',

        '& li': {
            borderBottom: '.5px solid gray',
            marginTop: 10,
            marginBottom: 15,
            width: '90%',

            '& span': {
                fontWeight: 'bold',
                marginLeft: 20,
                fontSize: 16,
            }
        }
    },
    content: {
        margin: '20px auto',
        display: 'flex',
    },
    plot: {
        fontSize: 16,
        width: '60%',
        marginTop: 30,
        margin: '0 auto'
    }
})