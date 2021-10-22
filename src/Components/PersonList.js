import axios from 'axios';
import React, { useEffect } from 'react'
import { API_URL } from '../config';

export default function PersonList() {
    useEffect(() => {
        axios.get(`${API_URL}Persons`)
            .then((data) => {
                console.log(data.data);

            });
    }, []);
    return (
        <div className="container mt-1">
            <div className="col-2">
                <a href="/YeniPersonel" className="btn btn-sm btn-primary">Yeni Personel</a>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Fatih</td>
                        <td>Baytar</td>
                        <td>
                            <a href="/edit/1" className="btn btn-sm btn-warning">Düzenle</a>
                            <button type="button" className="btn btn-sm btn-danger">Sil</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
