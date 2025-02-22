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

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// TenantStatus tenant status
//
// swagger:model tenantStatus
type TenantStatus struct {

	// drives healing
	DrivesHealing int32 `json:"drives_healing,omitempty"`

	// drives offline
	DrivesOffline int32 `json:"drives_offline,omitempty"`

	// drives online
	DrivesOnline int32 `json:"drives_online,omitempty"`

	// health status
	HealthStatus string `json:"health_status,omitempty"`

	// usage
	Usage *TenantStatusUsage `json:"usage,omitempty"`

	// write quorum
	WriteQuorum int32 `json:"write_quorum,omitempty"`
}

// Validate validates this tenant status
func (m *TenantStatus) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateUsage(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *TenantStatus) validateUsage(formats strfmt.Registry) error {
	if swag.IsZero(m.Usage) { // not required
		return nil
	}

	if m.Usage != nil {
		if err := m.Usage.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("usage")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("usage")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this tenant status based on the context it is used
func (m *TenantStatus) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateUsage(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *TenantStatus) contextValidateUsage(ctx context.Context, formats strfmt.Registry) error {

	if m.Usage != nil {
		if err := m.Usage.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("usage")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("usage")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *TenantStatus) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *TenantStatus) UnmarshalBinary(b []byte) error {
	var res TenantStatus
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// TenantStatusUsage tenant status usage
//
// swagger:model TenantStatusUsage
type TenantStatusUsage struct {

	// capacity
	Capacity int64 `json:"capacity,omitempty"`

	// capacity usage
	CapacityUsage int64 `json:"capacity_usage,omitempty"`

	// raw
	Raw int64 `json:"raw,omitempty"`

	// raw usage
	RawUsage int64 `json:"raw_usage,omitempty"`
}

// Validate validates this tenant status usage
func (m *TenantStatusUsage) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this tenant status usage based on context it is used
func (m *TenantStatusUsage) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *TenantStatusUsage) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *TenantStatusUsage) UnmarshalBinary(b []byte) error {
	var res TenantStatusUsage
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
