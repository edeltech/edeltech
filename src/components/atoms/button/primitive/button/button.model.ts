import {Listbox} from '@headlessui/react'
import {UrlObject} from 'url'
import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'

type Url = string | UrlObject
type InternalLinkProps = {
  href: Url
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  prefetch?: boolean
  locale?: string | false
  legacyBehavior?: boolean
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
type ButtonExtendedProps<T> = 
  T extends 'a'
  ? AnchorHTMLAttributes<HTMLAnchorElement>
  : T extends Link
  ? InternalLinkProps
  : ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonTypes = {
  a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
  button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}
export type ButtonPropsImpl<T extends keyof ButtonTypes | Link>= ButtonExtendedProps<T> & ButtonBase
export type Link = React.ForwardRefExoticComponent<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>,
 keyof InternalLinkProps> & InternalLinkProps & {
  children?: React.ReactNode
} & React.RefAttributes<HTMLAnchorElement>>

type ButtonBase = {
  as?: keyof ButtonTypes | Link | typeof Listbox.Button
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  className?: string
}

export class ButtonProps<T extends keyof ButtonTypes | Link> {
  as: keyof ButtonTypes | Link | typeof Listbox.Button
  children: React.ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  HTMLProps?: Record<string, string>

  constructor(props: ButtonPropsImpl<T>) {
    this.children = props.children
    this.as = props.as || 'button'
    this.className = props.className || ''
    this.disabled = props.disabled
    this.loading = props.loading
    this.HTMLProps = this.HTMLPropsIntegration(props)
  }

  HTMLPropsIntegration(props: ButtonPropsImpl<T>) {
    const propsToAdd = {...props}
    let HTMLProps = {}
    if (propsToAdd['HTMLProps']) {
      HTMLProps = {...propsToAdd['HTMLProps']}
      delete propsToAdd['HTMLProps']
    }
    const HTMLPropsKeys = Object.keys(propsToAdd).filter(prop => !Object.keys(this).includes(prop))
    HTMLPropsKeys.forEach(specificProp => {
      const value = propsToAdd[specificProp as keyof ButtonPropsImpl<T>]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Object.assign(HTMLProps , {[specificProp]: value})
    })
    HTMLProps['disabled'] = propsToAdd.loading || propsToAdd['disabled']
    return HTMLProps
  }
}
