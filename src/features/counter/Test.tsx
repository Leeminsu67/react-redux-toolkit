import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchUsersAsync, incrementAsync } from "./counterSlice";

function Test() {
  const dispatch = useAppDispatch();

  // 비동기 처리 중에 unmount 되면 중간에 끊어버림
  useEffect(() => {
    // const promise = dispatch(incrementAsync(10));
    const promise = dispatch(fetchUsersAsync());
    return () => {
      // promise abort는 중간에 끊어버리는거임
      promise.abort();
    };
  }, []);

  return <div>Test</div>;
}

export default Test;
