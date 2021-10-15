// JavaScript source code
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import  { Component } from 'react';
import "./Form.css";
import logo from './logo.png';


/*
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
fullName:null        }
    }

    
}

handleSubmit = (event) => {
    event.preventDefault()
}

handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState(
        {
            [event.target.name]: event.target.value
        }
    )
}
*/
class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: props.Email,
            FullName: "",
            Address: "",
            City: "",
            ContactNumber: "",
            Faculty: "",
            Guardian: "",
            GuardianProfession: "",
            OLResults: "",
            StudentJoinDate: "",
            PostalCode: "",
            Province: "",
            Stream: "",
            Degree: "",
            GuardianContactno: "",
            ALResults: "",
            UniversityforrelatedDegree: "",
            Department: "",
            isLoading: false,
            Form: []
        }
    }
    updateFullName(event) {
        this.setState({
            FullName: event.target.FullName
        });
    }
    updateEmail(event) {
        this.setState({
            Email: event.target.Email
        });
    }
    updateAddress(event) {
        this.setState({
            Address: event.target.Address
        });
    }
    updateCity(event) {
        this.setState({
            City: event.target.City
        });

    }
    updateContactNumber(event) {
        this.setState({
            ContactNumber: event.target.ContactNumber

        });
    }
    updateFaculty(event) {
        this.setState({
            Faculty: event.target.Faculty
        });
    }
    updateGuardian(event) {
        this.setState({
            Guardian: event.target.Guardian

        });
    }
    updateGuardianProfession(event) {
        this.setState({
            GuardianProfession: event.target.GuardianProfession

        });
    }
    updateOLResults(event) {
        this.setState({
            OLResults: event.target.OLResults

        });
    }
    updateStudentJoinDate(event) {
        this.setState({
            StudentJoinDate: event.target.StudentJoinDate

        });
    }
    updatePostalCode(event) {
        this.setState({
            PostalCode: event.target.PostalCode

        });
    }
    updateProvince(event) {
        this.setState({
            Province: event.target.Province

        });
    }
    updateStream(event) {
        this.setState({
            Stream: event.target.Stream

        });
    }
    updateDegree(event) {
        this.setState({
            Degree: event.target.Degree

        });
    }
    updateGuardianContactNo(event) {
        this.setState({
            GuardianContactno: event.target.GuardianContactno

        });
    }
    updateALResults(event) {
        this.setState({
            ALResults: event.target.ALResults

        });
    }
    updateUniversityforRelatedDegree(event) {
        this.setState({
            UniversityforrelatedDegree: event.target.UniversityforrelatedDegree

        });
    }
    updateDepartment(event) {
        this.setState({
            Department: event.target.Department

        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    Form: result
                });
            });
    }



    render() {

        const { Form } = this.state;
        if (!isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (

                <div className='form-content-right' >

                    <img src="logo.png" alt="NSBM Logo" height="80" width="160" />


                    <h1>Student Online Registration Portal</h1>

                    <form>
                        <div id='container1'>

                            <div className='left'>
                                <label><label1>*</label1>Full Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <input type='text' name='FullName' value={this.state.FullName} onChange={this.updateFullName.bind(this)} required />
                                </label>

                            </div>

                            <div className='right'>
                                <label><label1>*</label1>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='email' name='FEmail' value={this.state.Email} onChange={this.updateEmail.bind(this)} required />
                                </label></div>

                            <br />  <br />
                        </div>

                        <div id='container2'>

                            <div className='left'>
                                <label><label1>*</label1>Street Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type='text' name='Address' value={this.state.Address} onChange={this.updateAddress.bind(this)} required />
                                </label></div>

                            <div className='right'>
                                <label>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='City' value={this.state.City} onChange={this.updateCity.bind(this)} />
                                </label></div>
                            <br /><br />
                        </div>

                        <div id='container3'>

                            <div className='left'>
                                <label><label1>*</label1>Contact Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type='text' name='ContactNumber' value={this.state.ContactNumber} onChange={this.updateContactNumber.bind(this)} required />
                                </label></div>

                            <div className='right'>
                                <label><label1>*</label1>Faculty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                <input type='text' name='Faculty' value={this.state.Faculty} onChange={this.updateFaculty.bind(this)} required />
                                </label></div><br /><br />
                        </div>

                        <div id='container4'>

                            <div className='left'>
                                <label><label1>*</label1>Guardian&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Guardian' value={this.state.Guardian} onChange={this.updateGuardian.bind(this)} required />
                                </label></div>

                            <div className='right'>
                                <label><label1>*</label1>Guardian's Profession&nbsp;&nbsp;&nbsp;&nbsp;



                <input type='text' name='GuardianProfession' value={this.state.GuardianProfession} onChange={this.updateGuardianProfession.bind(this)} />
                                </label></div><br /><br />
                        </div>


                        <div id='container5'>

                            <div className='left'>
                                <label><label1>*</label1>O/L Results&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Results2' value={this.state.OLResults} onChange={this.updateOLResults.bind(this)} required />
                                </label></div>

                            <div className='right'>
                                <label><label1>*</label1>Student Join Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <input type='text' name='StudentJoinDate' value={this.state.StudentJoinDate} onChange={this.updateStudentJoinDate.bind(this)} required />
                                </label></div><br /><br />
                        </div>

                        <div id='container6'>

                            <div className='left'>
                                <label>Postal Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='PostalCode' value={this.state.PostalCode} onChange={this.updatePostalCode.bind(this)} /></label></div>

                            <div className='right'>
                                <label>Province&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                <input type='text' name='Province' value={this.state.Province} onChange={this.updateProvince.bind(this)} /></label></div>


                            <br />  <br />
                        </div>

                        <div id='container7'>

                            <div className='left'>
                                <label><label1>*</label1>Sream&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Stream' value={this.state.Stream} onChange={this.updateStream.bind(this)} required />
                                </label></div>

                            <div className='right'>
                                <label><label1>*</label1>Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Degree' value={this.state.Degree} onChange={this.updateDegree.bind(this)} required />
                                </label></div><br />  <br />
                        </div>

                        <div id='container8'>

                            <div className='left'>
                                <label><label1>*</label1>Guardian's Contact Number &nbsp;
                <input type='text' name='GuardianContactno' value={this.state.GuardianContactno} onChange={this.updateGuardianContactNo.bind(this)} required />
                                </label></div>

                            <div className='right'>
                                <label><label1>*</label1>A/L Results&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type='text' name='Results' value={this.state.ALResults} onChange={this.updateALResults.bind(this)} required />
                                </label></div><br /><br />
                        </div>

                        <div id='container9'>

                            <div className='left'>
                                <label><label1>*</label1>University for related Degree&nbsp;
                <input type='text' name='UniversityforrelatedDegree' value={this.state.UniversityforrelatedDegree} onChange={this.updateUniversityofrelatedDegree.bind(this)} />
                                </label></div>

                            <div className='right'>
                                <label>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                <input type='text' name='Department' value={this.state.Department} onChange={this.updateDepartment.bind(this)} />
                                </label></div><br />  <br />
                        </div>

                        <br />




                        <b> Create the student after confirmation</b>
                        <br />
                        <div id="container10">

                            <button className='submitbutton' type='submit'>Create Student</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='cancelbutton' type='reset'>Cancel</button>

                        </div>
                        <div className="Loader">
                            <div className="icon">

                            </div>
                        </div>

                    </form>
                </div>

            )
        }
    }

}
export default App;
