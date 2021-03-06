import React, { Component, Fragment } from 'react'

import ProfilePhoto from '../Profile/ProfilePhoto/ProfilePhoto.js'
import ProfileNick from '../Profile/ProfileNick/ProfileNick.js'
import ProfileName from '../Profile/ProfileName/ProfileName.js'

import './ProfileAside.scss'

import store from '~redux/reducers/store.js'

class ProfileAside extends Component{
    constructor(){
        super()
        this.state = {
            profilePhotoUrl : store.getState().user.profilePhotoUrl
        }
        this.unSubscribe = store.subscribe(() => {
            console.log('사진바뀜')
            this.setState({
                ...this.state,
                profilePhotoUrl : store.getState().user.profilePhotoUrl
            })
        })
    }

    render(){
        return (
            <div className="profileAside">
                <div id="profileAside-userSet">
                    <span id="profilePhoto-container">
                        <ProfilePhoto url={this.state.profilePhotoUrl}/>
                    </span>
                    <div id="profileAside-userSet-stringSet">
                    <ProfileNick/>
                    <ProfileName/>
                    </div>
                </div>
                <div id="profileAside_story">
                    스토리
                </div>
                <div>
                    회원님이 팔로우하는 사람들의 스토리가 여기에 표시됩니다.
                </div>
                <div id="profileAside_nav">
                    <nav>
                        <ul>
                            <li>개발자정보</li>
                            <li>기술스택 이거가로로바가야뎀 </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <span>© 2018 BSTAGRAM</span>
                </div>
            </div>
        )
    }
}

export default ProfileAside