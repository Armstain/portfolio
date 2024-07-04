'use client'

export default function myImageLoader({src, width, quality}) {
    if(src.startsWith('https://i.ibb.co')) return src
    return `https://my-portfolio-nu-beige-20.vercel.app/${src}?w=${width}&q=${quality || 75}`
}