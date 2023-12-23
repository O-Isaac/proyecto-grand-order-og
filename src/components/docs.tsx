"use client"

import SwagerUI from "swagger-ui-react"
import 'swagger-ui-react/swagger-ui.css'

export default function Docs ({ spec }: { spec: Record<string, any> }) {
    return <SwagerUI spec={spec} />
}