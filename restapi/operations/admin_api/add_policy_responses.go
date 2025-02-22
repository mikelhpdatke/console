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

// AddPolicyCreatedCode is the HTTP code returned for type AddPolicyCreated
const AddPolicyCreatedCode int = 201

/*AddPolicyCreated A successful response.

swagger:response addPolicyCreated
*/
type AddPolicyCreated struct {

	/*
	  In: Body
	*/
	Payload *models.Policy `json:"body,omitempty"`
}

// NewAddPolicyCreated creates AddPolicyCreated with default headers values
func NewAddPolicyCreated() *AddPolicyCreated {

	return &AddPolicyCreated{}
}

// WithPayload adds the payload to the add policy created response
func (o *AddPolicyCreated) WithPayload(payload *models.Policy) *AddPolicyCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the add policy created response
func (o *AddPolicyCreated) SetPayload(payload *models.Policy) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *AddPolicyCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*AddPolicyDefault Generic error response.

swagger:response addPolicyDefault
*/
type AddPolicyDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewAddPolicyDefault creates AddPolicyDefault with default headers values
func NewAddPolicyDefault(code int) *AddPolicyDefault {
	if code <= 0 {
		code = 500
	}

	return &AddPolicyDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the add policy default response
func (o *AddPolicyDefault) WithStatusCode(code int) *AddPolicyDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the add policy default response
func (o *AddPolicyDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the add policy default response
func (o *AddPolicyDefault) WithPayload(payload *models.Error) *AddPolicyDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the add policy default response
func (o *AddPolicyDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *AddPolicyDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
