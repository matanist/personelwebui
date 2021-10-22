import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../configuration/i18';

export default function YeniPersonel() {
    const { t, i18n } = useTranslation();
    return (
        <div className="container mt-1">
            <form>
                <div className="form-group">
                    <label htmlFor="txbFirstName">{t('yenipersonel.firstname')}</label>
                    <input type="text" className="form-control" id="txbFirstName" placeholder="Ad Giriniz" />
                </div>
                <div className="form-group">
                    <label htmlFor="txbLastName">Soyad</label>
                    <input type="text" className="form-control" id="txbLastName" placeholder="Soyad Giriniz" />
                </div>
                <button type="button" className="btn btn-primary">Kaydet</button>
            </form>
        </div>
    )
}
