import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import MobileHeader from '../../../mobile/component/header'

const useStyles = makeStyles({
     content: {
        marginTop: 74

    }
    })

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <MobileHeader />
            <div className= {classes.content}>
                {children}
            </div>

        </React.Fragment>    
    )
}

Layout.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Layout;