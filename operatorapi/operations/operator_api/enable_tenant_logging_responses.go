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

// EnableTenantLoggingOKCode is the HTTP code returned for type EnableTenantLoggingOK
const EnableTenantLoggingOKCode int = 200

/*EnableTenantLoggingOK A successful response.

swagger:response enableTenantLoggingOK
*/
type EnableTenantLoggingOK struct {

	/*
	  In: Body
	*/
	Payload bool `json:"body,omitempty"`
}

// NewEnableTenantLoggingOK creates EnableTenantLoggingOK with default headers values
func NewEnableTenantLoggingOK() *EnableTenantLoggingOK {

	return &EnableTenantLoggingOK{}
}

// WithPayload adds the payload to the enable tenant logging o k response
func (o *EnableTenantLoggingOK) WithPayload(payload bool) *EnableTenantLoggingOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the enable tenant logging o k response
func (o *EnableTenantLoggingOK) SetPayload(payload bool) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *EnableTenantLoggingOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*EnableTenantLoggingDefault Generic error response.

swagger:response enableTenantLoggingDefault
*/
type EnableTenantLoggingDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewEnableTenantLoggingDefault creates EnableTenantLoggingDefault with default headers values
func NewEnableTenantLoggingDefault(code int) *EnableTenantLoggingDefault {
	if code <= 0 {
		code = 500
	}

	return &EnableTenantLoggingDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the enable tenant logging default response
func (o *EnableTenantLoggingDefault) WithStatusCode(code int) *EnableTenantLoggingDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the enable tenant logging default response
func (o *EnableTenantLoggingDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the enable tenant logging default response
func (o *EnableTenantLoggingDefault) WithPayload(payload *models.Error) *EnableTenantLoggingDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the enable tenant logging default response
func (o *EnableTenantLoggingDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *EnableTenantLoggingDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
