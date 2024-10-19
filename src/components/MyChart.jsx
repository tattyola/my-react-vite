import Plot from 'react-plotly.js';

const MyChart = () => {
    return (
        <Plot className='chart'
            data={[
                {
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    y: [16, 5, 11, 9, 1, 5, 21, 16, 25],
                    mode: 'lines',
                    type: 'scatter',
                    marker: {
                        color: '#6accec',
                        line: {
                            width: 1
                        }
                    }
                },
                {
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    y: [12, 9, 15, 12, 19, 13, 8, 5, 11],
                    mode: 'lines+markers',
                    type: 'scatter',
                    marker: {
                        color: '#C8A2C8',
                        line: {
                            width: 1
                        }
                    }
                }
            ]}
            layout={
                {
                    autosize: true,
                    xaxis: {
                        title: '$',
                    },
                    yaxis: {
                        title: 'Hours',
                    },

                    title: 'Fuel Chart'
                }
            }
            config={{ responsive: true }}

        />
    );
};

export default MyChart;

