"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Dropdown() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className=" text-white">Departemen</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Departemen</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="kewirausahaan">
            Kewirausahaan
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ppsdm"><a href="/ppsdm">PPSDM</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="humas">Humas</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sosmas">Sosmas</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="kerohanian">
            Kerohanian
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="kominfo">Kominfo</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mikat">Mikat</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
