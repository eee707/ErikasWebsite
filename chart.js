Highcharts.chart('chartcontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Grapes', 'Pineapple', 'Raspberry', 'Strawberry', 'Kiwi']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Erika',
        data: [-5, 7, 2, 1, 8]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});