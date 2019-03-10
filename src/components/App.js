import React from 'react';
import {BrowserRouter, HashRouter,Route, Link} from 'react-router-dom';
import Header from'./Header.js';

import StreamDelete from './stream/streamDelete';
import StreamEdit from './stream/streamEdit';
import StreamNew from './stream/streamNew';
import StreamShow from './stream/streamShow';

const App =()=>{

    return <div className="ui container">
      
        <BrowserRouter>
       <div>
       <Header/>
       <Route path = "/" exact component = {StreamNew}/>
        <Route path = "/streams/New" component = {StreamNew}/>
        <Route path = "/streams/edit" component = {StreamEdit}/>
        <Route path = "/streams/Show"  component = {StreamShow}/>
        <Route path = "/streams/Delete"  component = {StreamDelete}/>
       </div>

        </BrowserRouter>
    </div>
}

export default App;