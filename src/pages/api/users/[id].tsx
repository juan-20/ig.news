import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)

    const users = [
        { id: 1, 'name': 'juan' },
        { id: 2, 'name': 'juan' },
        { id: 3, 'name': 'juan' },
    ]

    return response.json(users)
}