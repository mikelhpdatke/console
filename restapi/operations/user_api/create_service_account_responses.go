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

package user_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/mikelhpdatke/console/models"
)

// CreateServiceAccountCreatedCode is the HTTP code returned for type CreateServiceAccountCreated
const CreateServiceAccountCreatedCode int = 201

/*CreateServiceAccountCreated A successful response.

swagger:response createServiceAccountCreated
*/
type CreateServiceAccountCreated struct {

	/*
	  In: Body
	*/
	Payload *models.ServiceAccountCreds `json:"body,omitempty"`
}

// NewCreateServiceAccountCreated creates CreateServiceAccountCreated with default headers values
func NewCreateServiceAccountCreated() *CreateServiceAccountCreated {

	return &CreateServiceAccountCreated{}
}

// WithPayload adds the payload to the create service account created response
func (o *CreateServiceAccountCreated) WithPayload(payload *models.ServiceAccountCreds) *CreateServiceAccountCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create service account created response
func (o *CreateServiceAccountCreated) SetPayload(payload *models.ServiceAccountCreds) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateServiceAccountCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*CreateServiceAccountDefault Generic error response.

swagger:response createServiceAccountDefault
*/
type CreateServiceAccountDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewCreateServiceAccountDefault creates CreateServiceAccountDefault with default headers values
func NewCreateServiceAccountDefault(code int) *CreateServiceAccountDefault {
	if code <= 0 {
		code = 500
	}

	return &CreateServiceAccountDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the create service account default response
func (o *CreateServiceAccountDefault) WithStatusCode(code int) *CreateServiceAccountDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the create service account default response
func (o *CreateServiceAccountDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the create service account default response
func (o *CreateServiceAccountDefault) WithPayload(payload *models.Error) *CreateServiceAccountDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create service account default response
func (o *CreateServiceAccountDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateServiceAccountDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
