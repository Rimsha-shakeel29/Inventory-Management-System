// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsChartWidget from './StatisticsChartWidget';

const Statistics = () => {
    return (
        <React.Fragment>
            <Row style={{textAlign: 'center'}}>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Employees"
                        title="2100"
                       ></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Officers On Duty"
                        title="1065"
                        colors={['#43d39e']}
                        ></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Orders to be Issued"
                        title="11"
                        colors={['#f77e53']}
                        ></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Items Issued"
                        title="150"
                        colors={['#5603ad']}
                      ></StatisticsChartWidget>
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Items in Repair Stock"
                        title="50"
                        colors={['#2c74f8']}
                      ></StatisticsChartWidget>
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Items in Dead Stock"
                        title="5"
                        colors={['#ffbe0b']}
                      ></StatisticsChartWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
