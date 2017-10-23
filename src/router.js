import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import RequestFeed from './components/RequestFeed/RequestFeed.js'
import AddProperty from './components/forms/AddProperty/AddProperty.js'
import AddTenant from './components/forms/AddTenant/AddTenant.js'
import Contact from './components/forms/Contact/Contact.js'
import RequestForm from './components/forms/RequestForm/RequestForm.js'
import TenantDash from './components/Dashboard/TenantDash/TenantDash.js'
import LandlordCheck from './components/LandlordCheck/LandlordCheck.js'
import EditProperty from './components/forms/EditProperty/EditProperty.js'

export default(
    <Switch>
    <Route component={Login} exact path ='/'/>
    <Route component={LandlordCheck} path='/check' />
    <Route component={Dashboard} path ='/ldashboard'/>
    <Route component={TenantDash} path='/tdashboard' />
    <Route component={RequestFeed} path ='/requests'/>
    <Route component={AddProperty} path ='/addprop'/>
    <Route component={AddTenant} path ='/addtenant'/>
    <Route component={Contact} path ='/contact'/>
    <Route component={RequestForm} path ='/addreq'/>
    <Route component={EditProperty} path='/editprop'/>
    </Switch>
)