import { useRef } from 'react';

let idCount = 0;
export default function useId(prefix = 'id-') {
  const id = useRef(idCount++);
  return prefix + id.current;
};