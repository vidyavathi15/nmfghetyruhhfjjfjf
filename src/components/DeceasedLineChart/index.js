import './index.css'

import {LineChart, Line, Legend, Tooltip, XAxis, YAxis} from 'recharts'

const DeceasedLineChart = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {deceasedBarData} = props
  return (
    <>
      <div className="deceased-line-chart-container">
        <p className="deceased-line-chart-text">Deceased</p>
        <LineChart
          width={730}
          height={250}
          data={deceasedBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#6C757D',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#6C757D',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#6C757D" />
        </LineChart>
      </div>
      <div className="deceased-line-chart-mobile">
        <p className="deceased-line-chart-text">Deceased</p>
        <LineChart
          width={250}
          height={170}
          data={deceasedBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#6C757D',
              strokeWidth: 1,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#6C757D',
              strokeWidth: 0.5,
              fontSize: 15,

              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#6C757D" />
        </LineChart>
      </div>
    </>
  )
}

export default DeceasedLineChart
