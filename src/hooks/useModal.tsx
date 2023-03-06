import React from 'react'
import { ModalProps } from '@mantine/core'
import { openContextModal } from '@mantine/modals'

function useModal() {

  const openModal = {
    auth: (props?: ModalProps) => openContextModal({
      modal: 'auth', 
      innerProps: {},
      centered: true,
      lockScroll: true,
      closeOnClickOutside: true,
      withCloseButton: false,
      size: 'sm',
      ...props
    })
  }

  return [
    openModal
  ]
}

export default useModal