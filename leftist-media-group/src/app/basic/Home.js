import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

import { row, column } from "./Home.css";

import SignUpForm from './SignUpForm.js';

export class Home extends Component {
  transactionHistoryData =  {
    labels: ["Software", "Personnel"],
    datasets: [{
        data: [50, 50],
        backgroundColor: [
          "#111111","#00d25b","#ffab00"
        ]
      }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
          borderWidth: 0
      }
    },      
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Landing </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI</a></li>
              <li className="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
        </div>

        <div className="proBanner">
          <div>
            <span className="d-flex align-items-center purchase-popup">
              <p>Sign up to volunteer with us!</p>
              <a href="leftistmediagroup.com/volunteering" rel="noopener noreferrer" target="_blank" className="btn btn-sm purchase-button ml-auto">Volunteer Now</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={require('../../assets/images/dashboard/Group126@2x.png')} className="gradient-corona-img img-fluid" alt="banner" />
                  </div>
                  <div className="col-5 col-sm-7 col-xl-8 p-0">
                    <h4 className="mb-1 mb-sm-0">Lets Overthrow Capitalism together</h4>
                    <p className="mb-0 font-weight-normal d-none d-sm-block"> The goal of overthrowing Capitalism will require many subtasks, as the only way to defeat it is through the power of love, or in other words, a multifaceted attack from every angle possible.</p>
                  </div>
                  <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                    <button className="btn btn-outline-light btn-rounded get-started-btn">See Projects</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Welcome to Leftist Media Group</h4>

              <div className="media">
                <i className="mdi mdi-earth icon-md text-info d-flex align-self-center mr-3"></i>
                
                <div className="media-body row "> 
                  <div class="column">
                    <p> Leftist Media group is dedicated to Organizing the Left and starting the Revolution. </p>
                  </div>

                  <div class="column">
                    <p> Accomplishing this task will require educating the masses on the effects of Capitalism. <br/>
                    The goal of overthrowing Capitalism will require many subtasks, as the only way to defeat it is through the power of love, or in other words, a multifaceted attack from every angle possible. </p>
                  </div>

                  <div class="column">
                    <p> There is only a finite amount of time left as Capitalism has sent us near the end of our climate catastrophe and fascist leadership path. As such, Leftist Media Group is creating a number of projects to be community lead, all focused on a specific avenue of dismantling Capitalism one brick at a time. </p>
                  </div>

                </div>

              </div>
            </div>
        </div>
      </div>
        
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Wade</h4>

                <div className="aligner-wrapper">
                  <Doughnut data={this.transactionHistoryData} options={this.transactionHistoryOptions} />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">100%</h5>
                    <p className="text-small text-muted text-center mb-0">Wade</p>
                  </div>
                </div>  
                
                <p> Wade is a community response system made to assist with the development, design, and organization of protests. Wade is the mixture of Software and personnel. </p>

                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Software</h6>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">50%</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Personnel</h6>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">50%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-1">Projects</h4>
                  <p className="text-muted mb-1">All Projects need volunteers</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="preview-list">
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-file-document"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">LMG - Memes</h6>
                            <p className="text-muted mb-0">LMG - Memes is a facebook page that shares leftist propaganda.</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">0 volunteers</p>
                            <p className="text-muted mb-0">? Tasks </p>
                            <p className="text-muted">? Issues</p>

                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-success">
                            <i className="mdi mdi-cloud-download"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Wade</h6>
                            <p className="text-muted mb-0">Community response system made to assist with the development, design, and organization of protests.</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">0 Volunteers</p>
                            <p className="text-muted mb-0">? Tasks </p>
                            <p className="text-muted">? Issues</p>

                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-info">
                            <i className="mdi mdi-clock"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Leftism Through Music</h6>
                            <p className="text-muted mb-0">This course will provide listeners with a playlist of 80+ downloadable leftist songs to listen to and reflect on centered around leftist topics.</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">0 Volunteers</p>
                            <p className="text-muted mb-0">? Tasks</p>
                            <p className="text-muted">? Issues</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Volunteering</h4>

              <div className="media">
                <i className="mdi mdi-account-multiple-plus text-info d-flex align-self-center mr-3"></i>
                
                <div className="media-body row"> 
                  <div class="column">
                    <p> How to get started </p>
                  </div>

                  <div class="column">
                    <p> Leftist Media Group is recruiting for volunteers to spread revolutionary propaganda. </p>
                  </div>

                  <div class="column">
                    <p> If you'd like to join the Revolution, send a email to an admin at LeftistMediaGroup@Gmail.com </p>                  
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <SignUpForm>
        </SignUpForm>

        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Contact</h4>
                
                <div className="row">
                  <div className="col-md-6">
                    <address>
                     	<p className="font-weight-bold">Leftist Media Group</p>
                      
                     	<h5> Coverage </h5>

                     	<p> USA </p>
                     	<p> Canada </p>
                     	<p> UK </p>
                   	</address>
                  </div>

                  <div className="col-md-6">
                    <address className="text-primary">
                      <p className="font-weight-bold"> E-mail </p>
                      <p className="mb-2"> LeftistMediaGroup@Gmail.com </p>
                      <p className="font-weight-bold"> Web Address </p>
                      <p> LeftistMediaGroup.org </p>
                    </address>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };
};

export default Home;