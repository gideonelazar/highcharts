let chargeback = [[1324771200000, 3], [1325376000000, 7.1], [1327190400000, 9.5], [1327795200000, 5], [1329609600000, 3.4], [1330214400000, 6.5], [1330819200000, 7.9], [1334448000000, 13.5], [1338681600000, 12.7], [1348358400000, 12.6], [1350777600000, 10.2], [1353801600000, 12.6], [1354406400000, 17.2], [1355011200000, 112], [1331424000000, 12], [1348963200000, 12], [1351382400000, 12], [1351987200000, 12], [1352592000000, 12], [1353196800000, 1]],
decline = [[1324771200000, 1], [1348963200000, 2], [1350777600000, 4.1], [1352592000000, 2.2], [1353801600000, 6.2], [1354406400000, 12.1], [1325376000000, 5.2], [1327190400000, 5], [1327795200000, 6.4], [1329609600000, 4], [1330214400000, 8.4], [1330819200000, 12], [1331424000000, 12], [1334448000000, 12], [1338681600000, 12], [1348358400000, 12], [1351382400000, 12], [1351987200000, 12], [1353196800000, 12], [1355011200000, 1]],
approved = [[1327190400000, 19.4], [1330214400000, 20.2], [1330819200000, 16.1], [1331424000000, 9.9], [1334448000000, 16.3], [1348963200000, 16.1], [1350777600000, 30], [1351382400000, 15.5], [1353196800000, 10.7], [1353801600000, 47.2], [1354406400000, 24], [1324771200000, 12], [1325376000000, 12], [1327795200000, 12], [1329609600000, 12], [1338681600000, 12], [1348358400000, 12], [1351987200000, 12], [1352592000000, 12], [1355011200000, 1]];

var series = [
    {
        name: 'Approved',
        data: approved,
        type: 'areaspline',
        color: '#324122',
        fillOpacity: 0.5,
        lineWidth: 1,
        animation: false
    },
    {
        name: 'Decline',
        data: decline,
        type: 'areaspline',
        color: '#324122',
        fillOpacity: 0.5,
        lineWidth: 1,
        animation: false
    },
    {
        name: 'Chargeback',
        data: chargeback,
        type: 'areaspline',
        color: '#324122',
        fillOpacity: 0.5,
        lineWidth: 1,
        animation: false
    }];

for (let i = 0; i < series.length; i++) {
    series[i].events = series[i].events ? series[i].events : {};
    series[i].cursor = 'pointer';
    series[i].stickyTracking = false;
    series[i].point = series[i].point ? series[i].point : {};
    series[i].point.events = series[i].point.events ? series[i].point.events : {};
    var newColor = '#a760d6';
    var mouseWasOver = false;

    series[i].events.mouseOver = function () {
        var hoverSeries = this.chart.series[i];
        hoverSeries.options.originalColor = hoverSeries.options.originalColor ? hoverSeries.options.originalColor : hoverSeries.options.color;
        hoverSeries.options.color = newColor;
        hoverSeries.update(hoverSeries.options);
    };

    series[i].events.mouseOut = function () {
        var hoverSeries = this.chart.series[i];

        if (hoverSeries.options.originalColor) {
            mouseWasOver = false;
            hoverSeries.options.color = hoverSeries.options.originalColor;
            hoverSeries.update(hoverSeries.options);
        }
    };

    series[i].events.click = function (event) {
        console.log('eventClick',this.name, event.x, event.y);
        //this.chart.myTooltip.refresh(event.point, event);
    };

    series[i].point.events.click = function (event) {
        console.log('pointClick',this.name, event.x, event.y);
    };

}

module.exports = series;