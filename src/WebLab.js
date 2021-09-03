import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './weblab/style/main.scss';
import App from './weblab/App';
import Labs from './weblab/labs/Labs';
import TekisTezlanuvchanHarakat from './sinov/7-sinf/tekistezlanuvchanharakat/TekisTezlanuvchanHarakat';
import TekisTezlanuvchanHarakatInfo from './sinov/7-sinf/tekistezlanuvchanharakat/info/Info';
import IshqalanishKoeffitsienti from './sinov/7-sinf/ishqalanishkoeffitsienti/IshqalanishKoeffitsienti';
import IshqalanishKoeffitsientiInfo from './sinov/7-sinf/ishqalanishkoeffitsienti/info/Info';
import KinetikEnergiya from './sinov/7-sinf/kinetikenergiya/KinetikEnergiya';
import KinetikEnergiyaInfo from './sinov/7-sinf/kinetikenergiya/info/Info';
import MexanikIsh from './sinov/7-sinf/mexanikish/MexanikIsh';
import MexanikIshInfo from './sinov/7-sinf/mexanikish/info/Info';
import PrujinaBikrligi from './sinov/7-sinf/prujinabikrligi/PrujinaBikrligi';
import PrujinaBikrligiInfo from './sinov/7-sinf/prujinabikrligi/info/Info';

export default function WebLab() {
    return (
        <>
          <Router>
            <Switch>
              <Route path='/' exact component={App} />
              <Route path='/labs' exact component={Labs} />
              <Route path='/tekistezlanuvchanharakat' exact component={TekisTezlanuvchanHarakat} />
              <Route path='/tekistezlanuvchanharakat/malumot' exact component={TekisTezlanuvchanHarakatInfo} />
              <Route path='/prujinabikrligi' exact component={PrujinaBikrligi} />
              <Route path='/prujinabikrligi/malumot' exact component={PrujinaBikrligiInfo} />
              <Route path='/ishqalanishkoeffitsienti' exact component={IshqalanishKoeffitsienti} />
              <Route path='/ishqalanishkoeffitsienti/malumot' exact component={IshqalanishKoeffitsientiInfo} />
              <Route path='/mexanikish' exact component={MexanikIsh} />
              <Route path='/mexanikish/malumot' exact component={MexanikIshInfo} />
              <Route path='/kinetikenergiya' exact component={KinetikEnergiya} />
              <Route path='/kinetikenergiya/malumot' exact component={KinetikEnergiyaInfo} />
            </Switch>
          </Router>
        </>
    )
}
