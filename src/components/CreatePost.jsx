import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreatePost = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://localhost:5001/api/PontoTuristico/Cadastrar', data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Descricao</label>
                            <input type="text" className="form-control" name="descricao" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.descricao && 'Título inválido'}</small>
                        </div>  
                        <div className="form-group">
                            <label>Bairro</label>
                            <input type="text" className="form-control" name="endereco.bairro" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.descricao && 'Título inválido'}</small>
                        </div> 
                        <div className="form-group">
                            <label>Rua</label>
                            <input type="text" className="form-control" name="endereco.rua" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.rua && 'Título inválido'}</small>
                        </div>    
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control" name="endereco.cidade" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.cidade && 'Título inválido'}</small>
                        </div>           
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" name="endereco.estado" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.estado && 'Título inválido'}</small>
                        </div>         
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;