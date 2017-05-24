import { types, getEnv, unprotect } from "mobx-state-tree"
import  SequencerModel  from './SequencerModel'
import uuid from 'uuid'

//import { globalStore } from './globalStore'
export default types.model("mainStore", {

    sequencers: types.array(SequencerModel)
  },
  {
    addSequencer(offset="0"){
      let newSequencer = SequencerModel.create({id: uuid(), pads: [], offset: offset})
      console.log(newSequencer, "created")
      this.sequencers.push(newSequencer)
      console.log('added' , this.sequencers)
    },
   afterCreate() {
     console.log('RRRRRR')
     unprotect(this)
     this.addSequencer()
   }

})
