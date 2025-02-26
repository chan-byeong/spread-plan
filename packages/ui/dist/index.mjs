"use client";

// src/components/buttons.tsx
import { jsx } from "react/jsx-runtime";
var Card = ({
  children,
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ jsx("div", { className: `bg-white rounded-lg shadow p-6 ${className}`, ...props, children });
};
export {
  Card
};
//# sourceMappingURL=index.mjs.map