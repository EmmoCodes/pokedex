import React from 'react'

function TypeColor({ type }) {
  let color
  switch (type) {
    case 'normal': {
      color = 'bg-[#B3B3B3]'
      break
    }
    case 'fighting': {
      color = 'bg-[#E40000]'
      break
    }
    case 'flying': {
      color = 'bg-[#CCDADD]'
      break
    }
    case 'poison': {
      color = 'bg-[#AB00AE]'
      break
    }
    case 'ground': {
      color = 'bg-[#965A00]'
      break
    }
    case 'rock': {
      color = 'bg-[#E1B237]'
      break
    }
    case 'bug': {
      color = 'bg-[#3BB900]'
      break
    }
    case 'ghost': {
      color = 'bg-[#5A1E64]'
      break
    }
    case 'steel': {
      color = 'bg-[#2A4950]'
      break
    }
    case 'fire': {
      color = 'bg-[#F90]'
      break
    }
    case 'water': {
      color = 'bg-[#00A0E4]'
      break
    }
    case 'grass': {
      color = 'bg-[#57921C]'
      break
    }
    case 'electric': {
      color = 'bg-[#FFE600]'
      break
    }
    case 'psychic': {
      color = 'bg-[#FF81F2]'
      break
    }
    case 'ice': {
      color = 'bg-[#6AD2FF]'
      break
    }
    case 'dragon': {
      color = 'bg-[#00458A]'
      break
    }
    case 'dark': {
      color = 'bg-[#1C1C1C]'
      break
    }
    case 'fairy': {
      color = 'bg-[#FFC2F9]'
      break
    }
    case 'unknown': {
      color = 'bg-[#000]'
      break
    }
    case 'shadow': {
      color = 'bg-[#3C3C3C]'
      break
    }
    default: {
      color = 'bg-[#fff] text-black'
    }
  }

  return (
    <div className={`${color} border-2 border-black w-32 text-center pt-1 pb-1 rounded-2xl `}>{type.toUpperCase()}</div>
  )
}

export default TypeColor
