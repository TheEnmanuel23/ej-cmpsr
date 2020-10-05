"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;

var _Message = require("../../components/primitives/Chat/Conversation/Message");

const getStyles = (placement, backgroundColor, hasTime, hasText, hasMedia, isMediaLoaded) => {
  const {
    wrapperClasses,
    messageClasses,
    mediaPreview,
    mediaLoader
  } = getMessagePlacementClasses(placement, backgroundColor, hasTime, hasText, isMediaLoaded);
  return {
    wrapperClasses,
    messageClasses,
    timeClasses: hasTime ? 'mt-1 mb-2' : '',
    textWrapper: `${hasMedia ? 'pt-1' : 'pt-2'} pb-2 px-3`,
    mediaPreview,
    mediaWrapper: 'relative cursor-pointer w-16-375 md:w-20-125 h-16-375 md:h-20-125 flex justify-center',
    numberOfMediaFiles: 'w-3-125 h-3-125 bg-fill-black-300 md:w-3-75 md:h-3-75 rounded-full flex items-center justify-center absolute m-auto top-0 right-0 left-0 bottom-0',
    mediaLoader,
    imageWrapper: 'flex',
    badgeLoader: 'w-3-125 h-3-125 bg-fill-black-300 md:w-3-75 md:h-3-75 rounded-full flex items-center justify-center absolute m-auto top-0 right-0 left-0 bottom-0'
  };
};

exports.getStyles = getStyles;

const getMessagePlacementClasses = (placement, backgroundColor, hasTime, hasText, isMediaLoaded) => {
  const baseWrapper = `flex flex-col ${hasTime ? 'mb-0' : 'mb-2'}`;
  const baseMessage = `${backgroundColor} p-1 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left`;
  const baseMedia = `w-full max-w-20 rounded-message-rounded object-cover ${isMediaLoaded ? 'block' : 'hidden'}`;
  const baseMediaLoader = 'flex justify-center items-center w-full h-full bg-fill-secondary-600 rounded-message-rounded';

  if (placement === _Message.MessagePlacement.Left) {
    return {
      wrapperClasses: `${baseWrapper} items-start justify-start`,
      messageClasses: `${baseMessage} rounded-message-rounded rounded-bl-message-semirounded`,
      mediaPreview: `${baseMedia} ${hasText ? 'rounded-bl-none rounded-br-none' : 'rounded-bl-message-semirounded'}`,
      mediaLoader: `${baseMediaLoader} ${hasText ? 'rounded-bl-none rounded-br-none' : 'rounded-bl-message-semirounded'}`
    };
  } else {
    return {
      wrapperClasses: `${baseWrapper} items-end justify-end`,
      messageClasses: `${baseMessage} rounded-message-rounded rounded-br-message-semirounded`,
      mediaPreview: `${baseMedia} ${hasText ? 'rounded-bl-none rounded-br-none' : 'rounded-br-message-semirounded'}`,
      mediaLoader: `${baseMediaLoader} ${hasText ? 'rounded-bl-none rounded-br-none' : 'rounded-br-message-semirounded'}`
    };
  }
};