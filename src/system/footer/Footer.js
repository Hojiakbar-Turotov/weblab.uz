import { Favorite } from '@material-ui/icons';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; Hojiakbar Turotov 2021 - {new Date().getFullYear()} || Made with <Favorite /> </p>
        </div>
    );
};


export default Footer;