export const calculateFontSize = (parentContainerId, containerWithTextId) => {
  const parent = document.querySelector(`#${parentContainerId}`);
  const withText = document.querySelector(`#${containerWithTextId}`);
  if (parent && withText) {
    let fontSize = parseInt(
      window.getComputedStyle(withText).getPropertyValue('font-size')
    );

    while (withText.clientWidth > parent.clientWidth && fontSize > 0) {
      fontSize--;
      withText.style.fontSize = fontSize + 'px';
    }
  }
};
