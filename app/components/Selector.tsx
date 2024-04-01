import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import React from 'react'

const Selector = () => {
  return (
    <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Quantity" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
        </SelectContent>
    </Select>

  )
}

export default Selector
