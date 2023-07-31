import { useState, useEffect, useCallback, useRef } from "react";

interface IUseThrottledFnResult<T extends any[]> {
  throttledFn: (...args: T) => void;
  isThrottled: boolean;
}

export const useThrottledFn = <T extends any[]>(
  func: (...args: T) => void,
  delay: number
): IUseThrottledFnResult<T> => {
  const [isThrottled, setIsThrottled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const throttledFn = useCallback(
    (...args: T) => {
      if (!isThrottled) {
        setIsThrottled(true);
        func(...args);
        timeoutRef.current = setTimeout(() => {
          setIsThrottled(false);
        }, delay);
      }
    },
    [func, delay, isThrottled]
  );

  return {
    throttledFn,
    isThrottled,
  };
};
