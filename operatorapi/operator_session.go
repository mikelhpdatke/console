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

package operatorapi

import (
	"fmt"

	"github.com/go-openapi/runtime/middleware"
	"github.com/mikelhpdatke/console/models"
	"github.com/mikelhpdatke/console/operatorapi/operations"
	"github.com/mikelhpdatke/console/operatorapi/operations/user_api"
)

func registerSessionHandlers(api *operations.OperatorAPI) {
	// session check
	api.UserAPISessionCheckHandler = user_api.SessionCheckHandlerFunc(func(params user_api.SessionCheckParams, session *models.Principal) middleware.Responder {
		sessionResp, err := getSessionResponse(session)
		if err != nil {
			return user_api.NewSessionCheckDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewSessionCheckOK().WithPayload(sessionResp)
	})
}

// getSessionResponse parse the token of the current session and returns a list of allowed actions to render in the UI
func getSessionResponse(session *models.Principal) (*models.OperatorSessionResponse, *models.Error) {
	// serialize output
	if session == nil {
		return nil, prepareError(errorGenericInvalidSession)
	}
	sessionResp := &models.OperatorSessionResponse{
		Status:      models.OperatorSessionResponseStatusOk,
		Operator:    true,
		Permissions: map[string][]string{},
		Features:    getListOfOperatorFeatures(),
	}
	return sessionResp, nil
}

// getListOfEnabledFeatures returns a list of features
func getListOfOperatorFeatures() []string {
	features := []string{}
	mpEnabled := getMarketplace()

	if mpEnabled != "" {
		features = append(features, fmt.Sprintf("mp-mode-%s", mpEnabled))
	}

	return features
}
