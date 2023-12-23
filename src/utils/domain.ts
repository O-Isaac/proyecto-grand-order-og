function Host(host: string, protocol: "http" | "https"): string {
    return `${protocol}://${host}`
}

export function getHostname() {
    const local = Host("localhost:3000", "http")
    const production = Host("services.proyectograndorder.es", "https")
    const preview = Host(process.env.VERCEL_URL ?? "", "https")

    if (process.env.VERCEL_ENV === "production") {
        return production
    }

    if (process.env.NODE_ENV == "development" && !process.env.VERCEL_ENV) {
        return local
    }

    return preview || production
}