import { useState } from "react"
import "./styles.css"

function Calculadora() {
    const [numero1, setNumero1] = useState("")
    const [numero2, setNumero2] = useState("")
    const [resultado, setResultado] = useState("")
    const [operacao, setOperacao] = useState(null)

    function numeros(valor) {
        if (operacao === null) {
            setNumero1(prev => prev + valor)
        } else {
            setNumero2(prev => prev + valor)
        }
    }

    function calculo() {
        const n1 = Number(numero1)
        const n2 = Number(numero2)

        if (operacao === "+") {
            setResultado(String(n1 + n2))
        } 
        else if (operacao === "-") {
            setResultado(String(n1 - n2))
        } 
        else if (operacao === "x") {
            setResultado(String(n1 * n2))
        } 
        else if (operacao === "/") {
            if (n2 === 0) {
                setResultado("Não é possível dividir por zero")
            } else {
                setResultado(String(n1 / n2))
            }
        }
    }

    function del() {
        if (operacao === null) {
            setNumero1(prev => prev.slice(0, -1))
        } else {
            setNumero2(prev => prev.slice(0, -1))
        }
    }

    function ac() {
        setNumero1("")
        setNumero2("")
        setOperacao(null)
        setResultado("")
    }

    return (
        <div id="bloco-calculadora">
            <h1>Calculadora <strong>React</strong></h1>

            <p>
                {numero1} {operacao} {numero2}
            </p>
            <h2>{resultado}</h2>

            <div id="bloco-botoes-calculadora">
                <button onClick={() => setOperacao("+")}>+</button>
                <button onClick={() => setOperacao("-")}>-</button>
                <button onClick={() => setOperacao("x")}>x</button>
                <button onClick={() => setOperacao("/")}>/</button>

                <button onClick={calculo}>=</button>
                <button onClick={del}>DEL</button>
                <button onClick={ac}>AC</button>

                <button onClick={() => numeros("1")}>1</button>
                <button onClick={() => numeros("2")}>2</button>
                <button onClick={() => numeros("3")}>3</button>
                <button onClick={() => numeros("4")}>4</button>
                <button onClick={() => numeros("5")}>5</button>
                <button onClick={() => numeros("6")}>6</button>
                <button onClick={() => numeros("7")}>7</button>
                <button onClick={() => numeros("8")}>8</button>
                <button onClick={() => numeros("9")}>9</button>
                <button onClick={() => numeros("0")}>0</button>
            </div>
        </div>
    )
}

export default Calculadora
