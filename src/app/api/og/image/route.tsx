import { ImageResponse } from "@vercel/og"
import OGImage from "@/components/api/image"

/**
 * @swagger
 * /api/og/image:
 *   get:
 *     tags:
 *      - Image
 *     description: Return image with text
 *     responses:
 *       200:
 *         description: Image with text
 *         content:
 *          image/png:
 *             schema:
 *              type: string
 *              format: binary
 *       500:
 *         description: Internal server error when creating image before server
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      status:
 *                          type: integer
 *                          description: Status Number
 *                      statusText:
 *                          type: string
 *                          description: Status text, Not Found, Ok, Internal Error
 *     parameters:
 *      - in: query
 *        name: title
 *        schema:
 *         - type: string
 *        description: Message in image
 */
export function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    try {
        const image = new ImageResponse(<OGImage searchParams={searchParams} />, {
            width: 1020,
            height: 170,
            headers: {
                "cache-control": "no-store, max-age=0"
            }
        })

        return image
    } catch (error: any) {
        console.error(error)

        return new Response(`Failed to generate the image`, {
            status: 500,
            statusText: "Internal server error"
        })
    }
}