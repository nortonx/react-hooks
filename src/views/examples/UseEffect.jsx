import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function parOuImpar(num) {
    const n = parseInt(num)
    return n % 2 === 0 ? 'Par' : 'Ímpar'
}

const UseEffect = (props) => {
    // Ex #01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => {
        setFatorial(calcFatorial(number))
        if (fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [number, fatorial]) // TODO: Review it
    

    // Ex #02
    const [status, setStatus] = useState("Ímpar")

    useEffect(() => {
        setStatus(parOuImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={(number)}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{status}</span>
                </div>
                
            </div>
        </div>
    )
}

export default UseEffect
