import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import './Card.scss';

export default class CardUI extends Component {
    render() {
        const { flag, name, code, capital, region } = this.props;
        return (
            <div className="card">
                <Card>
                    {<CardImg top width="100%" src={flag} alt="Card image cap" />}
                    <CardBody>
                        <hr className="my-2" />
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="my-2">{code}</CardSubtitle>
                        <CardText>Capital: {capital}</CardText>
                        <CardText>Region: {region}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
