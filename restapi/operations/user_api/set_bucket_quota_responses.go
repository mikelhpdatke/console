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

// SetBucketQuotaOKCode is the HTTP code returned for type SetBucketQuotaOK
const SetBucketQuotaOKCode int = 200

/*SetBucketQuotaOK A successful response.

swagger:response setBucketQuotaOK
*/
type SetBucketQuotaOK struct {

	/*
	  In: Body
	*/
	Payload *models.Bucket `json:"body,omitempty"`
}

// NewSetBucketQuotaOK creates SetBucketQuotaOK with default headers values
func NewSetBucketQuotaOK() *SetBucketQuotaOK {

	return &SetBucketQuotaOK{}
}

// WithPayload adds the payload to the set bucket quota o k response
func (o *SetBucketQuotaOK) WithPayload(payload *models.Bucket) *SetBucketQuotaOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the set bucket quota o k response
func (o *SetBucketQuotaOK) SetPayload(payload *models.Bucket) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SetBucketQuotaOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*SetBucketQuotaDefault Generic error response.

swagger:response setBucketQuotaDefault
*/
type SetBucketQuotaDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewSetBucketQuotaDefault creates SetBucketQuotaDefault with default headers values
func NewSetBucketQuotaDefault(code int) *SetBucketQuotaDefault {
	if code <= 0 {
		code = 500
	}

	return &SetBucketQuotaDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the set bucket quota default response
func (o *SetBucketQuotaDefault) WithStatusCode(code int) *SetBucketQuotaDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the set bucket quota default response
func (o *SetBucketQuotaDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the set bucket quota default response
func (o *SetBucketQuotaDefault) WithPayload(payload *models.Error) *SetBucketQuotaDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the set bucket quota default response
func (o *SetBucketQuotaDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SetBucketQuotaDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
