// export interface IProduct{
//     id: number
//     title: string
//     price: number
//     description: string
//     category: string
//     image: string
//     rating: {
//         rate: number
//         count: number
//     }
// }
export interface IProduct{
    status: string
    code: number
    total: number
    data: {
        0: {
            id: number
            name: string
            description: string
            ean: string
            upc: string
            image: string
            images: {
                0: {
                    title: string
                    description: string
                    url: string
                }

                1: {
                    title: string
                    description: string
                    url: string
                }
                2: {
                    title: string
                    description: string
                    url: string
                }

            }
            net_price: number
            taxes: string
            price: string
            categories: {
                0: string
                1: string
                2: string
                3: string
                4: string
                5: string
                6: string
                7: string
                8: string
            }
            tags: {
                0: string
                1: string
                2: string
                3: string
            }
        }
    }


}


