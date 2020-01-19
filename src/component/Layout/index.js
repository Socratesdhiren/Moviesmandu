import React from 'react';

import {Layout} from 'antd';

const {Header, Content, Footer} = Layout;

const AppLayout = (props) => {
    return (
        <Layout
            id="app-layout"
        >
            <Header style={{
                position: 'fixed',
                zIndex: 1,
                fontSize: '40px',
                width: '100%',
                background: '#3f51b5',
                color: '#fff',
                textAlign: 'center'
            }}>
                Moviesmandu
            </Header>
            <Content style={{padding: '0 50px', marginTop: 64}}>
                {props.children}

            </Content>

            <Footer style={{textAlign: 'center', background: '#3f51b5', color: '#fff'}}>Moviemandu ©2020 Created by
                Socrates Dhiren</Footer>
        </Layout>
    );
};

export default AppLayout;
