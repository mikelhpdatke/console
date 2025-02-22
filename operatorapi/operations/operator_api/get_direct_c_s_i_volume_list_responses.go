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

// GetDirectCSIVolumeListOKCode is the HTTP code returned for type GetDirectCSIVolumeListOK
const GetDirectCSIVolumeListOKCode int = 200

/*GetDirectCSIVolumeListOK A successful response.

swagger:response getDirectCSIVolumeListOK
*/
type GetDirectCSIVolumeListOK struct {

	/*
	  In: Body
	*/
	Payload *models.GetDirectCSIVolumeListResponse `json:"body,omitempty"`
}

// NewGetDirectCSIVolumeListOK creates GetDirectCSIVolumeListOK with default headers values
func NewGetDirectCSIVolumeListOK() *GetDirectCSIVolumeListOK {

	return &GetDirectCSIVolumeListOK{}
}

// WithPayload adds the payload to the get direct c s i volume list o k response
func (o *GetDirectCSIVolumeListOK) WithPayload(payload *models.GetDirectCSIVolumeListResponse) *GetDirectCSIVolumeListOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get direct c s i volume list o k response
func (o *GetDirectCSIVolumeListOK) SetPayload(payload *models.GetDirectCSIVolumeListResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetDirectCSIVolumeListOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetDirectCSIVolumeListDefault Generic error response.

swagger:response getDirectCSIVolumeListDefault
*/
type GetDirectCSIVolumeListDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetDirectCSIVolumeListDefault creates GetDirectCSIVolumeListDefault with default headers values
func NewGetDirectCSIVolumeListDefault(code int) *GetDirectCSIVolumeListDefault {
	if code <= 0 {
		code = 500
	}

	return &GetDirectCSIVolumeListDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get direct c s i volume list default response
func (o *GetDirectCSIVolumeListDefault) WithStatusCode(code int) *GetDirectCSIVolumeListDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get direct c s i volume list default response
func (o *GetDirectCSIVolumeListDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get direct c s i volume list default response
func (o *GetDirectCSIVolumeListDefault) WithPayload(payload *models.Error) *GetDirectCSIVolumeListDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get direct c s i volume list default response
func (o *GetDirectCSIVolumeListDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetDirectCSIVolumeListDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
