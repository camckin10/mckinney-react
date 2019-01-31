import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
//import PropTypes from 'prop-types';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';



class Current extends Component{
	render () {
		return(
				<Container>
					<h3>This is my current stuff </h3>
					<Row>
						{/*Adding countdown timer*/}
						<Col md="6">
						<CountdownTimer endDate={moment('01/30/2018 08:44:00', 'DD/MM/YYYY hh:mm:ss')}/>
						</Col>
						<Col md="6">Twitter Feed placed here.</Col>
					</Row>
					<hr/>
				</Container>
		)
	}
}

export default Current;