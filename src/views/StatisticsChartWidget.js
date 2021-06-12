import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';

const StatisticsChartWidget = (props) => {
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [45, 100]
              },
        },
        xaxis: {
            crosshairs: {
                width: 1,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: props.colors || ['#727cf5'],
    };
    const type = props.type || 'area';
    const series = [{ name: props.name || 'Data', data: props.data || [] }];

    return (

        <Card className={classNames(props.bgClass)}>
            <CardBody className="p-0">
                <Media className="p-3">
                    <Media body>
                        <span className="text-muted text-uppercase font-size-12 font-weight-bold" >{props.description}
                        <h2 className="mb-0" style={{textAlign:"center", marginTop:10, fontWeight: 'bold', fontSize:28, color: props.colors}}>{props.title}</h2> </span>
                    </Media>
              
                </Media>
            </CardBody>
        </Card>
    );
};

export default StatisticsChartWidget;
