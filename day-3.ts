"use strict"

type GiftWrapper<T, U, V> = {
  present: T;
  from: U;
  to: V;
}

// Good Video of generics https://www.youtube.com/watch?v=t0qQSujSslQ