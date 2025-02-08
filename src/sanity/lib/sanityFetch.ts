import {client } from "@/sanity/lib/client"

export async function sanityFetch({query , param = {}}: {query: string , param?: any}) {
    return await client.fetch(query, param)
}