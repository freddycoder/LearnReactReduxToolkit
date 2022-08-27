import { Tooltip } from "@mui/material"

export interface InfoBulleProps {
    title: string
    placement?: "top" | "bottom" | "left" | "right"
    children: React.ReactNode
}

export const InfoBulle = ({title, placement, children}: InfoBulleProps) => {
    return (
        <Tooltip title={title} placement={placement}>
            <span>{children} <span style={{ color: 'white' }}>&#x24D8;</span></span>
        </Tooltip>
    )
}