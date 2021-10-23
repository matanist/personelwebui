import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../configuration/i18';
import axios from 'axios';
import { API_URL } from '../config';

export default function YeniPersonel() {
    const { t, i18n } = useTranslation();
    const [showPositionAdd, setShowPositionAdd] = useState(false);
    const [positionName, setPositionName] = useState();
    const [userInfo, setUserInfo] = useState();
    const [positions, setPositions] = useState([{ id: -1, name: "Seçiniz" }, { id: 0, name: "Yeni Pozisyon" }]);
    useEffect(() => {
        //Tüm positionları çek. 
        axios.get(`${API_URL}Positions`)
            .then((data) => {
                console.log(data.data);
                setPositions([...positions, ...data.data]);
            });
    }, [])
    const changePosition = (event) => {
        if (event.target.value == 0) {
            setShowPositionAdd(true);
        }
        else {
            setShowPositionAdd(false);
        }
        if (event.target.value != 0 && event.target.value != -1)
            setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }
    const changePositionName = (event) => {
        setPositionName(event.target.value);
    }
    const btnPositionNameSaveClicked = () => {
        const conf = { headers: { "Content-Type": "application/json" } };
        const position = { Name: positionName, MaximumSalary: 0 };
        axios.post(`${API_URL}Positions`, position, conf)
            .then((data) => {
                console.log(data.data);
                setPositions([...positions, data.data.set]);
            });
    }
    const textChangeHandler = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }
    const btnYeniPersonelKaydetClicked = () => {
        if (!userInfo) {
            alert("Bilgileri doldurun");
            return;
        }
        if (!userInfo.firstName || !userInfo.lastName) {
            alert("Eksik bilgi");
            return;
        }
        if(!userInfo.positionId){
            alert("Position Seçiniz...");
            return;
        }

        const conf = { header: { "Content-Type": "application/json" } };
        axios.post(`${API_URL}Persons`,userInfo,conf)
            .then(data=>{
                console.log(data.data);
                if(data.data && data.data.set && data.data.code==200){
                    alert("başarılı bir şekilde kaydedildi");
                }
            })
            .catch(err=>{
                alert("bir hata oluştu"+err);
            });
    }
    return (
        <div className="container mt-1">
            <form>
                <div className="form-group">
                    <label htmlFor="txbFirstName">{t('yenipersonel.firstname')}</label>
                    <input type="text" className="form-control" id="txbFirstName" placeholder="Ad Giriniz" name="firstName" onChange={textChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="txbLastName">Soyad</label>
                    <input type="text" className="form-control" id="txbLastName" placeholder="Soyad Giriniz" name="lastName" onChange={textChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="selectPosition">Position</label>
                    <select className="form-select" onChange={changePosition} name="positionId">
                        {
                            positions.map(p => <option key={p.id} value={p.id}>{p.name}</option>)
                        }
                    </select>
                </div>
                <div className={`form-group ${showPositionAdd ? "" : "d-none"}`}>
                    <label htmlFor="txbPositionName" className="col-3">Pozisyon Adı</label>
                    <input type="text" className="form-control col-3" id="txbPositionName" onChange={changePositionName} placeholder="Pozisyon Adı Giriniz" />
                    <button type="button" className="btn btn-primary col-3 mt-1" onClick={btnPositionNameSaveClicked}>Pozisyon Kaydet</button>
                </div>
                <div className="form-group mt-1">
                    <button type="button" className="btn btn-primary" onClick={btnYeniPersonelKaydetClicked}>Kaydet</button>
                </div>

            </form>
        </div>
    )
}
