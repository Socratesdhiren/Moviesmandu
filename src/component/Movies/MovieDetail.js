import React, {Fragment} from 'react';

import {Row, Col, Tag, Typography, Skeleton, Alert} from 'antd';

const Movie = (props) => {
    const {movieDetails, movieDetailLoading, MovieDetailErrors} = props;

    return (
        <Fragment>
            <Row>
                {MovieDetailErrors && MovieDetailErrors.Response === "False" &&
                <Col span={24}>
                    <Alert
                        description={MovieDetailErrors && MovieDetailErrors.Error}
                        type="error"
                    />
                </Col>
                }
                <Skeleton loading={movieDetailLoading} active>
                    <Col lg={11} md={24} sm={24}> <img
                        src={movieDetails && movieDetails.Poster ? movieDetails.Poster : 'https://placehold.it/198x264&text=Image+Not+Found'}
                        alt={movieDetails && movieDetails.Title}
                    />
                    </Col>
                    <Col lg={13} md={24} sm={24}>
                        <Row>
                            <Col lg={21} md={24} sm={24}>
                                <Typography.Title
                                    level={3}>  {movieDetails && movieDetails.Title}</Typography.Title></Col>
                            <Col span={3} style={{textAlign: 'right'}}>
                                <Tag color="#2db7f5"
                                     style={{marginTop: 5}}>{movieDetails && movieDetails.imdbRating}</Tag>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '20px'}}>
                            <Col lg={24} md={24} sm={24}> <Tag color="#108ee9"
                                                               style={{marginBottom: 3}}>{movieDetails && movieDetails.Rated}</Tag>
                                <Tag color="#108ee9"
                                     style={{marginBottom: 3}}>{movieDetails && movieDetails.Runtime}</Tag>
                                <Tag style={{marginBottom: 3}}
                                     color="#108ee9">{movieDetails && movieDetails.Genre}</Tag>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <strong> Cast and Crew:</strong>
                            </Col>
                                <Col span={18}>
                                {movieDetails && movieDetails.Actors}
                            </Col>
                            <Col span={6}>
                                <strong> Writer: </strong>
                            </Col>
                            <Col span={18}>
                                {movieDetails && movieDetails.Writer}
                            </Col>
                            <Col span={6}>
                                <strong> Director:</strong>
                            </Col>
                            <Col span={18}>
                            {movieDetails && movieDetails.Director}
                            </Col>
                        </Row>
                    </Col>
                </Skeleton>
            </Row>
        </Fragment>
    )
};

export default Movie;
