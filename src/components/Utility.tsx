import {PixelPainterStore, emptyCanvas, randomCanvas} from '../stores/PixelPainterStore'
import Cell from "./Cell"

const Utility = () => {
  const state = PixelPainterStore.useState()
  return (
    <div className="flex justify-center space-x-3">
      <button onClick ={() => {emptyCanvas()}} className="w-36">Clear</button>
      <button className="w-36"
      onClick ={() => {randomCanvas()}}>Random color</button>
    </div>
  )
}

export default Utility