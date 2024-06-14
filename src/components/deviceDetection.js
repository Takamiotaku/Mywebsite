export const isMobileDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Regex pattern to match a broader range of mobile devices
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
  };
  