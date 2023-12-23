/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags:
 *      - Hello World
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export function GET(request: Request) {
    return Response.json({ 
        status: 200,
        response: { message: "Hello World"},
        message: "ok"
    })
}

/**
 * @swagger
 * /api/hello:
 *   post:
 *     tags:
 *      - Hello World
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export function POST() {
    return Response.json({ 
        status: 200,
        response: { message: "Hello World"},
        message: "ok"
    })
}