import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('me volvi a generar :C');
  
  return (
    <small>{ value }</small>
  )
})