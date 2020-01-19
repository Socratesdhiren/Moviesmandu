import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

import './style.css';

const InternalServer = () => {
    return (
        <div className="page-err">
            <Result
                status="500"
                title="500"
                subTitle="Sorry, the server is wrong."
                extra={ <Link to={`/#/dashboard`} className="ant-btn">
                    Go Back to Home
                </Link>}
            />,
        </div>
    );
};

export default InternalServer;
