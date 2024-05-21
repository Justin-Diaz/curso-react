import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
    const [fact, setFact] = useState('Hechos de gatos');

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact));
    }
    // para recuperar la cita al cargar la pagina
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}