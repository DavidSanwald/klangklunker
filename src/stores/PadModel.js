import { types } from "mobx-state-tree"
import { observable, action, computed } from 'mobx'
import uuid from 'uuid'

export default types.model("Pad",{
    // props
    id: types.identifier(),
    name: "",
    m: types.number,
    n: types.number,
    isPlaying: false,
    isSelected: false,

    // computed prop / views
    get state(){
      const state =
      !this.isSelected?
      'idle':
      this.isPlaying?
      'playing':
      'selected'
    return state
    }
}, {
    // actions
    startPlaying () {
      this.isPlaying= true;
    },
    stopPlaying () {
      this.isPlaying= false;
    },

    toggleSelected () {
      this.isSelected = !this.isSelected
  }
}
)
