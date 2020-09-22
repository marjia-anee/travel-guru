import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import fakeData from '../../fakeData/fakeData';
import './DestinationDetails.css';


const DestinationDetails = () => {


    const { bookingId } = useParams();

    const data = fakeData;
    data.find(destination => destination.id === bookingId)

    const [startDate, setStartDate] = useState(new Date("2020/09/01"));
    const [endDate, setEndDate] = useState(new Date("2020/09/30"));

    // // let info = location;
    // info.find(destination => destination.id === bookingId)
    // console.log(info[bookingId].id)


    return (
        <div className="destination-details" >
            <div className = "info">
                <h1>{data[bookingId].title}</h1>
                <p>{data[bookingId].description}</p>
            </div>


            <div>
                <Form className="booking-info bg-transparent p-5">
                    <Form.Group controlId="formBasicOrigin">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" placeholder="Your Origin" />

                    </Form.Group>

                    <Form.Group controlId="formBasicDestination">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="Your Destination" />
                    </Form.Group>

                    <Form.Group className=" d-flex mt-5">
                        <p>From</p>
                        <br />

                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <br />
                        <p>To</p>
                        <br />
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </Form.Group>
                    <Link to="/booking">
                        <Button variant="warning" type="submit" className="m-4 form-control"> Start Booking </Button>
                    </Link>

                </Form>
            </div>
        </div>
    );
};

export default DestinationDetails;