/*
 * @Author: Leo
 * @Date: 2022-08-17 11:26:38
 * @LastEditors: Leo
 * @LastEditTime: 2022-08-17 11:36:05
 * @FilePath: \AgencyAnalytics-Code-Challenge\src\pages\Home.tsx
 * @Description:
 */
import React from 'react';
import style from './Home.module.less';

interface HomeProps {

}

interface HomeStates {

}

export default class Home extends React.Component<HomeProps, HomeStates> {
    render() {
        return (<div className={style.main}>123</div>);
    }
}