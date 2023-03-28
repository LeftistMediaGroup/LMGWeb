import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

import { row, column } from "./Home.css";

export class Volunteering extends Component {
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
          <h3 className="page-title"> Volunteering </h3>
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

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Volunteering</h4>

              <div className="media">
                <i className="mdi mdi-account-multiple-plus text-info d-flex align-self-center mr-3"></i>
                
                <div class ="row" className="media-body"> 
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

        <div className="col-12 grid-margin stretch-card">
          <iframe data-w-type="embedded" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" display="block" overflow="auto" src="https://0qx4o.mjt.lu/wgt/0qx4o/34u/form?c=354f22d0" width="100%"></iframe>
          <script type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js"></script>
        </div>

      </div>
    );
  };
};

export default Volunteering;