import React, { forwardRef, Ref } from 'react';
import { button as ccButton } from '@warp-ds/css/component-classes';
import { i18n } from '@lingui/core';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n';

const buttonTypes = [    
  'primary',
  'secondary',
  'negative',
  'utility',
  'pill',
  'link',
] as const;
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    primary,
    secondary,
    negative,
    utility,
    quiet,
    small,
    link,
    pill,
    loading,
    ...rest
  } = props;

  const classes = classNames(props.className, {
    [ccButton.buttonSecondary]: secondary && !quiet || !buttonTypes.find(b => !!props[b]),
    // primary buttons
    [ccButton.buttonPrimary]: primary,
    [ccButton.buttonDestructive]: negative && !quiet,
    // quiet
    [ccButton.buttonFlat]: secondary && quiet,
    [ccButton.buttonDestructiveFlat]: negative && quiet,
    [ccButton.buttonUtilityFlat]: utility && quiet,
    // others
    [ccButton.buttonSmall]: small,
    [ccButton.buttonSmallOverride]: small && !(secondary || utility),
    [ccButton.buttonUtility]: utility && !quiet,
    [ccButton.buttonSmallUtility]: small && utility,
    [ccButton.buttonLink]: link,
    [ccButton.buttonPill]: pill,
    [ccButton.buttonInProgress]: loading,
    [ccButton.buttonIsDisabled]: props.disabled,
    [ccButton.linkAsButton]: !!props.href,
  });

  activateI18n(enMessages, nbMessages, fiMessages);

  const ariaValueTextLoading = i18n._(
    /*i18n*/ {
      id: 'button.aria.loading',
      message: 'Loading...',
      comment: 'Screenreader message for buttons that are loading',
    });

  return (
    <>
      {props.href ? (
        <a
          href={props.href}
          target={props.target}
          rel={
            props.target === '_blank'
              ? props.rel || 'noopener'
              : undefined
          }
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
        >
          {props.children}
        </a>
      ) : (
        <button
          {...rest}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
          className={classes}
        >
          {props.children}
        </button>
      )}
      {props.loading ? (
        <span
          className="sr-only"
          role="progressbar"
          aria-valuenow={0}
          aria-valuetext={ariaValueTextLoading}
        />
      ) : null}
    </>
  );
});
