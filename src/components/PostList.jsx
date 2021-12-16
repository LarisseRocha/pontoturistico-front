import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/api/PontoTuristico').then(result => {
            setPosts(result.data);
        })
    }, []);

    return (
       
       
                 
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Post</th>
                    <th className="text-center">Data criacao</th>
                    <th className="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    posts.map(pontoturistico => (
                        <tr key={pontoturistico.id}>
                            <td>{pontoturistico.descricao}</td>
                            <td className="text-center">{pontoturistico.datacriacao}</td>
                            
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${pontoturistico.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${pontoturistico.id}`} className="btn btn-secondary">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/delete/${pontoturistico.id}`} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default PostList;