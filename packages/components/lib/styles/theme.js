const colors = require('./colors');

module.exports = {
  fontFamily: {
    sans: ['Roboto-Regular'],
    'd-h1': 'Roboto-Bold',
    'd-h2': 'Roboto-Light',
    'd-h3': 'Roboto-Regular',
    'd-h4': 'Roboto-Regular',
    'd-h5': 'Roboto-Bold',
    'd-h6': 'Roboto-Medium',
    'd-body-regular': 'Roboto-Regular',
    'd-detail-regular': 'Roboto-Regular',
    'd-eyebrow-regular': 'Roboto-Regular',
    'd-form-filled': 'Roboto-Regular',
    'd-form-error': 'Roboto-Regular',
    'd-form-label': 'Roboto-Bold',
    'd-button-enabled': 'Roboto-Medium',
    'd-link-small': 'Roboto-Regular',
    'm-h1': 'Roboto-Bold',
    'm-h2': 'Roboto-Light',
    'm-h3': 'Roboto-Regular',
    'm-h4': 'Roboto-Regular',
    'm-h5': 'Roboto-Bold',
    'm-h6': 'Roboto-Medium',
    'm-body-regular': 'Roboto-Regular',
    'm-detail-regular': 'Roboto-Regular',
    'm-eyebrow-regular': 'Roboto-Regular',
    'm-form-filled': 'Roboto-Regular',
    'm-form-error': 'Roboto-Regular',
    'm-form-label': 'Roboto-Bold',
    'm-button-enabled': 'Roboto-Medium',
    'm-link-small': 'Roboto-Regular',
    'intensity-light': 'Roboto-Light',
    'intensity-regular': 'Roboto-Regular',
    'intensity-medium': 'Roboto-Medium',
    'intensity-bold': 'Roboto-Bold',
  },
  extend: {
    padding: {
      0.15: '0.15rem',
      0.375: '0.375rem',
      '0-625': '0.625rem',
      1.125: '1.125rem',
      3.5: '3.5rem',
    },
    boxShadow: {
      '4%':
        '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0, 0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
      '12%':
        '0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px -4px rgba(0, 0, 0, 0.2)',
    },
    borderColor: {
      'fill-secondary': {
        800: '#44d081',
      },
    },
    borderRadius: {
      'btn-rounded': '1.75rem',
      'btn-semi-rounded': '0.5rem',
      'btn-rectangle': '0',
      'input-rounded': '1.5rem',
      'input-semi-rounded': '0.25rem',
      'input-rectangle': '0',
      'message-rounded': '22px',
      'message-semirounded': '6px',
      'modal-rounded': '1.375rem',
      'modal-semi-rounded': '0.25rem',
      'modal-rectangle': '0',
    },
    stroke: {
      'fill-primary': {
        900: '#414141',
      },
    },
    colors: {
      ...colors,
      // Typographies
      dark: {
        100: '#000000',
        50: '#828282',
        25: '#C8C8C8',
      },
      light: {
        100: '#FFFFFF',
        50: '#FFFFFF',
        25: '#FFFFFF',
      },
      accent: {
        100: '#2A5AA7',
        50: '#2A5AA7',
        25: '#2A5AA7',
      },
    },
    fontSize: {
      'd-h1': '4.75rem',
      'd-h2': '3.75rem',
      'd-h3': '3rem',
      'd-h4': '2.125rem',
      'd-h5': '1.5rem',
      'd-h6': '1.25rem',
      'd-body-regular': '1rem',
      'd-detail-regular': '0.875rem',
      'd-eyebrow-regular': '0.75rem',
      'd-form-filled': '0.9375rem',
      'd-form-error': '0.75rem',
      'd-form-label': '0.75rem',
      'd-button-enabled': '0.9375rem',
      'd-link-small': '0.75rem',
      'm-h1': '3rem',
      'm-h2': '2.75rem',
      'm-h3': '2.375rem',
      'm-h4': '2.125rem',
      'm-h5': '1.5rem',
      'm-h6': '1.125rem',
      'm-body-regular': '1rem',
      'm-detail-regular': '0.875rem',
      'm-eyebrow-regular': '0.75rem',
      'm-form-filled': '0.9375rem',
      'm-form-error': '0.75rem',
      'm-form-label': '0.75rem',
      'm-button-enabled': '1.01625rem',
      'm-link-small': '0.75rem',
    },
    lineHeight: {
      'd-h1': '5.25rem',
      'd-h2': '4.5rem',
      'd-h3': '3rem',
      'd-h4': '2.25rem',
      'd-h5': '2rem',
      'd-h6': '1.625rem',
      'd-body-regular': '1.5rem',
      'd-detail-regular': '1.25rem',
      'd-eyebrow-regular': '0.875rem',
      'd-form-filled': '1.125rem',
      'd-form-error': '1.125rem',
      'd-form-label': '1.125rem',
      'd-button-enabled': '1.125rem',
      'd-link-small': '0.875rem',
      'm-h1': '3.5625rem',
      'm-h2': '3.25rem',
      'm-h3': '2.75rem',
      'm-h4': '2.25rem',
      'm-h5': '1.875rem',
      'm-h6': '1.5rem',
      'm-body-regular': '1.5rem',
      'm-detail-regular': '1rem',
      'm-eyebrow-regular': '0.875rem',
      'm-form-filled': '1.125rem',
      'm-form-error': '1.125rem',
      'm-form-label': '1.125rem',
      'm-button-enabled': '1.25rem',
      'm-link-small': '0.875rem',
    },
    letterSpacing: {
      'd-h1': '-0.07rem',
      'd-h2': '-0.03125rem',
      'd-h3': '0rem',
      'd-h4': '0rem',
      'd-h5': '0.01125rem',
      'd-h6': '0.009375rem',
      'd-body-regular': '0rem',
      'd-detail-regular': '0rem',
      'd-eyebrow-regular': '0rem',
      'd-form-filled': '0rem',
      'd-form-error': '0rem',
      'd-form-label': '0rem',
      'd-button-enabled': '0.015rem',
      'd-link-small': '0rem',
      'm-h1': '-0.046875rem',
      'm-h2': '-0.023125rem',
      'm-h3': '0rem',
      'm-h4': '0rem',
      'm-h5': '0.01125rem',
      'm-h6': '0.00875rem',
      'm-body-regular': '0rem',
      'm-detail-regular': '0rem',
      'm-eyebrow-regular': '0rem',
      'm-form-filled': '0rem',
      'm-form-error': '0rem',
      'm-form-label': '0rem',
      'm-button-enabled': '0.016875rem',
      'm-link-small': '0rem',
    },
    fontWeight: {
      'weight-d-h1': '300',
      'weight-d-h2': '300',
      'weight-d-h3': '300',
      'weight-d-h4': '300',
      'weight-d-h5': '300',
      'weight-d-h6': '300',
      'weight-d-body-regular': '300',
      'weight-d-detail-regular': '300',
      'weight-d-eyebrow-regular': '300',
      'weight-d-form-filled': '300',
      'weight-d-form-error': '300',
      'weight-d-form-label': '300',
      'weight-d-button-enabled': '300',
      'weight-d-link-small': '300',
      'weight-m-h1': '300',
      'weight-m-h2': '300',
      'weight-m-h3': '300',
      'weight-m-h4': '300',
      'weight-m-h5': '300',
      'weight-m-h6': '300',
      'weight-m-body-regular': '300',
      'weight-m-detail-regular': '300',
      'weight-m-eyebrow-regular': '300',
      'weight-m-form-filled': '300',
      'weight-m-form-error': '300',
      'weight-m-form-label': '300',
      'weight-m-button-enabled': '300',
      'weight-m-link-small': '300',
    },
    width: {
      1.75: '1.75rem',
      2.15: '2.15rem',
      2.6: '2.6rem',
      '3-125': '3.125rem',
      3.5: '3.5rem',
      '3-75': '3.75rem',
      '16-375': '16.375rem',
      '20-125': '20.125rem',
      480: '30rem',
    },
    height: {
      1.75: '1.75rem',
      2.15: '2.15rem',
      '2-625': '2.625rem',
      2.6: '2.6rem',
      '3-125': '3.125rem',
      3.5: '3.5rem',
      '3-75': '3.75rem',
      '16-375': '16.375rem',
      '20-125': '20.125rem',
    },
    minHeight: {
      '2-5': '2.5rem',
      '2-625': '2.625rem',
      3: '3rem',
    },
    minWidth: {
      3: '3rem',
      '8-125': '8.125rem',
      10: '10rem',
      '20-625': '20.625rem',
    },
    margin: {
      '-0-22': '-0.22rem',
      '0-625': '0.625rem',
      '3-5': '3.5rem',
    },
    maxWidth: {
      '8-75': '8.75rem',
      13: '13rem',
      '13-75': '13.75rem',
      19: '19rem',
      20: '20rem',
      37: '37rem',
      '1/2': '50%',
      '1/3': '33.3%',
      '2/3': '66.6%',
      '3/4': '75%',
      85: '85%',
      90: '90%',
      content: '1280px',
      'hero-copy': '800px',
      'hero-copy-medium': '600px',
      'hero-copy-small': '500px',
    },
    inset: {
      '1/2': '50%',
      1: '1rem',
      '-0-25': '-0.25rem',
    },
    backgroundOpacity: {
      40: '.4',
    },
  },
};
