import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import {AsyncError404, AsyncSiteArticles, AsyncSiteArticleDetails} from '../../components/AsyncComponent';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    signin: {
          right: '8px',
          position: 'absolute',
          color: '#fff'
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
});
class Frontend extends Component {
    render() {
        const { match, classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Zol
                        </Typography>
                        <Button color="primary" variant="outlined" className={classes.link} component={Link} to={"/signin"}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route
                        exact
                        path={`${match.url}/`}
                        component={AsyncSiteArticles}
                    />
                    <Route
                        path={`${match.url}/articles/:id`}
                        component={AsyncSiteArticleDetails}
                    />
                    <Route component={AsyncError404}/>
                </Switch>
                
            {/* Footer */}
            <footer className={classes.footer}>
                
            </footer>
            {/* End footer */}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Frontend);