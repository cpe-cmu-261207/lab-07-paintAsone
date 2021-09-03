import {Store} from 'pullstate'
import SelectColorButton from '../components/SelectColorButton'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  cell_color : string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  cell_color: '#FFFFFF'
})

export const setSelectColor = (color : string) => {
  PixelPainterStore.update(
		  x => {x.cell_color = color}
	  )
}

export const setCanvas = (i: number, j:number) =>{
  PixelPainterStore.update(
    x => {x.canvas[i][j] = x.cell_color}
  )
}

export const emptyCanvas = () => {
  PixelPainterStore.update(
    x => {x.canvas = createEmptyCanvas()}
  )
}

export const randomCanvas = () => {
  PixelPainterStore.update(
    x => {x.canvas = createRandomCanvas()}
  )
}

export const randomColor = () =>{
  var items = Array('#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E');
  var item = items[Math.floor(Math.random()*items.length)];
  console.log(item)
}

const createRandomCanvas = () => {
  const output: string[][] = []
  var items = Array('#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E');
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      var item = items[Math.floor(Math.random()*items.length)];
      output[i].push(item)
    }
  }
  return output
}

