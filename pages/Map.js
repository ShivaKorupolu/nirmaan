import React,{useEffect, useState} from 'react'
import DatamapsIndia from 'react-datamaps-india'
import { Transition } from "@headlessui/react";

const Map = ({state}) => {
    return (
        <div className="hellowoer">
      <DatamapsIndia
        regionData={{[state]:{
        }}}
        hoverComponent={({ value }) => {
          return (
            <>
              <p>{value.name}</p>
             <p>{value.value}</p>
            </>
          )
        }}
        mapLayout={{
        //   title: 'Title',
        //   legendTitle: 'Legend Title',
          startColor: '#FFDAB9',
          endColor: '#FF6347',
          hoverTitle: 'Count',
          noDataColor: '#f5f5f5',
          borderColor: '#8D8D8D',
          // hoverBorderColor: '#8D8D8D',
          hoverColor: 'green',
        }}
      />
      </div>

    )
  }

export default Map;