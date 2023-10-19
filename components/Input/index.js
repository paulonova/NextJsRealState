import React from 'react';

const Input = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="block rounded border-slate-400 border-2 p-1 hover:border-slate-500"
    />
  );
};

export default Input;

/**
 * {...rest} means that whatever I pass as props
 * I will be getting into the <Input /> component
 */
