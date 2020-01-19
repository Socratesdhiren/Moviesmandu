import React, {Fragment, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';

import {Row, Col, Input, Card, Tag, Form, Alert, Table, Modal, Button,Typography, Icon, BackTop} from 'antd';

import Movie from './MovieDetail';

const {Meta} = Card;

//set the default value
const page = 1;
const movieName = 'fast furious';

const List = props => {
    const {movies, movieErrors, movieLoading, moviePagination, fetchMoviesListByName, fetchMovieDetailByIdentifier, cleanMovie} = props;

    const {getFieldDecorator, validateFields, getFieldValue} = props.form;
    const [modalVisible, setModalVisible] = useState(false);
    const movielist = movies && movies.Search;

    const handleModalCancel = () => {
        setModalVisible(false);
        cleanMovie();
    };

    const handleTableChange = (pagination) => {
        const value = getFieldValue('searchParameter') ? getFieldValue('searchParameter') : movieName;
        fetchMoviesListByName({
            name: value,
            page: pagination.current,
        });

    };

    const handleSearchMovies = () => {
        validateFields((err, values) => {
            if (!err) {
                fetchMoviesListByName({name: values.searchParameter, page: page});
            }
        });
    };
    const handleMovieClicked = (idmId) => {
        setModalVisible(true);
        fetchMovieDetailByIdentifier(idmId);
    };

    const columns = [{
        title: 'Movie Name',
        dataIndex: 'Title',
        align: 'left',
        render: (text, record) => {
            return <div>{record && record.Title}</div>;
        },
    }, {
        title: 'Released Year',
        dataIndex: 'Year',
        align: 'left',
        render: (text, record) => {
            return <div>{record && record.Year}</div>;
        },
    },
        {
            title: 'Type',
            dataIndex: 'Type',
            align: 'left',
            render: (text, record) => {
                return <div>{record && record.Type}</div>;
            },
        },
        {
            title: 'Action',
            key: 'operation',
            align: 'center',
            render: (text, record) => {
                return (
                    <Fragment>
                        <Icon
                            type="eye"
                            title="View"
                            style={{fontSize: '22px', color: '#08c'}} theme="outlined"
                            onClick={() => handleMovieClicked(record.imdbID)}
                        />
                    </Fragment>
                );
            },
        },
    ];
    useEffect(() => {
        fetchMoviesListByName({name: movieName, page: page});
        return () => {
        };
    }, []);

    return (
        <Fragment>
            {movieErrors && movieErrors.Response === "False" &&
            <Col span={24}>
                <Alert
                    description={movieErrors && movieErrors.Error}
                    type="error"
                />
            </Col>
            }
            <p style={{marginTop: 8}}><strong>Search Movies By Name</strong></p>
            <Row>
                <Form>
                    <Col lg={12} md={24} sm={24}>
                        <Form.Item>
                            {getFieldDecorator(
                                'searchParameter',
                                {
                                    rules: [{required: true, message: "Please enter movie name"}]
                                }
                            )(
                                <Input.Search placeholder="Please enter movie name" onSearch={handleSearchMovies}
                                              enterButton="Search"
                                              size="large"
                                              loading={false}
                                              style={{marginBottom: '10px'}}/>
                            )}
                        </Form.Item>
                    </Col>
                </Form>
            </Row>

            <Row>
                <Row>
                    {movielist instanceof Array && movielist.map((movie) =>
                        <Col lg={6} md={8} sm={12} key={movie.imdbID}>
                            <Card
                                loading={movieLoading}
                                style={{width: 260, margin:10}}
                                hoverable
                                onClick={() => handleMovieClicked(movie.imdbID)}
                                cover={<img alt="movie-poster" src={movie.Poster ? `${movie.Poster}` : 'invalid.src'}/>}
                            >
                                <Meta title={movie.Title} description={movie.Year}/>

                                <Row style={{marginTop: '10px'}} className="gutter-row">
                                    <Col>
                                        <Tag color="#3f51b5">{movie.Type}</Tag>
                                    </Col>
                                    <Col span={24}>
                                        <Button style={{marginTop: '10px'}} onClick={()=>handleMovieClicked(movie.imdbID)} type="primary"
                                                block>View Detail</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Col>)
                    }
                </Row>

                <Row>

                    <Typography.Title level={2} style={{color:'black'}}>Movie List with Pagination</Typography.Title>
                <div className={'table-box'}>

                    <Table
                        bordered
                        columns={columns}
                        rowKey={record => record.imdbID}
                        dataSource={movielist instanceof Array ? movielist : []}

                        pagination={{
                            total: moviePagination.data && parseInt(moviePagination.data.totalResults),
                            showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total}`,
                            showSizeChanger: false,
                        }}
                        loading={movieLoading}
                        onChange={handleTableChange}
                        scroll={{x: 'max-content'}}
                    />
                </div>
                </Row>
                <Modal
                    title="Movie Detail Information"
                    visible={modalVisible}
                    width={800}
                    height={500}
                    onCancel={handleModalCancel}
                    footer={null}
                >
                    <Movie {...props} />
                </Modal>
            </Row>

            <BackTop>
                <div className="ant-back-top-inner">UP</div>
            </BackTop>
        </Fragment>
    );
};

export default Form.create()(withRouter(List));
