import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

import { row, column } from "./Home.css";

export class Education extends Component {
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
          <h3 className="page-title"> Education </h3>
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

        <div className="preview-item border-bottom">
          <div className="preview-thumbnail">
            <div className="preview-icon bg-info">
              <i className="mdi mdi-clock"></i>
            </div>
          </div>

          <div className="preview-item-content d-sm-flex flex-grow">
            <div className="flex-grow">
                <h6 className="preview-subject">Tops to explore</h6>
                <p className="text-muted mb-0"> -What is Capitalism? </p>
                <p className="text-muted mb-0"> -Anarchism </p>
                <p className="text-muted mb-0"> -Marxism </p>
                <p className="text-muted mb-0"> -Communism </p>
                <p className="text-muted mb-0"> -ACAB </p>
                <p className="text-muted mb-0"> -Revolution </p>
                <p className="text-muted mb-0"> -Workers Rights </p>
                <p className="text-muted mb-0"> -BLMm </p>
                <p className="text-muted mb-0"> -Revolutionary Thinking </p>

            </div>
          </div>
       </div>
      </div>
    );
  };
};

export default Education;