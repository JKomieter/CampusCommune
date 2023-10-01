"use client";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb"


const fileTypes =
    ["PDFs", "Images", "DOCX/Word Documents", "Presentations", "Spreadsheets", "Archives/ZIP", "Videos", "Audio", "Others"]

const FilterResults = () => {

    const [selected, setSelected] = useState<string[]>([]);

    return (
        <div className="rounded-md shadow-md w-full p-2 bg-white flex flex-col gap-4 text-neutral-700">
            <div className="flex flex-row gap-1">
                <TbAdjustmentsHorizontal size={20} className="text-neutral-500" />
                <h3 className="font-semibold">Filters</h3>
            </div>
            <div className="flex flex-col gap-2 text-[11px]">
                {
                    fileTypes.map((type) => (
                        <Checkbox key={type} onValueChange={() => setSelected((prev) => [...prev, type])} radius="md">{type}</Checkbox>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterResults;