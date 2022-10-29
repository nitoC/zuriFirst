import React from 'react'
function Link({ data }) {
  console.log(data.rf)
  return (
    <>
      {data.gloss === null ? (
        <a href={data.ref} target='_blank' rel='noreferrer' className='links' id={data.id}>
          {' '}
          {data.text}
        </a>
      ) : (
        <a href={data.ref} target='_blank' rel='noreferrer' className='links' gloss={data.gloss} id={data.id}>
          {' '}
          {data.text}
        </a>
      )}
    </>
  )
}

export default Link
