import React, { Component } from 'react';
import { Row } from "react-bootstrap";
import * as moment from 'moment';
import './calenderComponent.css';
class CalenderCompoennt extends Component {
    state = {
        week1: [1, 2, 3, 4, 5, 6, 7],
        now: moment()
    }
    weekDayHeaders = moment.weekdaysShort().map((weekday) => {
        return <th>{weekday}</th>
    });
    daysInMonthAmount = moment().daysInMonth();
    firstDay = moment(this.state.now).startOf('month').format('d'); // return the first day of the month
    lastDay = moment(this.state.now).endOf('month').format('d'); // last day of the month

    render() {

        let daysInMonth = [];
        let blankDaysBefore = [];
        let blankDaysAfter = [];
        let totalDays = [];
        // defining the set of weeks arrays 
        let firstWeek = [];
        let secondWeek = [];
        let thirdWeek = [];
        let fouthWeek = [];
        let fifthWeek = [];
        let sixthWeek = [];

        //  blanks of the beg of the month 
        for (var i = 0; i < this.firstDay; i++) {
            blankDaysBefore.push(<td></td>);
        }

        // month date data 
        for (i = 1; i <= this.daysInMonthAmount; i++) {
            let yearCurrent = this.state.now.format("Y");
            let monthCurrent = this.state.now.format("M");
            let dateCurrent = this.state.now.format("D");
            if (dateCurrent == i) {
                daysInMonth.push(<td className="current_date">{i.toString()}</td>)
            } else {
                daysInMonth.push(<td >{i.toString()}</td>)
            }

        }

        // blanks after end of month
        for (i = 6; i > this.lastDay; i--) {
            blankDaysAfter.push(<td></td>);
        }
        // console.log(this.lastDay);
        totalDays = [...blankDaysBefore, ...daysInMonth, ...blankDaysAfter];

        totalDays.forEach((day, i) => {
            if (i < 7) {
                firstWeek.push(day)
            }
            else if (i < 14) {
                secondWeek.push(day)
            } else if (i < 21) {
                thirdWeek.push(day)
            } else if (i < 28) {
                fouthWeek.push(day)
            } else if (i < 35) {
                fifthWeek.push(day)
            } else {
                sixthWeek.push(day)
            }
        })
        return (
            <React.Fragment>
                <div>
                    <Row >
                        <table className="table-condensed table-bordered table-striped">
                            <thead>
                                <tr>
                                    {this.weekDayHeaders}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {firstWeek}
                                </tr>
                                <tr>
                                    {secondWeek}
                                </tr>
                                <tr>
                                    {thirdWeek}
                                </tr>
                                <tr>
                                    {fouthWeek}
                                </tr>
                                <tr>
                                    {fifthWeek}
                                </tr>
                                <tr>
                                    {sixthWeek}
                                </tr>
                            </tbody>
                        </table>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default CalenderCompoennt;