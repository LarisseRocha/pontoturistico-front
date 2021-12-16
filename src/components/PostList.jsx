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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default PostList;