import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCar } from '../../store/cars';
import { Creators as CreatorsLayout } from '../../store/layout';

export default function Add() {
  const [form, setForm] = useState({ name: '', url: '' });
  const dispatch = useDispatch();
  function formChange(e) {
    /* console.log(e.target.name); */
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    const { hideMessage, showMessage } = CreatorsLayout;

    dispatch(addCar(form));
    setForm({ name: '', url: '' });

    dispatch(showMessage());

    setTimeout(() => {
      dispatch(hideMessage());
    }, 2500);
  }
  return (
    <form className="container mt-5" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Nome</label>
        <input
          onChange={formChange}
          type="text"
          name="name"
          className="form-control"
          placeholder="Nome..."
          value={form.name}
        />
      </div>
      <div className="form-group">
        <label>URL:</label>
        <input
          onChange={formChange}
          type="text"
          name="url"
          className="form-control"
          placeholder="URL:https://cars"
          value={form.url}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}
