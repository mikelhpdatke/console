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

// GetBucketEncryptionInfoOKCode is the HTTP code returned for type GetBucketEncryptionInfoOK
const GetBucketEncryptionInfoOKCode int = 200

/*GetBucketEncryptionInfoOK A successful response.

swagger:response getBucketEncryptionInfoOK
*/
type GetBucketEncryptionInfoOK struct {

	/*
	  In: Body
	*/
	Payload *models.BucketEncryptionInfo `json:"body,omitempty"`
}

// NewGetBucketEncryptionInfoOK creates GetBucketEncryptionInfoOK with default headers values
func NewGetBucketEncryptionInfoOK() *GetBucketEncryptionInfoOK {

	return &GetBucketEncryptionInfoOK{}
}

// WithPayload adds the payload to the get bucket encryption info o k response
func (o *GetBucketEncryptionInfoOK) WithPayload(payload *models.BucketEncryptionInfo) *GetBucketEncryptionInfoOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get bucket encryption info o k response
func (o *GetBucketEncryptionInfoOK) SetPayload(payload *models.BucketEncryptionInfo) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetBucketEncryptionInfoOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetBucketEncryptionInfoDefault Generic error response.

swagger:response getBucketEncryptionInfoDefault
*/
type GetBucketEncryptionInfoDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetBucketEncryptionInfoDefault creates GetBucketEncryptionInfoDefault with default headers values
func NewGetBucketEncryptionInfoDefault(code int) *GetBucketEncryptionInfoDefault {
	if code <= 0 {
		code = 500
	}

	return &GetBucketEncryptionInfoDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get bucket encryption info default response
func (o *GetBucketEncryptionInfoDefault) WithStatusCode(code int) *GetBucketEncryptionInfoDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get bucket encryption info default response
func (o *GetBucketEncryptionInfoDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get bucket encryption info default response
func (o *GetBucketEncryptionInfoDefault) WithPayload(payload *models.Error) *GetBucketEncryptionInfoDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get bucket encryption info default response
func (o *GetBucketEncryptionInfoDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetBucketEncryptionInfoDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
