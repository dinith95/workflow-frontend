import React, { Component } from 'react';
import AvatarComponent from './avatarComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './approvalSection.css';

// commented by dinith : getting the data from the mock.js standered template
// const ApprovedArray = [
//   {
//     name: 'Dr. Ruwan Wickramarachchi',
//     title: 'HOD'
//   },
//   {
//     name: 'Dr. Ruwan Wickramarachchi',
//     title: 'HOD'
//   },
//   {
//     name: 'Dr. Ruwan Wickramarachchi',
//     title: 'HOD'
//   }
// ];

// const PendingArray = [
//   {
//     name: 'Dr. Dilani Wickramarachchi',
//     title: 'Treasure'
//   },
//   {
//     name: 'Dr. Dilani Wickramarachchi',
//     title: 'Treasure'
//   }
// ];

class ApprovalSectionComponent extends Component {
  state = {};

  renderAvetarComponentApprove = () => {
    // change the logic to fetch data from the props : dinith 

    const { eventApprovalInfo } = this.props.event;
    // const arr = [];
    // ApprovedArray.forEach((item, index) => {
    //   const key = index;
    //   arr.push(
    //     <AvatarComponent key={key} Name={item.name} Title={item.title} />
    //   );
    // });

    return eventApprovalInfo
      .filter(info => {
        return info.status === 'A';
      })
      .map((info, index) => {
        return (
          <AvatarComponent key={index} Name={info.name} Title={info.title} />
        );
      });

    // end of modification 
  };

  renderAvetarComponentPending = () => {
    // change the logic to fetch data from the props : dinith 
    // const arr = [];
    // PendingArray.forEach((item, index) => {
    //   const key = index;
    //   arr.push(
    //     <AvatarComponent key={key} Name={item.name} Title={item.title} />
    //   );
    // });
    const { eventApprovalInfo } = this.props.event;


    return eventApprovalInfo
      .filter(info => {
        return info.status === 'NA';
      })
      .map((info, index) => {
        return (
          <AvatarComponent key={index} Name={info.name} Title={info.title} />
        );
      });
  };

  render() {
    const componentsApprove = this.renderAvetarComponentApprove();
    const componentsPending = this.renderAvetarComponentPending();

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p className="Label"> Approved by - </p>
              <div className="ApprovalSection">{componentsApprove}</div>
            </div>
            <div className="col-sm">
              <p className="Label"> Pending Approval - </p>
              <div className="ApprovalSection">{componentsPending}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ApprovalSectionComponent;
