import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetTittle = ({tittle,metaName,desContent}) => {
    return (
        <div>
            <Helmet>
                <title> {tittle} </title>
                <meta name={metaName} content={desContent} />
            </Helmet>
        </div>
    );
};

export default HelmetTittle;