import React from "react";
import { CustomButtonProps } from "../types";
import { Button } from "@/components/ui/button";

function CustomButton({ title, style }: CustomButtonProps) {
  return <Button className={`${style}`}>{title}</Button>;
}

export default CustomButton;
