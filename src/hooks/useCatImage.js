import { useEffect, useState } from "react";

// para recuperar la imagen cada vez que tenemos una cita nueva
export function useCatImage({ fact }) {

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ');

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])

    return {imageUrl}
}
