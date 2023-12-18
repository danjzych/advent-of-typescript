"use strict"

type Address = { address: string; city: string };
type PresentDeliveryList<T> = {
	[Property in keyof T]: Address
};

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html