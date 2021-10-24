import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../config';
import { useTranslation } from 'react-i18next';
import i18n from '../configuration/i18';

export default function PersonList() {
    const { t, i18n } = useTranslation();
    const [people, setPeople] = useState()
    useEffect(() => {
        axios.get(`${API_URL}Persons`)
            .then((data) => {
                console.log(data.data);
                setPeople(data.data);
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
                        <th>{t('yenipersonel.firstname')}</th>
                        <th>Soyad</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        people && people.map(p => <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>
                                <a href={`/edit/${p.id}`} className="btn btn-sm btn-warning">Düzenle</a>
                                <button type="button" className="btn btn-sm btn-danger" data-personid={p.id}>Sil</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}
