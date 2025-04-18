import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type SectionProps = HTMLAttributes<HTMLDivElement>

export const Section = ({ className, ...props }: SectionProps) => (
	<div className={cn("flex flex-col gap-3 p-3 pr-[2px] sm:pr-3", className)} {...props} />
)
