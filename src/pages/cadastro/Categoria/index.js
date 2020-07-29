import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(i) {
        setValue(
            i.target.getAttribute('name'),
            i.target.value,
        );
    }

    return (
        <PageDefault>
            <h1>Castro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(i) {
                i.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
                setValues(valoresIniciais);
            }}>
                <FormField
                    label="Nome da Categoria: "
                    values={values.nome}
                    type="text"
                    name="nome"
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição: "
                    values={values.descricao}
                    type="???"
                    name="descricao"
                    onChange={handleChange}
                />
                
                <FormField
                    label="Cor: "
                    values={values.cor}
                    type="color"
                    name="cor"
                    onChange={handleChange}
                />
                <div>
                    <button>
                        Cadastrar
                    </button>
                </div>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;