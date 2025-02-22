// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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

import { Box, Tooltip } from "@mui/material";
import React from "react";

const CounterCard = ({
  counterValue,
  label = "",
  icon = null,
}: {
  counterValue: string | number;
  label?: any;
  icon?: any;
}) => {
  return (
    <Box
      sx={{
        fontFamily: "Lato,sans-serif",
        color: "#07193E",
        maxWidth: "300px",
        minHeight: "200px",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "default",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "200px",
          display: "flex",
          width: "100%",
          padding: {
            sm: "0 8px 0 8px",
            xs: "0 10px 0 10px",
          },
          position: "absolute",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexFlow: "column",
            marginTop: "32px",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {label}
          </Box>

          <Tooltip title={counterValue} placement="bottom" enterDelay={500}>
            <Box
              sx={{
                fontSize: {
                  xl: "55px",
                  lg: "40px",
                  md: "36px",
                  sm: "22px",
                  xs: "14px",
                },
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: {
                  md: 187,
                  xs: 200,
                },
              }}
            >
              {counterValue}
            </Box>
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            marginTop: "26px",
            maxWidth: "26px",
            "& .min-icon": {
              width: "16px",
              height: "16px",
            },
          }}
        >
          {icon}
        </Box>
      </Box>
    </Box>
  );
};

export default CounterCard;
