const _get_window_height = () => {
    return window.innerHeight || 
           document.documentElement.clientHeight ||
           document.body.clientHeight || 0;
}

/**
 * Get current absolute window scroll position
 */
function _get_window_Yscroll() {
    return window.pageYOffset || 
           document.body.scrollTop ||
           document.documentElement.scrollTop || 0;
}

/**
 * Get current absolute document height
 */
function _get_doc_height() {
    return Math.max(
        document.body.scrollHeight || 0, 
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0, 
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0, 
        document.documentElement.clientHeight || 0
    );
}


/**
 * Get current vertical scroll percentage
 */
function getPercentage() {
    return (
        (_get_window_Yscroll() + _get_window_height()) / _get_doc_height()
    ) * 100;
}

const scrollController = { getPercentage }

export default scrollController