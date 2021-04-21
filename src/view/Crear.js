import React from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

function Crear(){
    return(
      <div className="App">
      <h1>Mantenimiento de contactos</h1>
      <Formik
        initialValues={{ name: "", last: "", email: "" }}
        onSubmit={ async e => { 
          
         const res = await axios.post('https://fakerapi.it/api/v1/persons', {
            name: e.name,
            last: e.last,
            email: e.email
          })
          console.log(res);
          

         }}>
        <Form>

          <Field name="name" type="text" placeholder="Escriba su nombre" required />
          <br />
          <Field name="last" type="text" placeholder="Escriba su apellido" />
          <br />

          <Field name="email" type="email" placeholder="Escriba su correo" required />
          <br />
          <button type="submit">Guardar</button>
          
        </Form>
      </Formik>
    </div>
    );
}
export default Crear;