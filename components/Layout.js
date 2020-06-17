import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

  const Layout =({accounts,children})=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Ethereum Dapp
                    </Typography>
                    <Button color="inherit">{accounts[0]}</Button>
                    </Toolbar>
                </AppBar>
                {children}
            </div>
    )
  }

  export default Layout;