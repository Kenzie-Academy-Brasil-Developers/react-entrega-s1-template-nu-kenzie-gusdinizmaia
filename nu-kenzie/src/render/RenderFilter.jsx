import React from "react";

import { RenderCards } from "./RenderCards";

export function RenderFilter({ array, callback }) {
  return <RenderCards array={array} callback={callback} />;
}
