import React, { createContext } from 'react';
import { steps as ccSteps } from '@warp-ds/component-classes';
import { classNames } from '@chbphone55/classnames';
import { StepsProps } from './props';

export const StepsContext = createContext<{
  horizontal?: boolean;
  right?: boolean;
}>({
  horizontal: undefined,
  right: undefined,
});

export function Steps({ children, className, horizontal, right }: StepsProps) {
  return (
    <StepsContext.Provider
      value={{
        horizontal: horizontal,
        right: right,
      }}
    >
      <div
        className={classNames(className, {
          [ccSteps.steps]: true,
          [ccSteps.stepsHorizontal]: horizontal,
        })}
      >
        {children}
      </div>
    </StepsContext.Provider>
  );
}
