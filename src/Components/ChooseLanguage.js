import React from 'react'
import { useTranslation } from 'react-i18next'

const ChooseLanguage = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div className="d-flex justify-content-end">
            Change Language 
            <select onChange={changeLanguage} defaultValue={"tr"}>
                <option value="en">English</option>
                <option value="tr">Turkish</option>
            </select>
        </div>

    )
}

export default ChooseLanguage