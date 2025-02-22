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

// GetPodEventsOKCode is the HTTP code returned for type GetPodEventsOK
const GetPodEventsOKCode int = 200

/*GetPodEventsOK A successful response.

swagger:response getPodEventsOK
*/
type GetPodEventsOK struct {

	/*
	  In: Body
	*/
	Payload models.EventListWrapper `json:"body,omitempty"`
}

// NewGetPodEventsOK creates GetPodEventsOK with default headers values
func NewGetPodEventsOK() *GetPodEventsOK {

	return &GetPodEventsOK{}
}

// WithPayload adds the payload to the get pod events o k response
func (o *GetPodEventsOK) WithPayload(payload models.EventListWrapper) *GetPodEventsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get pod events o k response
func (o *GetPodEventsOK) SetPayload(payload models.EventListWrapper) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetPodEventsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = models.EventListWrapper{}
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*GetPodEventsDefault Generic error response.

swagger:response getPodEventsDefault
*/
type GetPodEventsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetPodEventsDefault creates GetPodEventsDefault with default headers values
func NewGetPodEventsDefault(code int) *GetPodEventsDefault {
	if code <= 0 {
		code = 500
	}

	return &GetPodEventsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get pod events default response
func (o *GetPodEventsDefault) WithStatusCode(code int) *GetPodEventsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get pod events default response
func (o *GetPodEventsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get pod events default response
func (o *GetPodEventsDefault) WithPayload(payload *models.Error) *GetPodEventsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get pod events default response
func (o *GetPodEventsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetPodEventsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
