import React, {
  Component
} from 'react';



class App extends Component {
  state = {
    loading: true,
    Infromation: null
  };

  async componentDidMount() {
    const url = "http://localhost:3001/api/getData";
    const response = await fetch(url);
    const getData = await response.json();
    this.setState({Infromation: getData.data[0], loading: false });
    console.log(getData.data[0]);
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({
        intervalIsSet: null
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    return(
      <div>
          <div>ID: {this.state.Infromation.Id} </div>
          <div>Semester: {this.state.Infromation.Semester}</div>
          <div>Payment History Date Paid: {this.state.Infromation.PaymentHistory[0]}</div>
          <div>Payment History Payment Amount: {this.state.Infromation.PaymentHistory[1]}</div>
          <div>Payment History Payment Source: {this.state.Infromation.PaymentHistory[2]}</div>
          <div>Tuition Breakdown Activity Fee: {this.state.Infromation.TuitionBreakdown[0]}</div>
          <div>Tuition Breakdown MSUSA: {this.state.Infromation.TuitionBreakdown[1]}</div>
          <div>Tuition Breakdown Technology Fee: {this.state.Infromation.TuitionBreakdown[2]}</div>
          <div>Tuition Breakdown Athletics Fee: {this.state.Infromation.TuitionBreakdown[3]}</div>
          <div>Tuition Breakdown Facilties Assesment: {this.state.Infromation.TuitionBreakdown[4]}</div>
          <div>Tuition Breakdown Student Union: {this.state.Infromation.TuitionBreakdown[5]}</div>
          <div>Tution Breakdown Health Services: {this.state.Infromation.TuitionBreakdown[6]}</div>
          <div>View Scholarships Scholarship Amount: {this.state.Infromation.ViewScholarships[0]}</div>
          <div>View Scholarships Scholarship Source: {this.state.Infromation.ViewScholarships[2]}</div>
          <div>Student Employment Routing Number: {this.state.Infromation.StudentEmployment[0]}</div>
          <div>Student Employment Hours Worked: {this.state.Infromation.StudentEmployment[1]}</div>
      </div>
      );
    }
}
export default App;