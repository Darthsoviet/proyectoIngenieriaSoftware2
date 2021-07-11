import React from 'react'
import { ControlsBlock, ControlsList, PaginatorBody } from './Paginator.styles'

function PaginatorFooter({ next, prev, goPage, max, metadata }) {




   function range(size, startAt = 0) {
      const range = (size) - startAt;
      return [...Array(range).keys()].map(i => i + startAt);
   }

   function getControls() {


      let maxPage = metadata.totalPages - 1;
      max = Math.min(max, maxPage)

      if (maxPage <= max) {
         return range(maxPage + 1).map(n => {
            return (<button className={n === metadata.page ? "current" : null} key={n} onClick={() => {
               goPage(n)
            }}>{n}</button>)
         })

      } else if (maxPage) {

         let page = metadata.page;

         const middle = Math.floor(max / 2)
         const begin = Math.max(page - middle, 0)

         const top = begin + max <= maxPage + 1
            ? max + begin
            : maxPage + 1
         const rangeArray = range(top, begin).map(n => {
            return (<button className={n === metadata.page ? "current" : null} key={n} onClick={() => {
               goPage(n)
            }}>{n}</button>)
         });



         return rangeArray;
      }
   }
   return (
      <ControlsBlock>


         {metadata && metadata.page > 0
            ? <button onClick={prev}>Previus</button>

            : null}

         <ControlsList >

            {
               metadata ?
                  getControls()


                  : null
            }


         </ControlsList >
         {metadata && metadata.page < metadata.totalPages - 1
            ? <button onClick={next}>Next</button>

            : null
         }

      </ControlsBlock>

   )
}
export default function Paginador({ config, children }) {




   return (
      <PaginatorBody>

         {
            children
         }




         <PaginatorFooter
            metadata={config.metadata}
            next={config.nextPage}
            prev={config.previusPage}
            goPage={config.goToPage}
            max={config.maxSize}
         ></PaginatorFooter>
      </PaginatorBody>
   )
}
