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

// UpdateTenantCreatedCode is the HTTP code returned for type UpdateTenantCreated
const UpdateTenantCreatedCode int = 201

/*UpdateTenantCreated A successful response.

swagger:response updateTenantCreated
*/
type UpdateTenantCreated struct {
}

// NewUpdateTenantCreated creates UpdateTenantCreated with default headers values
func NewUpdateTenantCreated() *UpdateTenantCreated {

	return &UpdateTenantCreated{}
}

// WriteResponse to the client
func (o *UpdateTenantCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*UpdateTenantDefault Generic error response.

swagger:response updateTenantDefault
*/
type UpdateTenantDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewUpdateTenantDefault creates UpdateTenantDefault with default headers values
func NewUpdateTenantDefault(code int) *UpdateTenantDefault {
	if code <= 0 {
		code = 500
	}

	return &UpdateTenantDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the update tenant default response
func (o *UpdateTenantDefault) WithStatusCode(code int) *UpdateTenantDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the update tenant default response
func (o *UpdateTenantDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the update tenant default response
func (o *UpdateTenantDefault) WithPayload(payload *models.Error) *UpdateTenantDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the update tenant default response
func (o *UpdateTenantDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *UpdateTenantDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
