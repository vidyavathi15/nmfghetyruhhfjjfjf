import {Component} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import Select from 'react-select'

import Header from '../Header'
import Footer from '../Footer'

import VaccinationByAge from '../VaccinationByAge'

import './index.css'

// import VaccinationByCategory from '../VaccinationByCategory'

class Vaccination extends Component {
  state = {
    statesData: [],
    vaccineDistrictsArray: [],
    totalVaccinationDetailsArray: [],
    vaccinationByCategory: [],
    vaccinationByAge: [],
    injectionCategory: [],
    totalSitesData: {},
    vaccinationByDoses: [],
    stateInput: '',
    districtInput: '',
  }

  componentDidMount() {
    this.getStatesData()
  }

  getFormattedByAge = data => ({
    vac18To45: data.vac_18_45,
    vac45To60: data.vac_45_60,
    above60: data.above_60,
  })

  getFormattedCategory = data => ({
    female: data.female,
    male: data.male,
    others: data.others,
  })

  getFormattedInjection = data => ({
    sputnik: data.sputnik,
    covaxin: data.covaxin,
    covishield: data.covishield,
  })

  getFormattedSites = data => ({
    total: data.total,
    govt: data.govt,
    pvt: data.pvt,
  })

  getFormattedDoses = data => ({
    totalDose1: data.tot_dose_1,
    totalDose2: data.tot_dose_2,

    totalDoses: data.total_doses,
  })

  getStatesData = async () => {
    const statesApiUrl = 'https://apis.ccbp.in/covid19-state-ids'

    const response = await fetch(statesApiUrl)

    const vaccineData = await response.json()

    const formattedResponse = vaccineData.states.map(each => ({
      stateId: each.state_id,
      stateName: each.state_name,
    }))

    /* const {match} = this.props
    const {params} = match
    const {stateId} = params
    */

    const districtsApiUrl = `https://apis.ccbp.in/covid19-districts-data/2`

    const districtsResponse = await fetch(districtsApiUrl)
    const districtsData = await districtsResponse.json()

    const formattedDistrictsVaccination = districtsData.districts.map(each => ({
      districtId: each.district_id,
      districtName: each.district_name,
    }))

    const totalVaccinationApiUrl =
      'https://apis.ccbp.in/covid19-vaccination-data'

    const totalVaccinationResponse = await fetch(totalVaccinationApiUrl)
    const totalVaccinationDetailsData = await totalVaccinationResponse.json()

    console.log(totalVaccinationDetailsData)

    const vaccinationByAge = this.getFormattedByAge(
      totalVaccinationDetailsData.vaccinationByAge,
    )

    const vaccinationByCategory = this.getFormattedCategory(
      totalVaccinationDetailsData.topBlock.vaccination,
    )

    const injectionCategory = this.getFormattedInjection(
      totalVaccinationDetailsData.topBlock.vaccination,
    )

    const totalSitesData = this.getFormattedSites(
      totalVaccinationDetailsData.topBlock.sites,
    )

    const vaccinationByDoses = this.getFormattedDoses(
      totalVaccinationDetailsData.topBlock.vaccination,
    )

    this.setState({
      statesData: formattedResponse,
      vaccineDistrictsArray: formattedDistrictsVaccination,
      totalVaccinationDetailsArray: totalVaccinationDetailsData,
      vaccinationByAge,
      vaccinationByCategory,
      injectionCategory,
      totalSitesData,
      vaccinationByDoses,
    })
  }

  onChangeSelectState = event => {
    this.setState({stateInput: event.target.value})
  }

  onChangeDistrict = event => {
    this.setState({districtInput: event.target.value})
  }

  render() {
    const {
      statesData,
      vaccineDistrictsArray,
      totalVaccinationDetailsArray,
      vaccinationByAge,
      vaccinationByCategory,
      injectionCategory,
      totalSitesData,
      vaccinationByDoses,
      stateInput,
      districtInput,
    } = this.state
    console.log(statesData)
    console.log(vaccineDistrictsArray)
    console.log(totalVaccinationDetailsArray)
    console.log(vaccinationByAge)
    console.log(vaccinationByCategory)
    console.log(injectionCategory)
    console.log(totalSitesData)
    console.log(vaccinationByDoses)

    const {total, govt, pvt} = totalSitesData
    const {totalDoses, totalDose1, totalDose2} = vaccinationByDoses

    return (
      <div className="vaccinationContainer">
        <Header />
        <div className="responsive-container">
          <div className="logo-select-container">
            <div className="home-state-name-container">
              <AiOutlineHome color="#ffffff" size="5%" />
              <h1 className="home-state-heading">India/Andhra Pradesh</h1>
            </div>
            <div className="select-state-and-district-container">
              <div className="state-container">
                <Select
                  value={stateInput}
                  options={statesData}
                  onChange={this.onChangeSelectState}
                  className="select-color"
                />
              </div>
              <div className="districts-select">
                <Select
                  value={districtInput}
                  onChange={this.onChangeDistrict}
                  className="select-color"
                >
                  {vaccineDistrictsArray.map(each => (
                    <option key={each.districtId}>{each.districtName}</option>
                  ))}
                </Select>
              </div>
            </div>
          </div>

          <div className="ttwo-containers">
            <div className="total-sites">
              <img
                className="section-img"
                src="https://res.cloudinary.com/dfwdrrxpf/image/upload/v1643107734/Group_7476_f8tk50.png"
                alt="injection img"
              />
              <div className="sites-text-details">
                <h1 className="sites-heading">Site Conducting Vaccination</h1>
                <p className="sites-total-count">{total}</p>
                <div className="sites-pvt-govt">
                  <div className="govt-container">
                    <p className="govt-heading">Government</p>
                    <p className="govt-total">{govt}</p>
                  </div>
                  <div className="pvt-container">
                    <p className="pvt-heading">Private</p>
                    <p className="pvt-total">{pvt}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="doses-total">
              <img
                className="section-img"
                src="https://res.cloudinary.com/dfwdrrxpf/image/upload/v1643107490/Group_7475_fshky4.png"
                alt="doses img"
              />
              <div className="sites-text-details">
                <h1 className="sites-heading">Total Vaccination Doses</h1>
                <p className="doses-total-count">{totalDoses}</p>
                <div className="doses-one-two">
                  <div className="dose-one-container">
                    <p className="dose-one-heading">Dose 1</p>
                    <p className="dose-one-total">{totalDose1}</p>
                  </div>
                  <div className="dose-two-container">
                    <p className="dose-two-heading">Dose 2</p>
                    <p className="dose-two-total">{totalDose2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VaccinationByAge vaccinationByAge={vaccinationByAge} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Vaccination
