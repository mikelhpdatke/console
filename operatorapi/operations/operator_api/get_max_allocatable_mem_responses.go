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

// GetMaxAllocatableMemOKCode is the HTTP code returned for type GetMaxAllocatableMemOK
const GetMaxAllocatableMemOKCode int = 200

/*GetMaxAllocatableMemOK A successful response.

swagger:response getMaxAllocatableMemOK
*/
type GetMaxAllocatableMemOK struct {

	/*
	  In: Body
	*/
	Payload *models.MaxAllocatableMemResponse `json:"body,omitempty"`
}

// NewGetMaxAllocatableMemOK creates GetMaxAllocatableMemOK with default headers values
func NewGetMaxAllocatableMemOK() *GetMaxAllocatableMemOK {

	return &GetMaxAllocatableMemOK{}
}

// WithPayload adds the payload to the get max allocatable mem o k response
func (o *GetMaxAllocatableMemOK) WithPayload(payload *models.MaxAllocatableMemResponse) *GetMaxAllocatableMemOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get max allocatable mem o k response
func (o *GetMaxAllocatableMemOK) SetPayload(payload *models.MaxAllocatableMemResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetMaxAllocatableMemOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetMaxAllocatableMemDefault Generic error response.

swagger:response getMaxAllocatableMemDefault
*/
type GetMaxAllocatableMemDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetMaxAllocatableMemDefault creates GetMaxAllocatableMemDefault with default headers values
func NewGetMaxAllocatableMemDefault(code int) *GetMaxAllocatableMemDefault {
	if code <= 0 {
		code = 500
	}

	return &GetMaxAllocatableMemDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get max allocatable mem default response
func (o *GetMaxAllocatableMemDefault) WithStatusCode(code int) *GetMaxAllocatableMemDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get max allocatable mem default response
func (o *GetMaxAllocatableMemDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get max allocatable mem default response
func (o *GetMaxAllocatableMemDefault) WithPayload(payload *models.Error) *GetMaxAllocatableMemDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get max allocatable mem default response
func (o *GetMaxAllocatableMemDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetMaxAllocatableMemDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
