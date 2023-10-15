import { useState, useEffect } from 'react';
import './calc.css';

const Calc = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [imc, setImc] = useState(0);

    const index = [
        {title: 'Magreza', color: 'yellow', imc: [0, 18.5]},
        {title: 'Normal', color: 'greenyellow', imc: [18.5, 24.9]},
        {title: 'Sobrepeso', color: 'yellow', imc: [25, 29.9]},
        {title: 'Obesidade grau I', color: 'orange', imc: [30, 34.9]},
        {title: 'Obesidade grau II', color: 'orangered', imc: [35, 39.9]},
        {title: 'Obesidade grau III', color: 'red', imc: [40, 99]},
    ]

    const defineWeight = (number) => {
        setWeight(parseFloat(number));
    }
  
    const defineHeight = (number) => {
        setHeight(parseFloat(number));
    }


    useEffect(() => {
        if(isNaN(weight) || isNaN(height) || weight == '' || height == '') {
            setImc(0)
        } else {
            setImc(Number(weight / (height * height)).toFixed(2))
        }

    }, [weight, height])

    return (
        <>
            <div className='result-container'>
            <h1 className='result-title'>Calculadora de IMC</h1>
            <div className='result-display'>
                {imc >= index[0].imc[0] && imc < index[0].imc[1] &&
                <h4 className='info-title' style={{color: index[0].color}}>{index[0].title}</h4>
                }
                {imc >= index[1].imc[0] && imc < index[1].imc[1] &&
                <h4 className='info-title' style={{color: index[1].color}}>{index[1].title}</h4>
                }
                {imc >= index[2].imc[0] && imc < index[2].imc[1] &&
                <h4 className='info-title' style={{color: index[2].color}}>{index[2].title}</h4>
                }
                {imc >= index[3].imc[0] && imc < index[3].imc[1] &&
                <h4 className='info-title' style={{color: index[3].color}}>{index[3].title}</h4>
                }
                {imc >= index[4].imc[0] && imc < index[4].imc[1] &&
                <h4 className='info-title' style={{color: index[4].color}}>{index[4].title}</h4>
                }
                {imc >= index[5].imc[0] && imc < index[5].imc[1] &&
                <h4 className='info-title' style={{color: index[5].color}}>{index[5].title}</h4>
                }
                <p className='info-text'>Seu IMC é de {imc}kg/m².</p>
            </div>
            </div>
            <div className='calc-container'>
                <div className='calc-inputs'>
                    <input className='calc-input' type='number' min="0" max="200" value={weight} onChange={e => defineWeight(e.target.value)} placeholder="0"></input>
                    <p className='calc-symbol'>÷</p>
                    <input className='calc-input' type='number' min="0" max="2.30" step="0.01" value={height} onChange={e => defineHeight(e.target.value)} placeholder="0"></input>
                    <p className='calc-symbol-ext'>²</p>
                </div>
                <div className='calc-texts'>
                <div className='calc-text-left'>
                    <div className='text-left-title'>
                        <p>Referências</p>
                    </div>
                    <div className='text-left-info'>
                        <p>Magreza — &lt; 18,5kg/m²</p>
                        <p>Normal — 18,5 a 24,9kg/m²</p>
                        <p>Sobrepeso — 25 a 29,9kg/m²</p>
                        <p>Obesidade grau I — 30 a 34,9kg/m²</p>
                        <p>Obesidade grau II — 35 a 39,9kg/m²</p>
                        <p>Obesidade grau III — &gt; 40kg/m²</p>
                    </div>
                </div>
                <div className='calc-text'>
                    <p>O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).</p>
                    <p className='quote'>IMC = Peso ÷ (Altura × Altura)</p>
                    <p>Exemplo de como calcular o IMC:</p>
                    <p className='quote'>IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Calc;