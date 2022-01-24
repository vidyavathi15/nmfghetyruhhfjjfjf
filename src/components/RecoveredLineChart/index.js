import './index.css'

import {LineChart, Line, Legend, Tooltip, XAxis, YAxis} from 'recharts'

const RecoveredLineChart = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {recoveredBarData} = props
  return (
    <>
      <div className="recovered-line-chart-container">
        <p className="recovered-line-chart-heading">Recovered</p>
        <LineChart
          width={730}
          height={250}
          data={recoveredBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#27A243',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#27A243',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#27A243" />
        </LineChart>
      </div>
      <div className="recovered-line-chart-mobile">
        <p className="recovered-line-chart-heading">Recovered</p>
        <LineChart
          width={250}
          height={170}
          data={recoveredBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#27A243',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#27A243',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#27A243" />
        </LineChart>
      </div>
    </>
  )
}

export default RecoveredLineChart
