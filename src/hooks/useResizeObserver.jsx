import { useCallback, useEffect, useState } from "react";

export default function useResizeObserver(ref, isResize) {
  // 1. Custom Hook에서 ResizeObserver 객체를 state로 관리
  const [observer] = useState(
    new ResizeObserver((entries) => handleResize(entries))
  );

  // 2. Custom Hook에서 반환하는 변경된 width, height, top, left
  const [height, setHeight] = useState();

  // 3. useCallback()을 사용하여 크기가 변경되었을 경우 Callback 함수를 호출한다.
  const handleResize = useCallback((entries) => {
    // 3-1. 관측된 요소가 없으면 빈 값을 return한다.
    if (!Array.isArray(entries)) {
      return;
    }

    // 3-2. 관측된 요소가 있는 경우 첫 번쨰 항목을 가져온다.
    const entry = entries[0];
    const { height } = entry.contentRect;

    // 3-3. 변경된 width, height, top, left를 설정한다.
    setHeight(height);
  }, []);

  // 4. isResize 값에 따라 관측 시작&종료한다.
  useEffect(() => {
    observer.observe(ref.current);
  }, [observer, ref]);

  // 5. 변경된 width, height, top, left를 반환한다.
  return [height];
}
