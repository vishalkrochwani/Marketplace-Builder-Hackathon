import { defineQuery, groq } from "next-sanity";


export const allProducts = defineQuery (`*[_type ==  "product"] {
    _id,
    name,
    description,}`); 
export const one = defineQuery(`*[_type == "product"][2..2] {
    _id,
    name,
    description,
    price,
    slug,
    "image": image.asset->url,
    }`);
export const one1 = defineQuery(`*[_type == "product"][15..15] {
    _id,
    name,
    description,
    price,
    slug,
    "image": image.asset->url,
    }`);
export const two = defineQuery(`*[_type == "product"][3..4] {
    _id,
    name,
    description,
    price,
    slug,
    "image": image.asset->url,
    }`);
export const four = defineQuery(`*[_type == "product"][9..12] {
    _id,
    name,
    description,
    price,
    slug,
    "image": image.asset->url,
    }`);
export const sixteen = defineQuery(`*[_type == "product"][0..15] {
    _id,
    name,
    description,
    price,
    discountPercentage,
    slug,
    "image": image.asset->url,
    }`);