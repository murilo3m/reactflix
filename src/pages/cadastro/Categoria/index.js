import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const url = window.location.host.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://imeralura.herokuapp.com/categorias';
    fetch(url).then(async (response) => {
      const r = await response.json();
      setCategorias([
        ...r,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Castro de Categoria:
        {' '}
        {values.titulo}
      </h1>
      <form onSubmit={function handleSubmit(i) {
        i.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            value={values.titulo}
            type="text"
            name="titulo"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Descrição"
            type="textarea"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Cor"
            value={values.cor}
            type="color"
            name="cor"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button>
            Cadastrar
          </Button>
        </div>
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
