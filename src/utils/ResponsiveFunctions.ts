export const isMobileDevice = () => {
    return (
        (typeof window.orientation !== "undefined") ||
        (navigator.userAgent.indexOf('IEMobile') !== -1) ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
};