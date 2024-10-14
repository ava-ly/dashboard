'use client';

import { MoonIcon, SunIcon } from "lucide-react";
import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "./tooltip";
import { useState } from "react";

interface Props {
    className?: string;
}

export function Toggle({ className }: Props) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger 
                    className={className}
                    onClick={() => {
                    setIsDarkMode(prevValue => !prevValue);
                    document.body.classList.toggle('dark');
                }}>
                    {isDarkMode ? <MoonIcon /> : <SunIcon />}
                </TooltipTrigger>
                <TooltipContent>
                    {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}