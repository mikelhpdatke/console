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

// CreateTenantOKCode is the HTTP code returned for type CreateTenantOK
const CreateTenantOKCode int = 200

/*CreateTenantOK A successful response.

swagger:response createTenantOK
*/
type CreateTenantOK struct {

	/*
	  In: Body
	*/
	Payload *models.CreateTenantResponse `json:"body,omitempty"`
}

// NewCreateTenantOK creates CreateTenantOK with default headers values
func NewCreateTenantOK() *CreateTenantOK {

	return &CreateTenantOK{}
}

// WithPayload adds the payload to the create tenant o k response
func (o *CreateTenantOK) WithPayload(payload *models.CreateTenantResponse) *CreateTenantOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create tenant o k response
func (o *CreateTenantOK) SetPayload(payload *models.CreateTenantResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateTenantOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*CreateTenantDefault Generic error response.

swagger:response createTenantDefault
*/
type CreateTenantDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewCreateTenantDefault creates CreateTenantDefault with default headers values
func NewCreateTenantDefault(code int) *CreateTenantDefault {
	if code <= 0 {
		code = 500
	}

	return &CreateTenantDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the create tenant default response
func (o *CreateTenantDefault) WithStatusCode(code int) *CreateTenantDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the create tenant default response
func (o *CreateTenantDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the create tenant default response
func (o *CreateTenantDefault) WithPayload(payload *models.Error) *CreateTenantDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create tenant default response
func (o *CreateTenantDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateTenantDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
