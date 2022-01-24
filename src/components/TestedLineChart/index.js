import './index.css'

import {LineChart, Line, Legend, Tooltip, XAxis, YAxis} from 'recharts'

const TestedLineChart = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {testedBarData} = props
  return (
    <>
      <div className="tested-line-chart-container">
        <p className="tested--line-chart-heading">Tested</p>
        <LineChart
          width={730}
          height={250}
          data={testedBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#9673B9',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#9673B9',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#9673B9" />
        </LineChart>
      </div>
      <div className="tested-line-chart-mobile">
        <p className="tested--line-chart-heading">Tested</p>
        <LineChart
          width={250}
          height={170}
          data={testedBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#9673B9',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#9673B9',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#9673B9" />
        </LineChart>
      </div>
    </>
  )
}

export default TestedLineChart
