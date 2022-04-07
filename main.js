



$('body').append($('<div>Hello World</div>').on('click', () => alert('Hello World')));
const div = $('<div>Hello World</div>');
const body = $('body');
body.append(div);

div.on('click', () => alert('Hello World'));


const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Week Motivation',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [100, 90, 80, 70, 50, 20, 0]
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('chart'),
    config
  );

const data2 = {
    labels: [
        'Food',
        'Entertainment',
        'Bills'
    ],
    datasets: [{
        label: 'Where is my money?',
        data: [100, 30, 60],
        backgroundColor: [
            'red',
            'blue',
            'green'
        ],
        hoverOffset: 4
    }]
};

const config2 = {
    type: 'pie',
    data: data2,
};

const myChart2 = new Chart(
    document.getElementById('chart2'),
    config2
  );