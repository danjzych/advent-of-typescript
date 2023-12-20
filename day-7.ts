"use strict"

type AppendGood<T> = {
  [Property in keyof T as Property extends string ? `good_${Property}` : never]: T[Property]
};