import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import './Menu.css';

import Bills from './Bills/Bills.container';
import BillInfo from './Bills/BillInfo/BillInfo.container';
import Investments from './Investments/Investments.container';

const SwitcherLink = ({ to, title }) => (
    <NavLink to={ to } className="switcher__link" activeClassName="switcher__link_active">{ title }</NavLink>
);

class Menu extends Component {
    render() {
        return (
            <aside className="menu">
                <div className="switcher">
                    <SwitcherLink to={ '/bills' } title={ 'Счета' }/>
                    <SwitcherLink to={ '/investments' } title={ 'Вклады' }/>
                </div>
                <Switch>
                    <Route exact path={ '/' } render={ () => <Redirect to={ '/bills' }/> }/>
                    <Route exact path={ '/bills' } component={ Bills }/>
                    <Route path={ '/bills/:billId' } component={ BillInfo }/>
                    <Route path={ '/investments' } component={ Investments }/>
                </Switch>
            </aside>
        )
    }
}

export default Menu;