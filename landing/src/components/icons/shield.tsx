import React from "react"
import type { Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

export const ShieldIcon: React.FC<Icon.CommonProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={cn("fill-current", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6495 1.73033C15.8759 1.64543 16.1254 1.64543 16.3518 1.73033L27.0184 5.73033C27.4087 5.87669 27.6673 6.24981 27.6673 6.66666V16C27.6673 20.4464 24.7189 24.0336 21.9925 26.4192C20.6083 27.6304 19.2288 28.5783 18.1973 29.223C17.6805 29.546 17.2485 29.7945 16.9433 29.9634C16.7906 30.0479 16.6696 30.1126 16.5853 30.1569C16.5431 30.179 16.5102 30.196 16.4871 30.2079L16.4598 30.2217L16.4519 30.2257L16.4494 30.227C16.4491 30.2271 16.4479 30.2277 16.0007 29.3333C15.5534 30.2277 15.5531 30.2276 15.5528 30.2274L15.5494 30.2257L15.5415 30.2217L15.5142 30.2079C15.4911 30.196 15.4582 30.179 15.416 30.1569C15.3317 30.1126 15.2107 30.0479 15.058 29.9634C14.7528 29.7945 14.3208 29.546 13.804 29.223C12.7725 28.5783 11.393 27.6304 10.0088 26.4192C7.2824 24.0336 4.33398 20.4464 4.33398 16V6.66666C4.33398 6.24981 4.59256 5.87669 4.98286 5.73033L15.6495 1.73033ZM16.0007 29.3333L15.5528 30.2274C15.8343 30.3682 16.1663 30.3685 16.4479 30.2277L16.0007 29.3333ZM15.0007 27.6119C14.9559 27.5842 14.9103 27.5559 14.864 27.527C13.8954 26.9217 12.6083 26.0362 11.3258 24.9141C8.7189 22.633 6.33398 19.5536 6.33398 16V7.35966L15.0007 4.10966V27.6119ZM17.0007 4.10966V27.6119C17.0454 27.5842 17.091 27.5559 17.1373 27.527C18.1059 26.9217 19.393 26.0362 20.6755 24.9141C23.2824 22.633 25.6673 19.5536 25.6673 16V7.35966L17.0007 4.10966Z"
      />
    </svg>
  )
}

ShieldIcon.displayName = "ShieldIcon"