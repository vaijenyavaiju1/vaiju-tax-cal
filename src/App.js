import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    employeeName: '',
    income: 0,
    tax: 0,
    netSal: 0,
    name: '',
    age: 0,
    basicSalary: 0,
    hra: 0,
    specialAllowance: 0,
    transportAllowance: 0,
    otherAllowances: 0,
    leaveTravelAllowance: 0,
    reimbursement: 0,
    employeeContributionToProvidentFund: 0,
    incomeTaxDeducted: 0,
    grossAnnualRent: 0,
    interestPaidOnHomeLoan: 0,
    municipalTaxes: 0,
    shortTermCapitalGain: 0,
    longTermCapitalGain: 0,
    interestIncome: 0,
    dividendIncome: 0,
    incomeFromBusiness: 0,
    agricultralIncome: 0,
    otherMiscellaneous: 0,
    lifeInsurancePremium: 0,
    publicProvidentFund: 0,
    employeeProvidentFund: 0,
    nationalSavingCertificates: 0,
    taxSaving: 0,
    repaymentOnHomeLoan: 0,
    equityLinked: 0,
    childrenTution: 0,
    deductionMedicalInsurance: 0,
    deductionEducation: 0,
    deductionDonations: 0,
    savingAccount: 0,
    deductionDisability: 0,
    deductionInterestOnHomeLoan: 0,
    otherDeductions: 0,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeAge = event => {
    this.setState({age: event.target.value})
  }

  onChangeBasicSalary = event => {
    this.setState({basicSalary: event.target.value})
  }

  onChangeHra = event => {
    this.setState({hra: event.target.value})
  }

  onChangeSpecialAllowance = event => {
    this.setState({specialAllowance: event.target.value})
  }

  onChangeTransportAllowance = event => {
    this.setState({transportAllowance: event.target.value})
  }

  onChangeOtherAllowances = event => {
    this.setState({otherAllowances: event.target.value})
  }

  onChangeLeaveAllowance = event => {
    this.setState({leaveTravelAllowance: event.target.value})
  }

  onChangeReimbursement = event => {
    this.setState({reimbursement: event.target.value})
  }

  onChangeEmployeeContributionToProvidentFund = event => {
    this.setState({employeeContributionToProvidentFund: event.target.value})
  }

  onChangeIncomeTaxDeducted = event => {
    this.setState({incomeTaxDeducted: event.target.value})
  }

  onChangeGrossAnnualRent = event => {
    this.setState({grossAnnualRent: event.target.value})
  }

  onChangeInterestPaidOnHomeLoan = event => {
    this.setState({interestPaidOnHomeLoan: event.target.value})
  }

  onChangeMunicipalTaxes = event => {
    this.setState({municipalTaxes: event.target.value})
  }

  onChangeShortTermCapital = event => {
    this.setState({shortTermCapitalGain: event.target.value})
  }

  onChangeLongTermCapital = event => {
    this.setState({longTermCapitalGain: event.target.value})
  }

  onChangeInterestIncome = event => {
    this.setState({interestIncome: event.target.value})
  }

  onChangeDividendIncome = event => {
    this.setState({dividendIncome: event.target.value})
  }

  onChangeAgriculturalIncome = event => {
    this.setState({agricultralIncome: event.target.value})
  }

  onChangeIncomeFromBusiness = event => {
    this.setState({incomeFromBusiness: event.target.value})
  }

  onChangeOtherMiscellaneous = event => {
    this.setState({otherMiscellaneous: event.target.value})
  }

  onChangeLifeInsurancePremium = event => {
    this.setState({lifeInsurancePremium: event.target.value})
  }

  onChangePublicProvidentFund = event => {
    this.setState({publicProvidentFund: event.target.value})
  }

  onChangeEmployeeProvidentFund = event => {
    this.setState({employeeProvidentFund: event.target.value})
  }

  onChangeNationalSavingCertificates = event => {
    this.setState({nationalSavingCertificates: event.target.value})
  }

  onChangeTaxSaving = event => {
    this.setState({taxSaving: event.target.value})
  }

  onChangeEquityLinked = event => {
    this.setState({equityLinked: event.target.value})
  }

  onChangeRepaymentOnHomeLoan = event => {
    this.setState({repaymentOnHomeLoan: event.target.value})
  }

  onChangeChildrenTution = event => {
    this.setState({childrenTution: event.target.value})
  }

  onChangeDeductionMedicalInsurance = event => {
    this.setState({deductionMedicalInsurance: event.target.value})
  }

  onChangeDeductionEducation = event => {
    this.setState({deductionEducation: event.target.value})
  }

  onChangeDeductionDonations = event => {
    this.setState({deductionDonations: event.target.value})
  }

  onChangeSavingAccount = event => {
    this.setState({savingAccount: event.target.value})
  }

  onChangeDeductionDisability = event => {
    this.setState({deductionDisability: event.target.value})
  }

  onChangeDeductionInterestOnHomeLoan = event => {
    this.setState({deductionInterestOnHomeLoan: event.target.value})
  }

  onChangeOtherDeductions = event => {
    this.setState({otherDeductions: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      basicSalary,
      hra,
      specialAllowance,
      transportAllowance,
      otherAllowances,
      leaveTravelAllowance,
      reimbursement,
      employeeContributionToProvidentFund,
      incomeTaxDeducted,
      grossAnnualRent,
      interestPaidOnHomeLoan,
      municipalTaxes,
      shortTermCapitalGain,
      longTermCapitalGain,
      interestIncome,
      dividendIncome,
      incomeFromBusiness,
      agricultralIncome,
      otherMiscellaneous,
      lifeInsurancePremium,
      publicProvidentFund,
      employeeProvidentFund,
      nationalSavingCertificates,
      taxSaving,
      repaymentOnHomeLoan,
      equityLinked,
      childrenTution,
      deductionMedicalInsurance,
      deductionEducation,
      deductionDonations,
      savingAccount,
      deductionDisability,
      deductionInterestOnHomeLoan,
      otherDeductions,
      age,
      tax,
      netSal,
      name,
    } = this.state
    const GrossTotalIncome =
      parseInt(basicSalary) -
      (parseInt(hra) + parseInt(leaveTravelAllowance)) +
      parseInt(specialAllowance) +
      parseInt(transportAllowance) +
      parseInt(otherAllowances) +
      parseInt(reimbursement) +
      parseInt(employeeContributionToProvidentFund)
    const NAV = parseInt(grossAnnualRent) - parseInt(municipalTaxes)
    const netIncomeHouse = NAV - (0.3 * NAV + parseInt(interestPaidOnHomeLoan))
    const capitalGain =
      parseInt(shortTermCapitalGain) + parseInt(longTermCapitalGain)
    const otherIncome =
      parseInt(interestIncome) +
      parseInt(dividendIncome) +
      parseInt(incomeFromBusiness) +
      parseInt(agricultralIncome) +
      parseInt(otherMiscellaneous)
    const totalGross =
      GrossTotalIncome + netIncomeHouse + capitalGain + otherIncome
    const deductions80c =
      parseInt(lifeInsurancePremium) +
      parseInt(publicProvidentFund) +
      parseInt(employeeProvidentFund) +
      parseInt(nationalSavingCertificates) +
      parseInt(taxSaving) +
      parseInt(equityLinked) +
      parseInt(repaymentOnHomeLoan) +
      parseInt(childrenTution)
    const others =
      parseInt(deductionMedicalInsurance) +
      parseInt(deductionEducation) +
      parseInt(deductionDonations) +
      parseInt(savingAccount) +
      parseInt(deductionDisability) +
      parseInt(deductionInterestOnHomeLoan) +
      parseInt(otherDeductions)
    let canOff
    if (deductions80c > 150000) {
      let one = deductions80c
      one = 150000
      canOff = one + others
    } else {
      canOff = deductions80c + others
    }
    const taxableIncome = totalGross - canOff
    const wholeTaxableRate = taxableIncome - parseInt(incomeTaxDeducted)
    let oneOff = tax
    let im = netSal
    if (parseInt(age) <= 60) {
      if (wholeTaxableRate < 250000) {
        oneOff = 0
        im = 0
      } else if (wholeTaxableRate > 250000 && wholeTaxableRate <= 500000) {
        oneOff = wholeTaxableRate * 0.05
        im = wholeTaxableRate - oneOff
      } else if (wholeTaxableRate > 500000 && wholeTaxableRate <= 700000) {
        oneOff = wholeTaxableRate * 0.1
        im = wholeTaxableRate - oneOff
      } else if (wholeTaxableRate > 700000 && wholeTaxableRate <= 1000000) {
        oneOff = wholeTaxableRate * 0.15
        im = wholeTaxableRate - oneOff
      } else if (wholeTaxableRate > 1000000 && wholeTaxableRate <= 1250000) {
        oneOff = wholeTaxableRate * 0.2
        im = wholeTaxableRate - oneOff
      } else if (wholeTaxableRate > 1250000 && wholeTaxableRate <= 1500000) {
        oneOff = wholeTaxableRate * 0.25
        im = wholeTaxableRate - oneOff
      } else if (wholeTaxableRate > 1500000) {
        oneOff = wholeTaxableRate * 0.3
        im = wholeTaxableRate - oneOff
      }
    }
    return this.setState({
      employeeName: name,
      income: wholeTaxableRate,
      tax: oneOff,
      netSal: im,
    })
  }

  render() {
    const {
      employeeName,
      income,
      tax,
      netSal,
      name,
      age,
      basicSalary,
      hra,
      specialAllowance,
      transportAllowance,
      otherAllowances,
      leaveTravelAllowance,
      reimbursement,
      employeeContributionToProvidentFund,
      incomeTaxDeducted,
      grossAnnualRent,
      municipalTaxes,
      interestPaidOnHomeLoan,
      shortTermCapitalGain,
      longTermCapitalGain,
      interestIncome,
      dividendIncome,
      incomeFromBusiness,
      agricultralIncome,
      otherMiscellaneous,
      lifeInsurancePremium,
      publicProvidentFund,
      employeeProvidentFund,
      nationalSavingCertificates,
      taxSaving,
      repaymentOnHomeLoan,
      equityLinked,
      childrenTution,
      deductionMedicalInsurance,
      deductionEducation,
      deductionDonations,
      savingAccount,
      deductionDisability,
      deductionInterestOnHomeLoan,
      otherDeductions,
    } = this.state
    return (
      <div className="dis">
        <h1 className="heading">INCOME TAX CALCULATOR</h1>
        <p className="paraOOO">Fill the details and check the results below:</p>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <div className="personalDetails">
              <h1 className="personal">Personal Details</h1>
              <div className="input-div">
                <label className="personal-para" htmlFor="Name">
                  Name:
                </label>
                <input
                  value={name}
                  onChange={this.onChangeName}
                  id="Name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="input-div">
                <label className="personal-para" htmlFor="Name">
                  Age:
                </label>
                <input
                  value={age}
                  onChange={this.onChangeAge}
                  id="age"
                  type="text"
                  placeholder="age"
                />
              </div>
              <div className="input-div">
                <p className="personal-para">Gender:</p>
                <select className="status-input">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="input-div">
                <p className="personal-para">
                  Residential <br />
                  Status:
                </p>
                <select className="status-input">
                  <option>Resident</option>
                  <option>Non-Resident</option>
                  <option>Resident but Not Ordinary Resident</option>
                </select>
              </div>
            </div>
            <div className="onForm">
              <div>
                <div>
                  <div>
                    <h1 className="personal">Income Sources</h1>
                    <div className="input-div1">
                      <label className="personal-para" htmlFor="basicSalary">
                        Basic Salary:
                      </label>
                      <input
                        value={basicSalary}
                        onChange={this.onChangeBasicSalary}
                        id="basicSalary"
                        type="number"
                        placeholder="Basic Salary"
                      />
                    </div>
                    <div className="input-div1">
                      <label className="personal-para" htmlFor="houseRent">
                        House Rent Allowance:
                      </label>
                      <input
                        value={hra}
                        onChange={this.onChangeHra}
                        id="houseRent"
                        type="number"
                        placeholder="House Rent Allowance"
                      />
                    </div>
                    <div className="input-div1">
                      <label
                        className="personal-para"
                        htmlFor="specialAllowance"
                      >
                        Special Allowance:
                      </label>
                      <input
                        value={specialAllowance}
                        onChange={this.onChangeSpecialAllowance}
                        id="specialAllowance"
                        type="number"
                        placeholder="Special Allowance"
                      />
                    </div>
                    <div className="input-div1">
                      <label
                        className="personal-para"
                        htmlFor="transportAllowance"
                      >
                        Transport Allowance:
                      </label>
                      <input
                        value={transportAllowance}
                        onChange={this.onChangeTransportAllowance}
                        id="transportAllowance"
                        type="number"
                        placeholder="Transport Allowance"
                      />
                    </div>
                    <div className="input-div1">
                      <label className="personal-para" htmlFor="otherAllowance">
                        Other Allowances:
                      </label>
                      <input
                        value={otherAllowances}
                        onChange={this.onChangeOtherAllowances}
                        id="otherAllowance"
                        type="number"
                        placeholder="Other Allowances"
                      />
                    </div>
                    <div className="input-div1">
                      <label
                        className="personal-para"
                        htmlFor="leaveTravelAllowance"
                      >
                        Leave Travel Allowance:
                      </label>
                      <input
                        value={leaveTravelAllowance}
                        onChange={this.onChangeLeaveAllowance}
                        id="leaveTravelAllowance"
                        type="number"
                        placeholder="Leave Travel Allowance"
                      />
                    </div>
                    <div className="input-div1">
                      <label className="personal-para" htmlFor="reimbursements">
                        Reimbursements (Medical, Fuel):
                      </label>
                      <input
                        value={reimbursement}
                        onChange={this.onChangeReimbursement}
                        id="reimbursements"
                        type="number"
                        placeholder="Reimbursements"
                      />
                    </div>
                    <div className="input-div1">
                      <label className="personal-para" htmlFor="providentFund">
                        Employer's Contribution to Provident Fund:
                      </label>
                      <input
                        value={employeeContributionToProvidentFund}
                        onChange={
                          this.onChangeEmployeeContributionToProvidentFund
                        }
                        id="providentFund"
                        type="number"
                        placeholder="Provident Fund"
                      />
                    </div>
                    <div className="input-div1">
                      <label className="personal-para" htmlFor="tds">
                        Income Tax Deducted at Source (TDS):
                      </label>
                      <input
                        value={incomeTaxDeducted}
                        onChange={this.onChangeIncomeTaxDeducted}
                        id="tds"
                        type="number"
                        placeholder="TDS"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="personal">Income from House Property</h1>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="grossAnnualRent">
                      Gross Annual Rent Received:
                    </label>
                    <input
                      value={grossAnnualRent}
                      onChange={this.onChangeGrossAnnualRent}
                      id="grossAnnualRent"
                      type="number"
                      placeholder="Gross Annual Rent"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="municipalTaxes">
                      Municipal Taxes Paid:
                    </label>
                    <input
                      value={municipalTaxes}
                      onChange={this.onChangeMunicipalTaxes}
                      id="municipalTaxes"
                      type="number"
                      placeholder="Municipal Taxes Paid"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="homeLoan">
                      Interest Paid on Home Loan (if applicable):
                    </label>
                    <input
                      value={interestPaidOnHomeLoan}
                      onChange={this.onChangeInterestPaidOnHomeLoan}
                      id="homeLoan"
                      type="number"
                      placeholder="Home Loan"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="personal">Capital Gains</h1>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="st">
                      Short-Term Capital Gains:
                    </label>
                    <input
                      value={shortTermCapitalGain}
                      onChange={this.onChangeShortTermCapital}
                      id="st"
                      type="number"
                      placeholder="Short-Term"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="lt">
                      Long-Term Capital Gains:
                    </label>
                    <input
                      value={longTermCapitalGain}
                      onChange={this.onChangeLongTermCapital}
                      id="lt"
                      type="number"
                      placeholder="Long-Term"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="personal">Other Income</h1>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="interestIncome">
                      Interest Income (Savings Account, Fixed Deposits):
                    </label>
                    <input
                      value={interestIncome}
                      onChange={this.onChangeInterestIncome}
                      id="interestIncome"
                      type="number"
                      placeholder="Interest Income"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="dividendIncome">
                      Dividend Income - Rental Income (other than House
                      Property):
                    </label>
                    <input
                      value={dividendIncome}
                      onChange={this.onChangeDividendIncome}
                      id="dividendIncome"
                      type="number"
                      placeholder="Dividend Income"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="bussiness">
                      Income from Business / Profession:
                    </label>
                    <input
                      value={incomeFromBusiness}
                      onChange={this.onChangeIncomeFromBusiness}
                      id="bussiness"
                      type="number"
                      placeholder="Income from Business / Profession"
                    />
                  </div>
                  <div className="input-div1">
                    <label
                      className="personal-para"
                      htmlFor="agriculturalIncome"
                    >
                      Agricultural Income:
                    </label>
                    <input
                      value={agricultralIncome}
                      onChange={this.onChangeAgriculturalIncome}
                      id="agriculturalIncome"
                      type="number"
                      placeholder="Agricultural Income"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="oMI">
                      Other Miscellaneous Income:
                    </label>
                    <input
                      value={otherMiscellaneous}
                      onChange={this.onChangeOtherMiscellaneous}
                      id="oMI"
                      type="number"
                      placeholder="Miscellaneous Income"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="personal">Deductions and Exemptions:</h1>
                  <p className="personal-para">
                    1.Section 80C Deductions (Investments and Expenses)
                  </p>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="life">
                      -Life Insurance Premium:
                    </label>
                    <input
                      value={lifeInsurancePremium}
                      onChange={this.onChangeLifeInsurancePremium}
                      id="life"
                      type="number"
                      placeholder="Life Insurance Premium"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="ppf">
                      -Public Provident Fund (PPF):
                    </label>
                    <input
                      value={publicProvidentFund}
                      onChange={this.onChangePublicProvidentFund}
                      id="ppf"
                      type="number"
                      placeholder="PPF"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="provident">
                      -Employee Provident Fund (EPF):
                    </label>
                    <input
                      value={employeeProvidentFund}
                      onChange={this.onChangeEmployeeProvidentFund}
                      id="provident"
                      type="number"
                      placeholder="EPF"
                    />
                  </div>
                  <div className="input-div1">
                    <label
                      className="personal-para"
                      htmlFor="savingCertificates"
                    >
                      -National Savings Certificates (NSC):
                    </label>
                    <input
                      value={nationalSavingCertificates}
                      onChange={this.onChangeNationalSavingCertificates}
                      id="savingCertificates"
                      type="number"
                      placeholder="Saving Certificates"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="savingFixed">
                      -Tax Saving Fixed Deposits:
                    </label>
                    <input
                      value={taxSaving}
                      onChange={this.onChangeTaxSaving}
                      id="savingFixed"
                      type="number"
                      placeholder="Saving Fixed"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="principla">
                      -Principal Repayment on Home Loan:
                    </label>
                    <input
                      value={repaymentOnHomeLoan}
                      onChange={this.onChangeRepaymentOnHomeLoan}
                      id="principla"
                      type="number"
                      placeholder="Principal Repayment on Home Loan"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="savingScheme">
                      -Equity Linked Saving Scheme (ELSS):
                    </label>
                    <input
                      value={equityLinked}
                      onChange={this.onChangeEquityLinked}
                      id="savingScheme"
                      type="number"
                      placeholder="Saving Scheme"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="tuition">
                      -Children's Tuition Fees:
                    </label>
                    <input
                      value={childrenTution}
                      onChange={this.onChangeChildrenTution}
                      id="tuition"
                      type="number"
                      placeholder="Children's Tuition Fees"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="premium">
                      2.Section 80D Deduction (Medical Insurance Premium):
                    </label>
                    <input
                      value={deductionMedicalInsurance}
                      onChange={this.onChangeDeductionMedicalInsurance}
                      id="premium"
                      type="number"
                      placeholder="Medical Insurance Premium"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="interest">
                      3.Section 80E Deduction (Interest on Education Loan):
                    </label>
                    <input
                      value={deductionEducation}
                      onChange={this.onChangeDeductionEducation}
                      id="interest"
                      type="number"
                      placeholder="Interest on Education Loan"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="donations">
                      4.Section 80G Deduction (Donations to Charitable
                      Institutions):
                    </label>
                    <input
                      value={deductionDonations}
                      onChange={this.onChangeDeductionDonations}
                      id="donations"
                      type="number"
                      placeholder="Donations to Charitable Institutions"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="account">
                      5.Section 80TTA Deduction (Interest on Savings Account):
                    </label>
                    <input
                      value={savingAccount}
                      onChange={this.onChangeSavingAccount}
                      id="account"
                      type="number"
                      placeholder="Interest on Savings Account"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="disability">
                      6.Section 80U Deduction (Disability):
                    </label>
                    <input
                      value={deductionDisability}
                      onChange={this.onChangeDeductionDisability}
                      id="disability"
                      type="number"
                      placeholder="Disability"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="homeLoan">
                      7.Section 24 Deduction (Interest on Home Loan):
                    </label>
                    <input
                      value={deductionInterestOnHomeLoan}
                      onChange={this.onChangeDeductionInterestOnHomeLoan}
                      id="homeLoan"
                      type="number"
                      placeholder="Interest on Home Loan"
                    />
                  </div>
                  <div className="input-div1">
                    <label className="personal-para" htmlFor="otherDeductions">
                      8.Other Deductions (as applicable):
                    </label>
                    <input
                      value={otherDeductions}
                      onChange={this.onChangeOtherDeductions}
                      id="otherDeductions"
                      type="number"
                      placeholder="Other Deductions"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-div">
            <button className="button" type="submit">
              submit
            </button>
          </div>
        </form>
        <p className="paraOOO">check the results here:</p>
        <div className="div">
          <div className="mainDiv">
            <div className="input-div">
              <label className="personal-para" htmlFor="name">
                Employee Name:
              </label>
              <input value={employeeName} id="name" placeholder="Name" />
            </div>
            <div className="input-div">
              <label className="personal-para" htmlFor="salary">
                Income:
              </label>
              <input value={income} id="salary" placeholder="Income" />
            </div>
            <div className="input-div">
              <label className="personal-para" htmlFor="tax">
                Tax:
              </label>
              <input value={tax} id="tax" placeholder="Tax" />
            </div>
            <div className="off">
              <div className="input-div">
                <label className="personal-para" htmlFor="net">
                  Net Salary:
                </label>
                <input value={netSal} id="net" placeholder="Net Salary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
