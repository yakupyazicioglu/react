import React, { PropsWithChildren } from 'react';
import { classNames } from '@chbphone55/classnames';

const ccButtonGroupItem = {
  focused: 'focusable-inset focus-within:focusable:focus focus-within:focusable:focus-visible',
  wrapper: 'relative i-text-$color-button-group-text i-bg-$color-button-group-background hover:i-bg-$color-button-group-background-hover active:i-border-$color-button-group-border-active active:i-text-$color-button-group-text-active active:i-bg-$color-button-group-background-active',
  outlined: 'border hover:z-30 i-border-$color-button-group-border hover:i-border-$color-button-group-border-hover active:i-border-$color-button-group-border-active last:rounded-rb-8',
  outlinedVertical: '-mb-1 last:mb-0 first:rounded-lt-8 first:rounded-rt-8 last:rounded-lb-8',
  outlinedHorizontal: '-mr-1 last:mr-0 first:rounded-lt-8 first:rounded-lb-8 last:rounded-rt-8',
  outlinedVerticalResets: 'px-1 pt-1 last:pb-1 -mb-1 last:mb-0',
  outlinedHorizontalResets: 'py-1 pl-1 last:pr-1 -mr-1 last:mr-0',
  selected: 'z-30 i-text-$color-button-group-text-active! i-bg-$color-button-group-background-active! hover:i-bg-$color-button-group-background-active-hover! i-border-$color-button-group-border-active',
  equalWidth: 'flex-1',
}

interface ButtonGroupItemProps {
  selected?: boolean;
  equalWidth?: boolean;
}

export function ButtonGroupItem({children, selected, equalWidth}: PropsWithChildren<ButtonGroupItemProps>){
  const wrapperClass = classNames(
    ccButtonGroupItem.wrapper,
    ccButtonGroupItem.focused,
    ccButtonGroupItem.outlined, 
    ccButtonGroupItem.outlinedHorizontal,
    selected ? ccButtonGroupItem.selected : '',
    equalWidth ? ccButtonGroupItem.equalWidth : '',
  );

return (
  <div className={wrapperClass}>
    {children}
  </div>
  )
}







