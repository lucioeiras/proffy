import React, { TextareaHTMLAttributes } from 'react'

import { TextareaBlock } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextareaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextareaBlock>
  )
}

export default Textarea
