import { Icon } from "@chakra-ui/react";
import React from "react";

export const BlockchainIcon = ({ type, color, ...rest }) => {
  if (type === "polygon") {
    if (color === "gray")
      return (
        <Icon viewBox="0 0 24 25" fill="none" h="25px" w="24px" {...rest}>
          <g clipPath="url(#clip0_8_10648)">
            <path
              d="M11.9994 24.6993C18.5618 24.6993 23.8817 19.3795 23.8817 12.8171C23.8817 6.25468 18.5618 0.934814 11.9994 0.934814C5.43706 0.934814 0.117188 6.25468 0.117188 12.8171C0.117188 19.3795 5.43706 24.6993 11.9994 24.6993Z"
              fill="#272A2C"
            />
            <path
              d="M15.934 10.2754C15.6492 10.1096 15.2784 10.1096 14.9651 10.2754L12.7421 11.5465L11.2314 12.3746L9.00845 13.6467C8.72365 13.8125 8.3531 13.8125 8.03951 13.6467L6.27347 12.6518C5.98868 12.486 5.789 12.1822 5.789 11.8506V9.88868C5.78748 9.72329 5.83198 9.56074 5.91753 9.41919C6.00309 9.27764 6.12633 9.16267 6.27347 9.08714L8.01198 8.12011C8.29678 7.95429 8.66733 7.95429 8.98092 8.12011L10.7194 9.08714C11.0042 9.25296 11.2039 9.55705 11.2039 9.88837V11.1595L12.7146 10.3029V9.03177C12.7162 8.86608 12.6715 8.70324 12.5858 8.56149C12.5 8.41975 12.3764 8.30471 12.2288 8.22928L9.00845 6.40659C8.72365 6.2411 8.3531 6.2411 8.03951 6.40659L4.76216 8.22928C4.61501 8.30474 4.49174 8.41964 4.40613 8.56113C4.32052 8.70262 4.27594 8.86513 4.27738 9.0305V12.7072C4.27594 12.8726 4.32052 13.0351 4.40613 13.1766C4.49174 13.3181 4.61501 13.433 4.76216 13.5084L8.03951 15.3324C8.32431 15.4982 8.69486 15.4982 9.00845 15.3324L11.2314 14.0888L12.7421 13.2322L14.9651 11.9886C15.2499 11.8228 15.6204 11.8228 15.934 11.9886L17.6725 12.9559C17.9573 13.1217 18.157 13.4255 18.157 13.7571V15.7191C18.1583 15.8843 18.1137 16.0467 18.0282 16.1881C17.9427 16.3295 17.8195 16.4444 17.6725 16.52L15.934 17.5145C15.6492 17.6803 15.2784 17.6803 14.9651 17.5145L13.2266 16.5475C12.9418 16.3817 12.7421 16.0776 12.7421 15.7463V14.4758L11.2314 15.3324V16.6035C11.2298 16.7691 11.2743 16.9318 11.3599 17.0736C11.4455 17.2153 11.5689 17.3304 11.7162 17.406L14.9936 19.2287C15.2784 19.3942 15.6489 19.3942 15.9625 19.2287L19.2398 17.406C19.5246 17.2402 19.7243 16.9364 19.7243 16.6048V12.9281C19.7258 12.7627 19.6813 12.6002 19.5957 12.4587C19.5102 12.3172 19.387 12.2023 19.2398 12.1269L15.934 10.2754Z"
              fill="#828690"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_10648">
              <rect width="24" height="24" fill="white" transform="translate(0 0.81665)" />
            </clipPath>
          </defs>
        </Icon>
      );
    else
      return (
        <Icon viewBox="0 0 24 25" fill="none" h="25px" w="24px" {...rest}>
          <g clipPath="url(#clip0_247_1780)">
            <path
              d="M11.9994 24.6993C18.5618 24.6993 23.8817 19.3795 23.8817 12.8171C23.8817 6.25468 18.5618 0.934814 11.9994 0.934814C5.43706 0.934814 0.117188 6.25468 0.117188 12.8171C0.117188 19.3795 5.43706 24.6993 11.9994 24.6993Z"
              fill="#8247E5"
            />
            <path
              d="M15.934 10.2754C15.6492 10.1096 15.2784 10.1096 14.9651 10.2754L12.7421 11.5465L11.2314 12.3746L9.00845 13.6467C8.72365 13.8125 8.3531 13.8125 8.03951 13.6467L6.27347 12.6518C5.98868 12.486 5.789 12.1822 5.789 11.8506V9.88868C5.78748 9.72329 5.83198 9.56074 5.91753 9.41919C6.00309 9.27764 6.12633 9.16267 6.27347 9.08714L8.01198 8.12011C8.29678 7.95429 8.66733 7.95429 8.98092 8.12011L10.7194 9.08714C11.0042 9.25296 11.2039 9.55705 11.2039 9.88837V11.1595L12.7146 10.3029V9.03177C12.7162 8.86608 12.6715 8.70324 12.5858 8.56149C12.5 8.41975 12.3764 8.30471 12.2288 8.22928L9.00845 6.40659C8.72365 6.2411 8.3531 6.2411 8.03951 6.40659L4.76216 8.22928C4.61501 8.30474 4.49174 8.41964 4.40613 8.56113C4.32052 8.70262 4.27594 8.86513 4.27738 9.0305V12.7072C4.27594 12.8726 4.32052 13.0351 4.40613 13.1766C4.49174 13.3181 4.61501 13.433 4.76216 13.5084L8.03951 15.3324C8.32431 15.4982 8.69486 15.4982 9.00845 15.3324L11.2314 14.0888L12.7421 13.2322L14.9651 11.9886C15.2499 11.8228 15.6204 11.8228 15.934 11.9886L17.6725 12.9559C17.9573 13.1217 18.157 13.4255 18.157 13.7571V15.7191C18.1583 15.8843 18.1137 16.0467 18.0282 16.1881C17.9427 16.3295 17.8195 16.4444 17.6725 16.52L15.934 17.5145C15.6492 17.6803 15.2784 17.6803 14.9651 17.5145L13.2266 16.5475C12.9418 16.3817 12.7421 16.0776 12.7421 15.7463V14.4758L11.2314 15.3324V16.6035C11.2298 16.7691 11.2743 16.9318 11.3599 17.0736C11.4455 17.2153 11.5689 17.3304 11.7162 17.406L14.9936 19.2287C15.2784 19.3942 15.6489 19.3942 15.9625 19.2287L19.2398 17.406C19.5246 17.2402 19.7243 16.9364 19.7243 16.6048V12.9281C19.7258 12.7627 19.6813 12.6002 19.5957 12.4587C19.5102 12.3172 19.387 12.2023 19.2398 12.1269L15.934 10.2754Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_247_1780">
              <rect width="24" height="24" fill="white" transform="translate(0 0.81665)" />
            </clipPath>
          </defs>
        </Icon>
      );
  } else if (type === "avalanche") {
    if (color === "gray")
      return (
        <Icon viewBox="0 0 24 25" fill="none" h="25px" w="24px" {...rest}>
          <g clipPath="url(#a)" fill="#000000">
            <path fill="#ffffff" d="M19.4012 4.11702H4.58282V17.5851H19.4012V4.11702Z"></path>
            <path
              fill="#949494"
              fillRule="evenodd"
              d="M23.992 12C23.992 18.6187 18.6231 23.984 12 23.984C5.377 23.984 0.00799561 18.6187 0.00799561 12C0.00799561 5.38139 5.377 0.0159569 12 0.0159569C18.6231 0.0159569 23.992 5.38139 23.992 12ZM8.60182 16.769H6.2745C5.78547 16.769 5.5439 16.769 5.39661 16.6749C5.23752 16.5718 5.14031 16.4011 5.12852 16.2126C5.11968 16.039 5.24048 15.8269 5.48204 15.403L11.2285 5.28088C11.473 4.85105 11.5967 4.63613 11.7528 4.55665C11.9208 4.47128 12.1211 4.47128 12.289 4.55665C12.4452 4.63613 12.5689 4.85105 12.8134 5.28088L13.9947 7.34169L14.0008 7.3522C14.2649 7.81332 14.3988 8.04716 14.4573 8.29259C14.5221 8.5605 14.5221 8.84312 14.4573 9.11103C14.3983 9.35832 14.2658 9.59386 13.9977 10.062L10.9792 15.3942L10.9714 15.4078C10.7056 15.8728 10.5709 16.1084 10.3841 16.2862C10.1809 16.4805 9.93635 16.6218 9.66826 16.7014C9.42374 16.769 9.14978 16.769 8.60182 16.769ZM14.4791 16.769H17.8138C18.3058 16.769 18.5533 16.769 18.7007 16.672C18.8597 16.5689 18.9599 16.3952 18.9688 16.2069C18.9773 16.0388 18.8591 15.8351 18.6276 15.4357C18.6196 15.4222 18.6116 15.4083 18.6034 15.3942L16.933 12.5386L16.914 12.5064C16.6793 12.1097 16.5608 11.9094 16.4086 11.832C16.2408 11.7466 16.0433 11.7466 15.8754 11.832C15.7222 11.9115 15.5985 12.1205 15.354 12.5415L13.6895 15.3972L13.6838 15.407C13.4402 15.8273 13.3184 16.0374 13.3272 16.2097C13.339 16.3982 13.4362 16.5718 13.5953 16.6749C13.7396 16.769 13.9871 16.769 14.4791 16.769Z"
              clipRule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="a">
              <rect width="24" height="24" fill="#ffffff"></rect>
            </clipPath>
          </defs>
        </Icon>
      );
    else
      return (
        <Icon viewBox="0 0 24 25" fill="none" h="25px" w="24px" {...rest}>
          <g clipPath="url(#clip0_2682_4154)">
            <path d="M19.4012 4.11702H4.58282V17.5851H19.4012V4.11702Z" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.992 12C23.992 18.6187 18.6231 23.984 12 23.984C5.377 23.984 0.00799561 18.6187 0.00799561 12C0.00799561 5.38139 5.377 0.0159569 12 0.0159569C18.6231 0.0159569 23.992 5.38139 23.992 12ZM8.60182 16.769H6.2745C5.78547 16.769 5.5439 16.769 5.39661 16.6749C5.23752 16.5718 5.14031 16.4011 5.12852 16.2126C5.11968 16.039 5.24048 15.8269 5.48204 15.403L11.2285 5.28088C11.473 4.85105 11.5967 4.63613 11.7528 4.55665C11.9208 4.47128 12.1211 4.47128 12.289 4.55665C12.4452 4.63613 12.5689 4.85105 12.8134 5.28088L13.9947 7.34169L14.0008 7.3522C14.2649 7.81332 14.3988 8.04716 14.4573 8.29259C14.5221 8.5605 14.5221 8.84312 14.4573 9.11103C14.3983 9.35832 14.2658 9.59386 13.9977 10.062L10.9792 15.3942L10.9714 15.4078C10.7056 15.8728 10.5709 16.1084 10.3841 16.2862C10.1809 16.4805 9.93635 16.6218 9.66826 16.7014C9.42374 16.769 9.14978 16.769 8.60182 16.769ZM14.4791 16.769H17.8138C18.3058 16.769 18.5533 16.769 18.7007 16.672C18.8597 16.5689 18.9599 16.3952 18.9688 16.2069C18.9773 16.0388 18.8591 15.8351 18.6276 15.4357C18.6196 15.4222 18.6116 15.4083 18.6034 15.3942L16.933 12.5386L16.914 12.5064C16.6793 12.1097 16.5608 11.9094 16.4086 11.832C16.2408 11.7466 16.0433 11.7466 15.8754 11.832C15.7222 11.9115 15.5985 12.1205 15.354 12.5415L13.6895 15.3972L13.6838 15.407C13.4402 15.8273 13.3184 16.0374 13.3272 16.2097C13.339 16.3982 13.4362 16.5718 13.5953 16.6749C13.7396 16.769 13.9871 16.769 14.4791 16.769Z"
              fill="#E84142"
            />
          </g>
          <defs>
            <clipPath id="clip0_2682_4154">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </Icon>
      );
  }
};
