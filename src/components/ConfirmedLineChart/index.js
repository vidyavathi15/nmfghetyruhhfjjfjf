import './index.css'

import {LineChart, Line, Tooltip, Legend, XAxis, YAxis} from 'recharts'

const ConfirmedLineChart = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {confirmedBarData} = props
  return (
    <>
      <div className="confirmed-line-chart-container">
        <p className="line-chart-confirmed-data">Confirmed</p>
        <LineChart
          width={730}
          height={250}
          data={confirmedBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#FF073A',
              strokeWidth: 1,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#FF073A',
              strokeWidth: 0.5,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />

          <Legend />
          <Line
            className="line-confirm"
            type="monotone"
            dataKey="count"
            stroke="#FF073A"
          />
        </LineChart>
      </div>
      <div className="confirmed-line-chart-mobile">
        <p className="line-chart-confirmed-data">Confirmed</p>
        <LineChart
          width={250}
          height={170}
          data={confirmedBarData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="resultDate"
            tick={{
              stroke: '#FF073A',
              strokeWidth: 1,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#FF073A',
              strokeWidth: 0.5,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
            dataKey="count"
          />
          <Tooltip />

          <Legend />
          <Line
            className="line-confirm"
            type="monotone"
            dataKey="count"
            stroke="#FF073A"
          />
        </LineChart>
      </div>
    </>
  )
}

export default ConfirmedLineChart
