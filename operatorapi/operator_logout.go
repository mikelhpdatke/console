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
	"net/http"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"
	"github.com/mikelhpdatke/console/models"
	"github.com/mikelhpdatke/console/operatorapi/operations"
	"github.com/mikelhpdatke/console/operatorapi/operations/user_api"
	"github.com/mikelhpdatke/console/restapi"
)

func registerLogoutHandlers(api *operations.OperatorAPI) {
	// logout from console
	api.UserAPILogoutHandler = user_api.LogoutHandlerFunc(func(params user_api.LogoutParams, session *models.Principal) middleware.Responder {
		// Custom response writer to expire the session cookies
		return middleware.ResponderFunc(func(w http.ResponseWriter, p runtime.Producer) {
			expiredCookie := restapi.ExpireSessionCookie()
			// this will tell the browser to clear the cookie and invalidate user session
			// additionally we are deleting the cookie from the client side
			http.SetCookie(w, &expiredCookie)
			user_api.NewLogoutOK().WriteResponse(w, p)
		})
	})
}
