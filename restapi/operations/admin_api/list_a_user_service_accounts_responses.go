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

package admin_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/mikelhpdatke/console/models"
)

// ListAUserServiceAccountsOKCode is the HTTP code returned for type ListAUserServiceAccountsOK
const ListAUserServiceAccountsOKCode int = 200

/*ListAUserServiceAccountsOK A successful response.

swagger:response listAUserServiceAccountsOK
*/
type ListAUserServiceAccountsOK struct {

	/*
	  In: Body
	*/
	Payload models.ServiceAccounts `json:"body,omitempty"`
}

// NewListAUserServiceAccountsOK creates ListAUserServiceAccountsOK with default headers values
func NewListAUserServiceAccountsOK() *ListAUserServiceAccountsOK {

	return &ListAUserServiceAccountsOK{}
}

// WithPayload adds the payload to the list a user service accounts o k response
func (o *ListAUserServiceAccountsOK) WithPayload(payload models.ServiceAccounts) *ListAUserServiceAccountsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list a user service accounts o k response
func (o *ListAUserServiceAccountsOK) SetPayload(payload models.ServiceAccounts) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListAUserServiceAccountsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = models.ServiceAccounts{}
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*ListAUserServiceAccountsDefault Generic error response.

swagger:response listAUserServiceAccountsDefault
*/
type ListAUserServiceAccountsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewListAUserServiceAccountsDefault creates ListAUserServiceAccountsDefault with default headers values
func NewListAUserServiceAccountsDefault(code int) *ListAUserServiceAccountsDefault {
	if code <= 0 {
		code = 500
	}

	return &ListAUserServiceAccountsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the list a user service accounts default response
func (o *ListAUserServiceAccountsDefault) WithStatusCode(code int) *ListAUserServiceAccountsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the list a user service accounts default response
func (o *ListAUserServiceAccountsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the list a user service accounts default response
func (o *ListAUserServiceAccountsDefault) WithPayload(payload *models.Error) *ListAUserServiceAccountsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list a user service accounts default response
func (o *ListAUserServiceAccountsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListAUserServiceAccountsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
