import React from "react";
import { createPortal } from "react-dom";

interface iModalProps {}

export class Modal extends React.Component<iModalProps> {
  render() {
    return createPortal(this.props.children, document.getElementById(
      "modal"
    ) as Element);
  }
}
