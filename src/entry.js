window.rsk = (function () {

    function buildChart() {
        var chart2 = new Highcharts.Chart({
            chart: {
                renderTo: 'graph2',
                type: 'column',
                zoomType: 'x',
                animation: false
            },
            legend: {
                align: 'left',
                x: 20,
                symbolHeight: 10,
                symbolWidth: 10,
                symbolRadius: 5,
                itemStyle: {
                    color: '#000000',
                    fontWeight: 'normal'
                }
            },
            title: {
                text: ''
            },
            subtitle: {},
            xAxis: {
                type: 'datetime'
            },
            yAxis: [{
                type: 'linear',
                dateTimeLabelFormats: {
                    second: '%H:%M:%S',
                    minute: '%H:%M:%S',
                    hour: '%H:%M',
                    day: '%H'
                },
                title: {
                    text: 'Millions'
                },
                min: 0
            }, {
                min: 0,
                type: 'linear',
                title: {
                    text: 'Approval rate'
                },
                opposite: true,
                gridLineColor: '#ffffff'
            }],
            tooltip: {
                formatter: function () {
                    var range_start_date = new Date(this.x);
                    //var range_start_date = new Date(this.x * 1000);
                    var range_end_date = new Date(range_start_date);
                    range_end_date.setDate(range_end_date.getDate() + 6);
                    var unix_end_datetime = range_end_date.getTime();
                    return '<b>' + this.series.name + ' ' + this.y + ' (Millions) ' + '</b>' + '<br/>'
                        + Highcharts.dateFormat('%b %e', this.x) + ' - ' + Highcharts.dateFormat('%b %e', unix_end_datetime);
                }
            },
            plotOptions: {
                column: {
                    pointRange: 604800000,
                    stacking: 'normal'
                },
                areaspline: {
                    stacking: 'normal',
                    shadow: true,
                    marker: {
                        enabled: false
                    }
                }
            },
            series: require('./data')
        });
    }

    return {
        buildChart: buildChart
    }
})();

$(function () {
    rsk.buildChart();
});
