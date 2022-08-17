/*
 * @Author: Leo
 * @Date: 2022-08-17 11:26:38
 * @LastEditors: Leo
 * @LastEditTime: 2022-08-17 11:49:48
 * @FilePath: \AgencyAnalytics-Code-Challenge\src\pages\Home.tsx
 * @Description:
 */
import React from 'react';
import styles from './Home.less';

interface HomeProps {

}

interface HomeStates {

}

export default class Home extends React.Component<HomeProps, HomeStates> {
    render() {
        return (<div className={styles.main}>123</div>);
    }
}