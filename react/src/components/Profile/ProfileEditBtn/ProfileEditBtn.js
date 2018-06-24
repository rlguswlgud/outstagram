import React from 'react'

import { Link } from 'react-router-dom'

//scss
import './ProfileEditBtn.scss'

const ProfileEditBtn = () => {
    return (
        <Link to="그머시기 편집페이지로 보내면뎀" className="profileEditBtn">
            <button>프로필 편집</button>
        </Link>
    )
}

export default ProfileEditBtn