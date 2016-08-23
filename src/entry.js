window.rsk = (function () {

    function buildChart() {
        var chart2 = new Highcharts.Chart({
            chart: {
                renderTo: 'graph2',
                type: 'column',
                zoomType: 'x',
                animation: false,
                events: {
                    load: function(){
                        this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
                    }
                }
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
                type: 'datetime',
                crosshair: {
                    width: 1
                }
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
            }
            ],
            tooltip: {
                //enabled: false
                formatter: function () {
                    for (var i = 0; i < this.series.data.length; i++) {
                        this.series.data[i].setState('hover');
                    }

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
                    stacking: 'normal'
                },
                areaspline: {
                    stacking: 'normal',
                    shadow: false,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
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
