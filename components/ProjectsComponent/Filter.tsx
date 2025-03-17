"use client"

import { CloudName, getCloud, getLanguage, getTool, LanguageName, ToolName } from "@/constants/tools&langages";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function ProjectsFilter() {
    const allTools = Object.values(ToolName).map(name => getTool(name));
    const allLanguages = Object.values(LanguageName).map(name => getLanguage(name));
    const allClouds = Object.values(CloudName).map(name => getCloud(name));

    return(
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-w-[95%] sm:max-w-[75%] md:max-w-[50%] mx-auto">
            {allLanguages.map((language) => {
                return(
                    <ToolSelector key={language.toolName} toolName={language.toolName} toolImage={language.imageLocation} />
                )
            })}
            {allTools.map((tool) => {
                return(
                    <ToolSelector key={tool.toolName} toolName={tool.toolName} toolImage={tool.imageLocation} />
                )
            })}
            {allClouds.map((cloud) => {
                return(
                    <ToolSelector key={cloud.toolName} toolName={cloud.toolName} toolImage={cloud.imageLocation} />
                )
            })}
        </div>
    )
}

function ToolSelector(props: {
    toolName: string,
    toolImage: string,
}) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const filters = searchParams.get("filters") as string;
    const alreadyInFilters = filters ? filters.split(",").includes(props.toolName.toLowerCase()) : false;

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

      
    function handleClick() {
        let filtersArray = filters ? filters.split(",") : [];

        if (alreadyInFilters) {
            filtersArray = filtersArray.filter((filter) => filter !== props.toolName.toLowerCase());
        } else {
            filtersArray.push(props.toolName.toLowerCase());
        }
        const newFilters = filtersArray.join(",");
        const newQueryString = createQueryString("filters", newFilters);
        router.push(`${pathname}?${newQueryString}`);
    }
    return(
        <button 
            className={cn(
                "flex flex-row items-center justify-center rounded-xl border-2 border-transparent shadow-lg",
                "w-[60px] h-[25px] sm:w-[70px] sm:h-[28px] md:w-[80px] md:h-[30px]",
                "hover:border-indigo-500 cursor-pointer",
                alreadyInFilters ? "border-indigo-500" : ""
            )}
            onClick={handleClick}
        >
            <img 
                className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] mx-auto" 
                src={props.toolImage} 
                alt={props.toolName} 
            />
        </button>
    )
}