import React, { Component } from 'react'
import { useStrict, action } from 'mobx'
import { Provider, observer} from 'mobx-react'
import mainStore from '../stores/mainStore'
import Sequencer from './Sequencer'
import { MainWrapper, SequencerBoard } from './layouts'
import uuid from 'uuid'
import Perf from 'react-addons-perf'
window.Perf = Perf




const store = mainStore.create({sequencers: [] })
window.store = store
useStrict(true)

const SPACEBAR_KEY = 32;
const BACKSPACE_KEY = 8;


@observer
class App extends Component {

  render () {

    return (

      <Provider mainStore={store}>
<MainWrapper>
          {store.sequencers.map(sequencer=><Sequencer sequencer={store.sequencers[0]} key={sequencer.id} /> )}
</MainWrapper>
    </Provider>
    )
  }
}

export default App
