import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

function Link({ data }) {
  console.log(data.rf)
  return (
    <>
      {data.gloss === null ? (
        data.text !== 'contact' ? (
          <a
            href={data.ref}
            target="_blank"
            rel="noreferrer"
            className="links"
            id={data.id}
          >
            {' '}
            {data.text}
          </a>
        ) : (
          <RouterLink to='/Contact'>
            <a
              href={data.ref}
              target="_blank"
              rel="noreferrer"
              className="links"
              id={data.id}
            >
              {data.text}
            </a>
          </RouterLink>
        )
      ) : (
        <a
          href={data.ref}
          target="_blank"
          rel="noreferrer"
          className="links"
          gloss={data.gloss}
          id={data.id}
        >
          {' '}
          {data.text}
        </a>
      )}
    </>
  )
}

export default Link
