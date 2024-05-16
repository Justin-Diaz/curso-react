import { useEffect, useState } from "react"

export function App () {

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

    const [fact, setFact] = useState('lorem ipsum cat fact whatever');
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // (fetch) se utiliza para hacer peticiones http a recursos externos
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact);

                const threeFirstWords = fact.split(' ').slice(0, 3).join(' ');

                const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?
                size=50&color=red&json=true`;

                fetch(CAT_ENDPOINT_IMAGE_URL)
                    .then(res => res.json())
                    .then(response => {
                        const {url} = response
                        setImageUrl(url)
                    })
            })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {/* renderizado condicional */}
            {/* (fact && ) si fact es true, renderiza su contenido */}
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen extraida usando las primeras 3 palabras de ${fact}`}/>}
        </main>
    )
}