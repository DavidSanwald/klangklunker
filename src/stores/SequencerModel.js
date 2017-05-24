import {observable, action, computed} from 'mobx'
import uuid from 'uuid'
import { types } from "mobx-state-tree"
import Pad from './PadModel'



function initPads(numberRows=9, numberCols=8, pads) {
  const arr = []
  for (let n = 0; n < numberCols; n++) {
    for (let m = 0; m < numberRows; m++) {
      arr.push({m, n})
    }}
  arr.forEach(({m, n}) => pads.push(Pad.create({ id: uuid(), m, n })))
  pads.sort(function(a, b) {
    let rowDifference = a.m - b.m
    if (rowDifference === 0) {
      const columnDifference = a.n - b.n
      return columnDifference
    } else {
      return rowDifference
    }})}



export default types.model("Sequencer",{
    // props
    id: types.identifier(),
    name: "",
    pads: types.array(Pad),
    isRunning: false,
    offset: types.string,

    // computed prop / views
    get selectedPads() {
      const selectedPads = this.pads.filter(pad => pad.isSelected === true)
      return selectedPads
    }
},{
  toggleLoopState() {
    this.loop.state === 'started'
      ? this.loop.stop()
      : this.loop.start()
  },
  initStore(numberRows = 9, numberCols = 8) {
    initPads(numberRows, numberCols, this.pads)
  },
  initLoop() {
    require.ensure(['../sound/loop'], (require) => {
      const buildLoop = require('../sound/loop.js').default
      this.loop = buildLoop(this, this.offset), 'loop'})
    },
   afterCreate(){
    console.log("HOOOOOK Works")
     this.initStore(9,8)
   this.initLoop()}
   })
