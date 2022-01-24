import './index.css'

import {LineChart, Line, Legend, Tooltip, XAxis, YAxis} from 'recharts'

const ActiveLineChart = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {activeBarData} = props
  return (
    <>
      <div className="active-line-chart-container">
        <p className="active-line-chart-text">Total Active</p>
        <LineChart
          width={730}
          height={250}
          data={activeBarData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#007BFF',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#007BFF',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#007BFF" />
        </LineChart>
      </div>
      <div className="confirmed-line-chart-mobile">
        <p className="active-line-chart-text-mobile">Total Active</p>
        <LineChart
          width={250}
          height={170}
          data={activeBarData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#007BFF',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#007BFF',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#007BFF" />
        </LineChart>
      </div>
    </>
  )
}

export default ActiveLineChart
