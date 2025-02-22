// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/mikelhpdatke/console/models"
)

// SubscriptionValidateOKCode is the HTTP code returned for type SubscriptionValidateOK
const SubscriptionValidateOKCode int = 200

/*SubscriptionValidateOK A successful response.

swagger:response subscriptionValidateOK
*/
type SubscriptionValidateOK struct {

	/*
	  In: Body
	*/
	Payload *models.License `json:"body,omitempty"`
}

// NewSubscriptionValidateOK creates SubscriptionValidateOK with default headers values
func NewSubscriptionValidateOK() *SubscriptionValidateOK {

	return &SubscriptionValidateOK{}
}

// WithPayload adds the payload to the subscription validate o k response
func (o *SubscriptionValidateOK) WithPayload(payload *models.License) *SubscriptionValidateOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the subscription validate o k response
func (o *SubscriptionValidateOK) SetPayload(payload *models.License) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SubscriptionValidateOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*SubscriptionValidateDefault Generic error response.

swagger:response subscriptionValidateDefault
*/
type SubscriptionValidateDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewSubscriptionValidateDefault creates SubscriptionValidateDefault with default headers values
func NewSubscriptionValidateDefault(code int) *SubscriptionValidateDefault {
	if code <= 0 {
		code = 500
	}

	return &SubscriptionValidateDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the subscription validate default response
func (o *SubscriptionValidateDefault) WithStatusCode(code int) *SubscriptionValidateDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the subscription validate default response
func (o *SubscriptionValidateDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the subscription validate default response
func (o *SubscriptionValidateDefault) WithPayload(payload *models.Error) *SubscriptionValidateDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the subscription validate default response
func (o *SubscriptionValidateDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SubscriptionValidateDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
