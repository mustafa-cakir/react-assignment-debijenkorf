/**
 *
 * @param callback {function}
 * @param wait {number}
 * Helper function to wait a certain amount of time before running again
 */
export const debounce = (callback: (...arg: any[]) => void, wait = 350) => {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
        const next = () => callback(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
};
