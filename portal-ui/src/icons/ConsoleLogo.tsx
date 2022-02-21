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

import React, { SVGProps } from "react";

const ConsoleLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
    width={121.755}
    height={29.822}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"Layer 1"}</title>
    <text
      transform="matrix(2.42041 0 0 2.73506 -451.383 -579.847)"
      stroke="#000"
      xmlSpace="preserve"
      fontFamily="Noto Sans JP"
      fontSize={24}
      y={316.629}
      x={278.185}
      strokeWidth={0}
      fill="#fff"
    >
      {"VASI DataLake"}
    </text>
    <text
      style={{
        cursor: "move",
      }}
      xmlSpace="preserve"
      fontFamily="Noto Sans JP"
      fontSize={16}
      y={19.69}
      x={22.382}
      strokeWidth={0}
      stroke="#000"
      fill="#fff"
    >
      {"VASI Datalake"}
    </text>
  </svg>
  );
};

export default ConsoleLogo;
