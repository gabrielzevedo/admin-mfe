import React, { ReactNode } from 'react'

import { Container as ContainerComponent } from '@loja-integrada/admin-components'

type Props = {
  children?: ReactNode
  expanded?: boolean
  customColor?: string
}

const Container = ({
  children,
  expanded,
  customColor = 'bg-base-2',
}: Props): JSX.Element => (
  <div
    className={`content-wrapper ${customColor} pb-14-safe relative transition-width pt-px`}
  >
    <ContainerComponent expanded={expanded}>{children}</ContainerComponent>
  </div>
)

export default Container
