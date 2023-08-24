import React, { forwardRef, Ref } from 'react';
import { button as ccButton } from '@warp-ds/css/component-classes';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';

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

   const ccButton = {
    // Buttontypes
    buttonSecondary:
      'border-2  rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
    buttonPrimary:
      'border-0  rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active', // .button--primary, .button--cta
    buttonFlat:
      'border-0!  rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background! i-text-$color-button-quiet-text! hover:i-bg-$color-button-quiet-background-hover! active:i-bg-$color-button-quiet-background-active!', // .button--quiet, .button--flat
    buttonDestructive:
      'border-0  rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover active:i-bg-$color-button-negative-background-active', // .button--destructive
    buttonDestructiveFlat:
      'border-0  rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!', // .button--destructive-flat
    buttonUtility:
      'font-bold max-w-max focusable justify-center transition-colors ease-in-out border rounded-4 i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active!', // .button--utility
    buttonUtilityFlat:
      'bg-transparent border-0 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover rounded-4', // .button--utility-flat
    buttonPill:
      'font-bold max-w-max focusable justify-center transition-colors ease-in-out rounded-full! border-0! p-4 i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover active:i-bg-$color-button-pill-background-active inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill
    buttonLink:
      'max-w-max bg-transparent focusable ease-in-out inline i-text-$color-button-link-text active:underline hover:underline', //.button--link /* Buttons pretending to be links, (Should rather inherit the actual link setup in the future?)  */
    // Font stuff
    buttonMediumFontSize: 'leading-[24] text-m', // .button--secondary
    buttonSecondaryPadding: 'py-10 px-14', // .button--secondary.button--small
    buttonMediumPadding: 'py-12 px-16', // .button--primary, .button--quiet, .button--destructive, .button--destructive-flat, .button--utility-flat
    buttonUtilitySizing: 'px-[15px] py-[11px] font-bold', // .button--utility
    buttonPillSizing: 'min-h-[44px] min-w-[44px]', // .button--utility
    buttonSmallSecondary: 'px-16 py-6 text-xs', // .button--small
    buttonSmallPrimary: 'px-16 py-8 text-xs', // .button--small.button--primary, .button--small.button--destructive, .button--small.button--destructive-flat, .button--small.button--order, .button--small.button--quiet
    buttonSmallUtility: 'px-[15px] py-[7px] text-xs', // .button--small.button--utility
    buttonSmallButtonPill: 'min-h-32 min-w-32 text-xs', // .button--small.button--pill
    buttonSmallButtonLink: 'p-0 text-xs', // .button--small.button--link
    // Disabled
    buttonIsDisabled:
      'font-bold max-w-max justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
    // Progress indicator
    buttonInProgress:
      'border-transparent! animate-inprogress i-text-$color-button-loading-text! pointer-events-none i-bg-$color-button-loading-background!', // .button--in-progress, a.button--in-progress:visited
    linkAsButton: 'inline-block hover:no-underline',
    a11y: 'sr-only',
  };

  const buttonSecondaryDefault = secondary && !quiet || !buttonTypes.find(b => !!props[b]);
  const buttonDestructive = negative && !quiet;
  const buttonFlat = secondary && quiet;
  const buttonDestructiveFlat = negative && quiet;
  const buttonUtilityFlat = utility && quiet;

  const classes = classNames(props.className, {
    [ccButton.buttonSecondary]: buttonSecondaryDefault,
    [`${ccButton.buttonSecondaryPadding} ${ccButton.buttonMediumFontSize}`]: (buttonSecondaryDefault || buttonFlat) && !small,
    // primary buttons
    [ccButton.buttonPrimary]: primary,
    [ccButton.buttonDestructive]: buttonDestructive,
    [`${ccButton.buttonMediumPadding} ${ccButton.buttonMediumFontSize}`]: (primary || buttonDestructive || buttonDestructiveFlat) && !small,
    // quiet
    [`${ccButton.buttonSecondary} ${ccButton.buttonFlat}`]: buttonFlat,
    [ccButton.buttonDestructiveFlat]: buttonDestructiveFlat,
    [ccButton.buttonUtilityFlat]: buttonUtilityFlat,
    // others
    [ccButton.buttonUtility]: utility,
    [`${ccButton.buttonUtilitySizing} ${ccButton.buttonMediumFontSize}`]: utility && !small,
    [ccButton.buttonLink]: link,
    [ccButton.buttonPill]: pill,
    [`${ccButton.buttonPillSizing} ${ccButton.buttonMediumFontSize}`]: pill && !small,
    [ccButton.buttonInProgress]: loading,
    [ccButton.buttonIsDisabled]: props.disabled,
    [ccButton.linkAsButton]: !!props.href,
    // small sizing, all buttons
    [ccButton.buttonSmallSecondary]: (buttonSecondaryDefault || secondary || buttonFlat) && small,
    [ccButton.buttonSmallPrimary]: (primary || buttonDestructive || buttonDestructiveFlat ) && small,
    [ccButton.buttonSmallUtility]: utility && small,
    [ccButton.buttonSmallButtonPill]: pill && small,
    [ccButton.buttonSmallButtonLink]: link && small,
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
          aria-valuetext="Laster..."
        />
      ) : null}
    </>
  );
});
